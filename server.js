'use strict';

var express = require('express');
var app = express();

var phantom = require('phantom');

app.get('/', function (req, res) {
  res.sendfile('index.html');
  // newer syntax: res.sendFile(__dirname + '/index.html');
  var id = parseInt(req.query.id);
  if (typeof id == 'number' && id >= 0) {
    console.log('Executing gallery item id ' + id);

    phantom.create(function (ph) {
      ph.createPage(function (page) {

        // Viewport must be defined for code.org to render properly
        page.set('viewportSize', {width:1024,height:768});

        // Faster when less data to download
        page.set('settings.loadImages', false);

        // Log events
        page.set('onLoadStarted', function() {
            console.log("page.onLoadStarted");
        });
        page.set('onLoadFinished', function() {
            console.log("page.onLoadFinished");
        });
        page.onResourceRequested(
          function(requestData, request, arg1, arg2) { },
          function(requestData) { console.log(requestData.url) }
        );
        page.set('onError', function (msg, trace) {
          console.log(msg);
          trace.forEach(function(item) {
            console.log('  ', item.file, ':', item.line);
          });
        });

        // Fetch code
        var url = 'http://studio.code.org/c/' + id + '/edit';
        page.open(url, function (status) {
          console.log("Fetched url " + url + " with " + status);
          page.render('1.png');

          // Page isn't rendered at pageLoad. Instead wait
          // for some additional time until fully loaded.
          setTimeout(function() {
            page.render('2.png');

            // Simple .click() didn't work, event hack required!
            page.evaluate(function() {
                var a = document.getElementById("show-code-header");
                var e = document.createEvent('MouseEvents');
                e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(e);
                waitforload = true;
                return document.readyState;
            }, function (result) {
              console.log('readyState: ' + result);
              page.render('3.png');

              page.evaluate(function () {
                return $('pre.generatedCode')[0].innerText;
              }, function (result) {
                page.render('3.png');
                console.log('Code: ' + result);
                ph.exit();
              });
            });

          }, 8000);

        });
      });
    });

  }
});


var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Robot listening at http://%s:%s', host, port);

});


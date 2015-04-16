'use strict';

var express = require('express');
var app = express();

var Browser = require('zombie');
var browser = new Browser();

app.get('/', function (req, res) {
  res.sendfile('index.html');
  // newer syntax: res.sendFile(__dirname + '/index.html');
  var id = parseInt(req.query.id);
  if (typeof id == 'number') {
    console.log('Executing gallery item id ' + id);

    browser.visit('http://studio.code.org/c/42489384/edit', function (e) {
      if (e) {
        throw e;
      }

      /*
      console.log(browser.text('title'));
      // wait for new page to be loaded then fire callback function
      browser.wait().then(function() {
        console.log(browser.text('title'));
        console.log(browser.text('#show-code-header'));
        browser.evaluate("$('#show-code-header').click()");
        return callback(null);
      });
      */
      // var target = browser.querySelector('#show-code-header');
      // browser.fire(target, 'click');
      // console.log(browser.text('title'));
      // console.log(browser.text('pre.generatedCode'));

    });

  }
});


var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Robot listening at http://%s:%s', host, port);

});


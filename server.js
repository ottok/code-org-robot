'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
  var id = parseInt(req.query.id);
  if (typeof id == 'number') {
    console.log('Executing gallery item id ' + id);
  }
});


var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Robot listening at http://%s:%s', host, port);

});


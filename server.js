'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  var code = req.body.code;
  res.send('Running: \n' + code);
  //var robot = require('./robot.js');
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Robot listening at http://%s:%s', host, port);

});


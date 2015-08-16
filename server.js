'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var robot = require('./robot.js');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/static', express.static('public'));


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  robot.commands.code = req.body.code;
  robot.start();
});


var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Robot listening at http://%s:%s', host, port);

});


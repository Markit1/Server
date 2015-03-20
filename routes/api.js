var express = require('express');
var body_parser = require('body-parser');

var app = express();

app.use(body_parser.json('application/json'));

/*jslint unparam:true */
app.post('/share/', function (req, res) {
  if (req.body.sender &&
      req.body.html &&
      req.body.url &&
      req.body.receiver) {
    req.send(req.body);
  }
});

module.exports = app;
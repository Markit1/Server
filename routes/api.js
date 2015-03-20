var express = require('express');
var body_parser = require('body-parser');

var app = express();

app.use(body_parser.json('application/json'));

module.exports = app;
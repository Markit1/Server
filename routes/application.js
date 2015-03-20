var express = require('express');

var app = express();

/*jslint unparam: true*/
app.get('/', function (req, res) {
  res.render('index', {});
});
/*jslint unparam: false*/

module.exports = app;
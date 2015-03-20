var express = require('express');

var app = express();

/*jslint unparam: true*/
app.get('/', function (req, res) {
  res.send('Hola mundo');
});
/*jslint unparam: false*/
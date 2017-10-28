var express = require('express');
var app = express();

app.get('/user', function (req, res) {
  res.send('Hello User! Version 3');
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK!');
});

app.listen(7001, function () {
  console.log('Example app listening on port 8080!');
});

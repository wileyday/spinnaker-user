var express = require('express');
var app = express();

app.get('/user', function (req, res) {
  res.send('Hello User! Version 4');
});

app.get('/user/a', function (req, res) {
  res.send('Hello User A!');
});

app.get('/user/b', function (req, res) {
  res.send('Hello User B!');
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK!');
});

app.listen(7001, function () {
  console.log('Example app listening on port 7001!');
});

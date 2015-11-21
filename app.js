var express = require('express');
var app = express();
//routing 
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//routing pertama
app.get('/people', function (req, res) {
  res.send('Hello World and People!');
});

//routing kedua
app.get('/myname', function (req, res) {
  res.send('Hello World and every body my name is Dita Paraditya!');
});

//routing ketiga
app.get('/myborn', function (req, res) {
  res.send('Hello every body I was born Yogyakarta!');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
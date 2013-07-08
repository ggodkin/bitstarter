var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var outString = '';
//var buf = new Buffer(5000);
//app.get('/', function(request, response) {
//  response.send('Hello World2!');
//});
var buf = new Buffer(fs.readFileSync('index.html'), "utf-8");
outString = buf.toString('ascii');
console.log(outString);
app.get('/',function(request,response){
  response.send(outString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

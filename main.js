var express = require('express');
var app = express();
var os = require('os');

app.get('/', function(req, res){
	res.send(os.hostname());
});

app.get('*', function(req, res){
	res.send("not found");
});

app.listen(8080, "0.0.0.0");

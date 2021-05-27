var express = require('express');
var app = express();
var port = 3000;
var url = require('url');
var http = require('http');
var message = "hello";
app.get('/', function (req, res) {
    var name = req.query.name;
    if (name) {
        res.send("Hello " + " " + name);
    }
    else {
        res.send("Hello World");
    }
});
app.listen(port, function () {
    console.log('App listening at http://localhost:${port}');
});

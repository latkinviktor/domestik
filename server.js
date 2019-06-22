// http://127.0.0.1:3000/echo?message=Hello -> Hello
var http = require('http');
var url = require('url');


var server = new http.Server(function(req, res) {
    console.log( req.method, req.url);

    var urlParsed = url.parse(req.url);
    console.log(urlParsed);
    res.end("Hello, Irina");
});

//server.listen(3000, '127.0.0.1');
server.listen(80, '45.67.57.209');

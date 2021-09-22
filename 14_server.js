// importing the required modules
var http = require("http");

// handling incoming requests, create web server
var server = http.createServer(function(req, res) {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>this is home page</p></body></html>');
        res.end();
    } else if(req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>this is about page</p></body></html>');
        res.end();
    } else {
        res.end("invalid request");
    }
});

// listen for any incoming requests
server.listen(5000);

console.log("NodeJS web server at port 5000 is running!");
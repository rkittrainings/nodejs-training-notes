var http = require("http");

var server = http.createServer(function(req, res) {
    if(req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({message: 'hello world', name: 'jay', age: 23}));
        res.end();
    }
});

server.listen(5000);

console.log('NodeJS web server at port 5000 is running...');
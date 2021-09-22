// importing or loading the required modules
var http = require('http'); 

// creating or connecting to server
var server = http.createServer(function(req, res) {
    console.log('connected!');
});

// listening the server data at client
server.listen(5000);
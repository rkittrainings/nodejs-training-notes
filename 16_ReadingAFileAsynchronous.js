var fs = require('fs');

fs.readFile('TestFile.txt', 'utf8', function(err, data) {
    if(err) throw err;
    console.log(data);
});

console.log("We are testing the file in Asyn...");
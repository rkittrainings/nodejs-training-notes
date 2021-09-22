var fs = require('fs');

var data = fs.readFileSync('TestFile.txt', 'utf8');
console.log(data);

console.log("We are testing the file in Syn...");
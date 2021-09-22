var fs = require('fs');

fs.appendFileSync('test.txt', 'adding through sync.,');
console.log("data appended into file through syn done success");
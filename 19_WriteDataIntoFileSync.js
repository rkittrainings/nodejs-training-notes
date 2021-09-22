var fs = require('fs');

fs.writeFileSync('test.txt', 'writing data into file in sync.,');
console.log("write data completes");
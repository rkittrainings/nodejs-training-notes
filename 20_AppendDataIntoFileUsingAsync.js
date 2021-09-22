var fs = require('fs');

fs.appendFile('test.txt', 'adding new content through async!', function(err) {
    if(err) throw err;
    console.log("append done success");
});
var fs = require('fs');

fs.writeFile('test.txt', 'world! welcome', function(err) {
    if(err) throw err;
    console.log('write operation complete!');
});
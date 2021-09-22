var log = {
    info: function(info) {
        console.log("Info : " + info);
    }, 
    warning: function(warning) {
        console.log("Warning : " + warning);
    }, 
    error: function(error) {
        console.log("Error : " + error);
    }
};

var user = {
    userDetails: function() {
        console.log("User Details!");
    }
}

module.exports = log;

// or 

// module.exports.log = function(msg) { console.log(msg) }
// module.exports.user = function(msg) { console.log(msg) }
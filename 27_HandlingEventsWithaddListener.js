var emitter = require("events").EventEmitter;

var em = new emitter();

// subscribe FirstEvent
em.addListener("FirstEvent", function(data) {
    console.log("First subscriber : " + data);
});

// subscribe SecondEvent
em.on("SecondEvent", function(data) {
    console.log("First subscriber : " + data);
});

// raising FirstEvent
em.emit("FirstEvent", "This is my first NodeJS event emitter");

// raising SecondEvent
em.emit("SecondEvent", "This is my second NodeJS event emitter");
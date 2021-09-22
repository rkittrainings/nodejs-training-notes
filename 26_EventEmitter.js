// get the reference of EventEmitter class of events module
var events = require('events');

// create an object of EventEmitter class by using above reference 
var em = new events.EventEmitter();

// subscribe for firstEvent
em.on('FirstEvent', function(data) {
    console.log('First subscriber : ' + data);
});

em.emit('FirstEvent', 'This is my first NodeJs event emitter!');
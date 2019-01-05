var events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();
module.exports = {

  em: em
}

/*
File Last Updated by
Name: Masato
Date: 17/03/18
Object:
  Example osc receiver in js.
  Need npm: npm install osc-receiver
  TO DO: Test with Ableton Osc sender :)
*/

var OscReceiver = require('osc-receiver')
  , receiver = new OscReceiver();

receiver.bind(9337);

receiver.on('/foo', function(a, b, c) {
  // do something.
});

receiver.on('/bar', function(x, y) {
  // do something.
});

receiver.on('message', function() {
  // handle all messages
  var address = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
});

'use strict';

let assert = require('assert');
let flatible = require('../');
let circularNetwork = require('./lib/circular_network').network;

assert.doesNotThrow(function() {
  let thing = 0;
  for (let thing of flatible(circularNetwork.jim)) {
    things++;
  }
}, RangeError, 'Circular array references should not cause errors.');

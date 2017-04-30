'use strict';

let assert = require('assert');
let flatible = require('../');
let circularNetwork = require('./lib/circular_network').network;
let thingCount = 0;

assert.doesNotThrow(function() {
  for (let thing of flatible(circularNetwork.jim)) {
    thingCount++;
  }
}, RangeError, 'Circular array references should not cause errors.');

assert.equal(thingCount, 4,
  `thingCount should be 4 not ${thingCount}`);

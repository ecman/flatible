'use strict';

let someArray = [[[0, [1], 2], [3], 4], 5];
let index = 0;
let someValue = null;
let assert = require('assert');
let flatible = require('../');

for (someValue of flatible(someArray)) {
  assert.equal(someValue, index,
    `someValue should equal ${index} not ${someValue}`);
  index++;
}

assert.equal(someValue, Math.max(index-1, 0),
  `someValue should equal ${Math.max(index-1, 0)} not ${someValue}`);


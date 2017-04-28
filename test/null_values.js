'use strict';

let someArray = [[[null, [1], null], [3], null], 5];
let index = 0;
let someValue = null;
let assert = require('assert');
let flatible = require('../');

for (someValue of flatible(someArray)) {
  if (index % 2 === 0) {
    assert.deepEqual(someValue, null, 
      `someValue should equal null not ${someValue}`);
  } else {
    assert.equal(someValue, index,
      `someValue should equal ${index} not ${someValue}`);
  }
  index++;
}

assert.equal(someValue, Math.max(index-1, 0),
  `someValue should equal ${Math.max(index-1, 0)} not ${someValue}`);


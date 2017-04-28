'use strict';

let nonArray = "nothing";
let index = 0;
let someValue = null;
let assert = require('assert');
let flatible = require('../');

for (someValue of flatible(nonArray))
  index++;

assert.equal(index, 0, 
  `index should be 0 not ${index}`);


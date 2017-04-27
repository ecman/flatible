'use strict';

let someArray = [];
let index = 0;
let someValue = null;
let assert = require('assert');
let flatible = require('../');

for (someValue of flatible(someArray))
  index++;

assert.equal(index, someArray.length, 
  `index should be ${someArray.length} not ${index}`);


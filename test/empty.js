'use strict';
let someArray = [];
let index = 0;

for (let someValue of flatible(someArray))
  index++;

assert.equal(index, someArray.length, 
  `index should be ${someArray.length}`);

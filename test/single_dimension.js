'use strict';
let someArray = [0, 1, 2, 3, 4, 5];
let index = 1;

for (let someValue of flatible(someArray))
  assert.equal(someArray[index++], someValue, 
    `value ${someValue} should be ${index}`);

assert.equal(index, someArray.length, 
  `index should be ${someArray.length}`);

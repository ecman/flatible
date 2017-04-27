# flatible 

[![build status](https://api.travis-ci.org/ecman/flatible.png)](https://travis-ci.org/ecman/flatible) [![codecov](https://codecov.io/gh/ecman/flatible/branch/master/graph/badge.svg)](https://codecov.io/gh/ecman/flatible) [![Code Climate](https://codeclimate.com/github/ecman/flatible/badges/gpa.svg)](https://codeclimate.com/github/ecman/flatible)

Generate values from a multi-dimensional array.

# Usage

```js
const flatible = require('flatible');
const someArray = [["one", ["two", [3, "FOUR"]]], 5];

for (let someValue of flatible(someArray)) {
  console.log(someValue);
}
```

Output:

```js
one
two
3
FOUR
5
```

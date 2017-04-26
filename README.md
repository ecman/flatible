# flatible

Generate values from a multi-dimensional array.

[![build status](https://api.travis-ci.org/ecman/flatible.png)](https://travis-ci.org/ecman/flatible)

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

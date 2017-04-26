# flatible

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

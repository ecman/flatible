'use strict';
module.exports = flatible;

function* flatible(thing, index) {
  if (thing instanceof Array) {
    index = index || 0;
    while (index < thing.length) {
      yield* flatible(thing[index++], null);
    }
  }
  else if (index !== undefined) {
    yield thing;
  }
}


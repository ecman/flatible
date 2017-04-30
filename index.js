'use strict';
module.exports = flatible;

function* flatible(thing, index, seen) {
  seen = seen || new WeakSet();
  if (thing instanceof Array) {
    if (seen.has(thing)) return;
    seen.add(thing);
    index = index || 0;
    while (index < thing.length) {
      yield* flatible(thing[index++], null, seen);
    }
  }
  else if (index !== undefined) {
    yield thing;
  }
}

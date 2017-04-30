'use strict';
module.exports = flatible;

function* flatible(thing, index, seen) {
  seen = seen || new WeakSet();
  let skip = seen.has(thing);
  if (!skip && thing instanceof Array) {
    seen.add(thing);
    index = index || 0;
    while (index < thing.length) {
      yield* flatible(thing[index++], null, seen);
    }
  }
  else if (!skip && index !== undefined) {
    yield thing;
  }
}

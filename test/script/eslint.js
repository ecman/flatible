'use strict';

init();

function init() {
  if (skipEslint()) {
    console.info('Skipping eslint with this node version:', process.versions.node, "\n");
  } else {
    require('eslint');
  }
}

function skipEslint() {
  let major = process.versions.node[0];
  return parseInt(major) < 4;
}

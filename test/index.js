'use strict';

const path = require('path');
const fs = require('fs');
const vm = require('vm');
const testfiles = fs.readdirSync(__dirname);
const assert = require('assert');
const flatible = require('../');

for (let filename of testfiles) {
  if (path.extname(filename) !== '.js' ||
      path.basename(__filename) === filename)
    continue;

  let code = fs.readFileSync(`test/${filename}`);
  let sandbox = {'assert': assert, 'flatible': flatible };
  let options = { filename: filename };

  vm.runInNewContext(code, sandbox, options);
  console.log(filename, 'OK');
}


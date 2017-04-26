'use strict';

const path = require('path');
const fs = require('fs');
const cp = require('child_process');
const testfiles = fs.readdirSync(__dirname);

for (let filename of testfiles) {
  if (path.extname(filename) !== '.js' ||
      path.basename(__filename) === filename)
    continue;

  cp.execFileSync('node', [`test/${filename}`]);
  console.log(filename, 'OK');
}


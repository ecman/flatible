'use strict';

const path = require('path');
const fs = require('fs');
const testfiles = fs.readdirSync(__dirname);

for (let filename of testfiles) {
  if (path.extname(filename) !== '.js' ||
      path.basename(__filename) === filename)
    continue;

  require(`./${filename}`);
  console.log(filename, 'OK');
}


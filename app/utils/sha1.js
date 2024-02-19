'use strict';

const crypto = require('crypto');

module.exports = str => {
  const shaSum = crypto.createHash('sha1');
  shaSum.update(str);
  str = shaSum.digest('hex');
  return str;
};

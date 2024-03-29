'use strict';

const crypto = require('crypto');
module.exports = opts => {
  const {
    signature,
    timestamp,
    nonce,
  } = opts;

  const MY_TOKEN = 'DingBaoLeiTest'; // token

  const array = [ MY_TOKEN, timestamp, nonce ];

  const MY_SIGNATURE = crypto.createHash('sha1')
    .update(array.sort()
      .toString()
      .replace(/,/g, ''), 'utf-8')
    .digest('hex');

  console.log('微信服务器signature：', signature);
  console.log('我们校验后的：signature', MY_SIGNATURE);

  return MY_SIGNATURE === signature;
};

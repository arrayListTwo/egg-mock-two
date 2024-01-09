'use strict';

const Service = require('egg').Service;

const delay = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

class WXService extends Service {
  async checkSignature(query) {
    return require('../utils/checkSignature')(query);
  }
}

module.exports = WXService;

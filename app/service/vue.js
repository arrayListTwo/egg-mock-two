'use strict';

const Service = require('egg').Service;

const delay = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

class VueService extends Service {
  async wInvalidate(count) {
    if (parseInt(count, 10) === 1) {
      await delay(5000);
      return '第一次';
    }
    await delay(2000);
    return '不是第一次';

  }
}

module.exports = VueService;

'use strict';

const Service = require('egg').Service;

const delay = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

class IframeApiService extends Service {
  async login({ name, password }) {
    // await delay(2000);
    if (name && password) {
      return 'DingBaoLei';
    }
    return '';
  }
  async getAddressList({ pageSize, pageNum }) {
    console.log({ pageSize, pageNum });
    return [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2017-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      date: '2018-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
    }, {
      date: '2019-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
    }, {
      date: '2010-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }];
  }
}

module.exports = IframeApiService;

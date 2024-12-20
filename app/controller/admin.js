'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = {
      data: {
        code: 20000,
        data: {
          token: 'DingBaoLei',
        },
      },
    };
  }
  async userInfo() {
    const { ctx } = this;
    ctx.body = {
      data: {
        code: 20000,
        data: {
          name: 'DingBaoLei',
          age: 18,
          roles: [ 'admin' ],
        },
      },
    };
  }
}

module.exports = AdminController;

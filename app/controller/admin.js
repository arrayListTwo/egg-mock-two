'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = {
      data: {
        code: 20000,
        data: {
          token: 'accessToken',
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
          token: 'accessToken',
        },
      },
    };
  }
}

module.exports = AdminController;

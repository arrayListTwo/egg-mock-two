'use strict';

const Controller = require('egg').Controller;

class IframeApiController extends Controller {
  async login() {
    const { ctx } = this;
    const { name, password } = ctx.request.body;
    const loginStatus = await ctx.service.iframeApi.login({ name, password });
    if (loginStatus) {
      // ctx.cookies.set('token', loginStatus, { signed: false });
      ctx.body = {
        code: 0,
        data: loginStatus,
        msg: '登录成功',
      };
    } else {
      ctx.body = {
        code: 1,
        data: null,
        msg: '登录失败',
      };
    }
  }

  async getAddressList() {
    const { ctx } = this;
    console.log(ctx.cookies.get('token', { signed: false }));
    const { pageSize, pageNum } = ctx.query;
    const addressList = await ctx.service.iframeApi.getAddressList({ pageSize, pageNum });
    ctx.body = {
      code: 0,
      data: addressList,
      msg: '获取地址列表成功',
    };
  }
}

module.exports = IframeApiController;

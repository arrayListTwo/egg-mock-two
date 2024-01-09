'use strict';

const Controller = require('egg').Controller;

class WXController extends Controller {
  async checkSignature() {
    const { ctx } = this;
    const query = ctx.query;
    const wx = await ctx.service.wx.checkSignature(query);
    if (wx) {
      ctx.body = query.echostr;
    }
  }
}

module.exports = WXController;

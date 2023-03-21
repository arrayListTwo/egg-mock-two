'use strict';

const Controller = require('egg').Controller;

class VueController extends Controller {
  async watchInvalidate() {
    const { ctx } = this;
    const count = ctx.query.count;
    const wInvalidate = await ctx.service.vue.wInvalidate(count);
    ctx.body = {
      code: 0,
      msg: wInvalidate,
    };
  }
}

module.exports = VueController;

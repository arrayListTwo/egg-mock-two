'use strict';

const Controller = require('egg').Controller;
const { v4: uuidv4 } = require('uuid');
const dayjs = require('dayjs');
const sha1 = require('sha1');


class WXController extends Controller {
  async checkSignature() {
    const { ctx } = this;
    const query = ctx.query;
    const wx = await ctx.service.wx.checkSignature(query);
    if (wx) {
      ctx.body = query.echostr;
    }
  }

  async getWXSDKSignature() {
    const { ctx } = this;
    console.log(ctx.request.body);
    let accessToken = await ctx.service.cache.get('accessToken');
    // let accessToken = '';
    if (!accessToken) {
      console.log('网络请求accessToken');
      const res = await ctx.service.wx.getAccessToken();
      if (res.errCode) {
        throw new Error(res.errmsg);
      } else {
        await ctx.service.cache.set('accessToken', res.data.access_token);
        // ctx.body = res.data.access_token;
        accessToken = res.data.access_token;
      }
    } else {
      console.log('缓存获取accessToken： ', accessToken);
    }
    let jsapiTicket = await ctx.service.cache.get('jsapiTicket');
    // let jsapiTicket = '';
    if (!jsapiTicket) {
      console.log('网络请求jsapiTicket');
      const res = await ctx.service.wx.getJsapiTicket(accessToken);
      await ctx.service.cache.set('jsapiTicket', res.data.ticket);
      jsapiTicket = res.data.ticket;
    } else {
      console.log('缓存获取jsapiTicket： ', jsapiTicket);
    }
    // appid: 'wx3ec10050b126c608',
    const timestamp = dayjs().unix();
    const nonceStr = uuidv4().replaceAll('-', '');
    const url = ctx.request.body.pageUrl;
    // const ret = {
    //   jsapi_ticket: jsapiTicket,
    //   timestamp: dayjs().valueOf(),
    //   nonceStr: uuidv4().replaceAll('-', ''),
    //   url: ctx.request.body.pageUrl,
    // };
    const str = `jsapi_ticket=${jsapiTicket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`;
    console.log('签名字符串： ', str);
    // const str = require('../utils/row')(ret);
    // ret.sign = require('../utils/sha1')(str);
    const sign = sha1(str);
    const appid = 'wx3ec10050b126c608';
    ctx.body = {
      appid,
      timestamp,
      noncestr: nonceStr,
      sign,
      jsapi_ticket: jsapiTicket,
      url,
    };
  }

}

module.exports = WXController;

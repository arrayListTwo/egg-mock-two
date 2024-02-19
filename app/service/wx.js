'use strict';

const Service = require('egg').Service;
const axios = require('axios');

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

  async getAccessToken() {
    return await axios.get('https://api.weixin.qq.com/cgi-bin/token', {
      params: {
        grant_type: 'client_credential',
        appid: 'wx3ec10050b126c608',
        secret: '911623ec7de6176ae4ec7e83c1f7a0e0',
      },
    });
  }

  async getJsapiTicket(accessToken) {
    return await axios.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket', {
      params: {
        access_token: accessToken,
        type: 'jsapi',
      },
    });
  }
}

module.exports = WXService;

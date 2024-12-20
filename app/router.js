'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/login', controller.admin.login);
  router.get('/user/info', controller.admin.userInfo);
  router.post('/user/test/login', controller.test.login);
  router.get('/user/test/info', controller.test.userInfo);
  router.get('/watch/invalidate', controller.vue.watchInvalidate);
  router.get('/wx/checkSignature', controller.wx.checkSignature);
  router.post('/wx/getWXSDKSignature', controller.wx.getWXSDKSignature);
  router.post('/iframeApi/login', controller.iframeApi.login);
  router.get('/iframeApi/getAddressList', controller.iframeApi.getAddressList);
};

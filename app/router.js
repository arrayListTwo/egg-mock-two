'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/login', controller.admin.login);
  router.get('/user/info', controller.admin.userInfo);
  router.get('/watch/invalidate', controller.vue.watchInvalidate);
};

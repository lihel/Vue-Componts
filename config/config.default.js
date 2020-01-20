/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1563430282707_8640';

  // add your middleware config here
  config.middleware = [];
  /** 静态资源 */
  config.static = {
    prefix: '/',
    gzip: true,
  };
  /** view 引擎 */
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    },
    root: [
      path.join(appInfo.baseDir, 'app/public')
    ].join(',')
  };

  config.security = {
    xframe: {
      enable: false, // important
      value: 'SAMEORIGIN'  // default value is 'SAMEORIGIN'
    },
    csp: {
      // ignore: '/example',
      // xframe: {}
    },
    csrf: {
      enable: true,
      ignoreJSON: false,
      cookieName: "csrfToken", // default is 'csrfToken'
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数，线上一般要打开不能忽略. 每个的token前端ajax通过header传过来进行校验请求合法性
      ignore: ctx => (ctx.request.hostname === 'localhost' || ctx.request.hostname === '127.0.0.1')
    },
  }

  config.api = {
    domain: 'http://localhost:8080',
  };

  // 跨域
  config.cors = {
    origin: '*',
    allowMethods: ['GET', 'POST'],
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

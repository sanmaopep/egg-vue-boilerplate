'use strict';

// 路由定义
module.exports = app => {

  // 首页定义
  app.get('/', 'home.index');

  // Admin单页定义
  app.get('/json', 'home.json');
  // 
};

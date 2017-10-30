'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1509334621122_3461';

  // add your config here
  config.middleware = [];

  // pug 设置
  config.view = {
    mapping: {
      '.pug': 'pug',
    }
  }

  return config;
};

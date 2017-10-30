'use strict';

const path = require('path');

module.exports = appInfo => {
    const config = exports = {};

    // 静态文件服务配置
    config.static = {
        // prefix: '/static'
    }
    return config;
};

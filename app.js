var startproxy = require('./scripts/startproxy');
var info = require('./utils/info')


module.exports = app => {
    app.beforeStart(function* () {
        // 应用会等待这个函数执行完成才启动
        info.showEnv();
        // 开发模式下对webpack dev server进行代理
        if (process.env.NODE_ENV === "development") {
            startproxy(app);
        }
    });
};
// 框架会把 app/ extend / application.js 中定义的对象与 Koa Application 的 prototype 对象进行合并
// 在应用启动时会基于扩展后的 prototype 生成 app 对象。


module.exports = {
    foo(param) {
        // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    },
};
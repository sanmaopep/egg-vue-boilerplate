'use strict';

module.exports = (app) => {
  class HomeController extends app.Controller {
    // 首页
    * index() {
      yield this.ctx.render('hello.pug');
    }
    // 测试Json
    * json() {
      this.ctx.body = "{test:123}";
    }
  }
  return HomeController;
};

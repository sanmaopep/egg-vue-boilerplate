'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'Hello World';
    }
  }
  return HomeController;
};

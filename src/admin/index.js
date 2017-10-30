import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import info from 'utils/info'

// 输出环境变量情况
info.showEnv();

Vue.use(VueRouter);
Vue.use(Vuex);

// Add fetch polyfill
// import 'fetch-detector'
// import 'fetch-ie8'

store.dispatch("loadAllData");

const app = new Vue({
    router,
    store,
    template: `<router-view></router-view>`
}).$mount('#main');
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import router from './router'

Vue.use(VueRouter);
Vue.use(Vuex);

// Add fetch polyfill
import 'fetch-detector'
import 'fetch-ie8'

store.dispatch("loadAllData");

const app = new Vue({
    router,
    store,
    template: `<router-view></router-view>`
}).$mount('#dataFormApp');
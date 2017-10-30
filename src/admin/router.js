import VueRouter from 'vue-router'

import Faculty from './components/faculty.vue'

// 路由配置
export default new VueRouter({
    routes: [{
        path: '/',
        component: Faculty
    },]
});
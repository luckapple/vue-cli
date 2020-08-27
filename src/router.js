import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './pages/index/index'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '主页',
            component: Index
        },
    ]
})
export default router
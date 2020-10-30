import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './pages/index/index'
import Find from './pages/find/find'
import Shop from './pages/shop/shop'
import My from './pages/my/my'
import Faquan from './pages/faquan/faquan'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect:"/index"
        },
        {
            path: '/index',
            name: '主页',
            component: Index
        },
        {
            path: '/find',
            name: '发现页面',
            component: Find
        },{
            path: '/shop',
            name: '商城',
            component: Shop
        },{
            path: '/my',
            name: '我的',
            component: My
        },
        {
            path: '/my',
            name: '我的',
            component: My
        },{
            path: '/faquan',
            name: '发圈',
            component: Faquan
        },
    ]
})
export default router
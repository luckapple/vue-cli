import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

Vue.config.productionTip = false
Vue.use(VueRouter)


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes=[
  {path:'/foo/:id',compoent:Foo},
  {path:'/bar',compoent:Bar}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

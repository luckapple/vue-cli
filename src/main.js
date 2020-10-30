import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TabBar from "./components/tabbar"

Vue.config.productionTip = false;
Vue.component("tab-bar",TabBar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import TabBar from "./components/tabbar"

Vue.config.productionTip = false

new Vue({
  router,
  components: {
    'tab-bar':TabBar
  },
  render: h => h(App)
}).$mount('#app')

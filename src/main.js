import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TabBar from "./components/tabbar"

Vue.config.productionTip = false;
Vue.component("tab-bar",TabBar)

// vuex 
import Vuex from "vuex"
Vue.use(Vuex)  
const store = new Vuex.Store({
  state:{
    count:0,
  },
  mutations:{
    increment(state){
      state.count++;
    }
  },
  actions:{//异步执行
    increment({state}){                              
      setTimeout(()=>{
        state.count++;
      },1000)
    }
  },
  getters:{//缓存 
    doubleCount(state){
      return state.count*2
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

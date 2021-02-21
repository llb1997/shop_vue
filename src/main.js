import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'

//引入字体图标
import './assets/fonts/iconfont.css'

import axios from 'axios'
// axios设置一下请求的根路径
//配置请求的根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 每一个vue的组件，都可以通过this，直接访问到$http,从而去发起ajax请求
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

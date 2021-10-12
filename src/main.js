/*
 * @Author: aven9527
 * @Date: 2021-10-11 21:23:38
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 21:04:34
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import VueLazyload from './modules/lazyload'

Vue.use(VueLazyload, {
  loading: 'http://localhost:3000/images/loading.gif',
  error: 'http://localhost:3000/images/3.jpeg',
  preload: 1.3
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

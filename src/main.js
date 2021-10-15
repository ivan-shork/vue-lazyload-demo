/*
 * @Author: aven9527
 * @Date: 2021-10-11 21:23:38
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 23:09:55
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import VueLazyload from './modules/lazyload'
import UnLimitLoad from './modules/unLimitLoad/install.js'
import LazyImg from './modules/lazyImg'
import lazyComponent from './modules/lazyload/lazy-component'
import VueRouter from 'vue-router'
import routes from './router'
Vue.use(UnLimitLoad)
Vue.use(VueLazyload, {
  loading: 'http://localhost:3000/images/loading.gif',
  error: 'http://localhost:3000/images/3.jpeg',
  preload: 1.3
})
Vue.use(LazyImg)
Vue.use(lazyComponent)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

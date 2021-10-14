/*
 * @Author: aven9527
 * @Date: 2021-10-12 22:03:09
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 22:06:02
 * @Description: file content
 */
import LazyComponent from './index.vue'
LazyComponent.install = (Vue)=> {
    Vue.component(LazyComponent.name, LazyComponent)
}
export default LazyComponent
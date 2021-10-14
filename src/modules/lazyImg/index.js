/*
 * @Author: aven9527
 * @Date: 2021-10-12 23:01:14
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 23:17:37
 * @Description: v-lazy 简易版 图片懒加载
 */

 

 export default {
     install(Vue) {
         Vue.directive('lazyimg', {
             bind: (el, binding, vnode) =>{
                 const options = {
                    threshold: 0.01
                 }
                 let io = new IntersectionObserver(([entry])=> {
                     const {isIntersecting} = entry
                     console.log(entry);
                     
                     if(isIntersecting) {
                        console.log(isIntersecting);
                        
                        el.setAttribute 
                        ? el.setAttribute('src', binding.value) 
                        : el.src = binding.value
                        el.onerror = ()=> {}
                        io.unobserve(el)
                     }
                 }, options)
                 io.observe(el)
             }
         })
     }
 }

/*
 * @Author: aven9527
 * @Date: 2021-10-12 22:09:01
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 22:24:33
 * @Description: file content
 */
 const unLimit = ()=> import ('../pages/unlimitLoadTest.vue')
 const lazyload = ()=> import('../pages/lazyLoadTest.vue')
 const lazyCom = ()=> import('../pages/LazyComTest.vue')
 export default [
     {
         path: '/lazy',
         name: 'lazyloadTest',
         component: lazyload,
         meta: {
             title: '图片懒加载'
         }
     },
     {
         path: '/unlimit',
         name: 'unlimitTest',
         component: unLimit,
         meta: {
             title: '无限加载'
         }
     },
     {
         path: '/lazycom',
         name: 'LazyComponentTest',
         component: lazyCom,
         meta: {
             title: '组件懒加载'
         }
     }
 ]

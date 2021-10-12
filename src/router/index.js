/*
 * @Author: aven9527
 * @Date: 2021-10-12 22:09:01
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 22:24:33
 * @Description: file content
 */
 const unLimit = ()=> import ('../pages/unlimitLoadTest.vue')
 const lazyload = ()=> import('../pages/lazyLoadTest.vue')
 
 export default [
     {
         path: '/lazy',
         name: 'lazyloadTest',
         component: lazyload,
     },
     {
         path: '/unlimit',
         name: 'unlimitTest',
         component: unLimit
     }
 ]


/*
 * @Author: aven9527
 * @Date: 2021-10-12 23:01:14
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 23:17:37
 * @Description: v-lazy 组件懒加载
 */

 

export default {
  install(Vue) {
      Vue.directive('lazyCom', {
          bind: (el, binding, vnode) =>{
              const options = {
                 threshold: 0.01
              }
              let io = new IntersectionObserver(([entry])=> {
                  const {isIntersecting} = entry
                  console.log(entry);
                  // if(!isIntersecting) {
                  //   const comment = document.createComment(' ');
                  //   Object.defineProperty(comment, 'setAttribute', {
                  //     value: () => undefined,
                  //   });
                  //   vnode.elm = comment;
                  //   vnode.text = ' ';
                  //   vnode.isComment = true;
                  //   vnode.context = undefined;
                  //   vnode.tag = undefined;
                  //   vnode.data.directives = undefined;
                
                  //   if (vnode.componentInstance) {
                  //     vnode.componentInstance.$el = comment;
                  //   }
                
                  //   if (el.parentNode) {
                  //     el.parentNode.replaceChild(comment, el);
                  //   }
                  // }
              }, options)
              io.observe(el)
          }
      })
  }
}

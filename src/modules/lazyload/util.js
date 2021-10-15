/*
 * @Author: aven9527
 * @Date: 2021-10-11 22:56:43
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 21:35:31
 * @Description: file content
 */


 export const parentScroll = (el)=> {
    if(!el) return 
    if(!(el instanceof HTMLElement)) return window
    let parent = el.parentNode
    while(parent) {
        if(isScroll(parent)) return parent        
        parent = parent.parentNode
    }

    return window

 }

 export const isScroll = (el)=> {
    const style = (window.getComputedStyle !== undefined && window.getComputedStyle(el))
                    || el.style
    const overflowStr = style['overflow'] + style['overflow-y'] + style ['overflow-x']
    const reg = /(auto|scroll)/
    return reg.test(overflowStr)
 }


 export const throttle = (func,timewait=400)=> {
    let pre = 0
    return function(...args) {
        let now = Date.now()
        let context = this
        if(now - pre >= timewait) {
            func.apply(context, args)
            pre = now
        }
        
    }
 }

 export const testSupportsPassive = ()=> {
     let support = false
     try {
         let opts = Object.defineProperty({}, 'passive', {
             get() {
                 support = true
             }
         })
         window.addEventListener('test', null, opts)
     } catch (error) {    
     }
     return support
 }
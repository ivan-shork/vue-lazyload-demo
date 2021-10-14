/*
 * @Author: aven9527
 * @Date: 2021-10-11 22:48:57
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 21:39:06
 * @Description: lazy类生成函数
 */

import { parentScroll, throttle } from "./util"
import LazyImg from './lazyImg'
export default function lazy(Vue) {
    return class Lazy {
        constructor(options) {
            this.options = options
            this.isAddScrollEve = false
            this.observeEvents = ['scroll, resize']
            this.lazyImgPool = []
            // 监听元素的队列
            this.targetQueue = []
            this.TargetIndex = 0
            this.lazyHandleScroll = throttle(this.handleScroll.bind(this), 1000)
        }
        bindLazy (el, binding, vnode) {
            // bind的时候还没有渲染dom 因此取不到dom
            Vue.nextTick(()=> {
                const $parent = parentScroll(el)

                // 防止多个parent重复添加Event
                $parent && typeof $parent.isAddEve === 'undefined' && (
                    $parent.addEventListener('scroll', this.lazyHandleScroll, false),
                    $parent.isAddEve = 1                    
                ) 

                // img实例
                const lazyImg = new LazyImg({
                    el,
                    options: this.options,
                    src: binding.value,
                    imgRender: this.imgRender.bind(this)
                })

                this.lazyImgPool.push(lazyImg)

                // 初始化的时候要显示一部分
                this.handleScroll()
            })
            
        }
        
        handleScroll() {
            // 父元素滚动的时候取判断该元素是否在视口内并渲染            
            
            this.lazyImgPool.forEach(img=> {
                // 从未加载过才去加载
                if(!img.loaded) {
                    let isVisible = img.checkIsVisible() || false
                    isVisible && img.loadImg()
                }

            })
        }

        imgRender(lazyImg, state) {
            const {el} = lazyImg
            const {loading: originLoading, error: originError} = this.options
            let src 
            switch(state) {
                case 'loading':
                    src = originLoading || ''
                    break
                case 'error':
                    src = originError || ''
                    break
                default: 
                    src = lazyImg.src
                    break
            }
            el.setAttribute && el.setAttribute('src', src)
        }

        // 队列里添加懒加载组件
        addLazyComponent(vm) {
            this.lazyImgPool.push(vm)       
            this._addTargetQueue(vm)    
        }

        _addTargetQueue(el) {
            if(!el) return
            const target = this.targetQueue.find(item=> item.el === el)
            if(target === undefined || !target) {
                target = {
                    el,
                    id: ++this.TargetIndex,
                    childrenCount: 1,
                    listened: true
                }
                this._initListen(target.el)
                this.targetQueue.push(el)
            } else {
                target.childrenCount ++
            }
            return this.TargetIndex
        }

        _initListen(el) {
            const supportsPassive = this.testSupportsPassive()
            this.observeEvents.forEach(eve=> {
                if(supportsPassive) {
                    el.addEventListener(eve, this.handleScroll)
                } else {
                    el.addEventListener(eve, this.handleScroll, {
                        capture: false,
                        passive: true
                    })
                }
            })
        }

         testSupportsPassive () {
            //  测试支不支持某个属性的方法
            if (!inBrowser) return
            let support = false
            try {
              let opts = Object.defineProperty({}, 'passive', {
                get: function () {
                  support = true
                }
              })
              window.addEventListener('test', null, opts)
            } catch (e) {}
            return support
          }
          
          
          
    }
}
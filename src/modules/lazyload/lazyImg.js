/*
 * @Author: aven9527
 * @Date: 2021-10-12 20:37:05
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 21:47:46
 * @Description: img实例
 */
export default class LazyImg {
    constructor({el, src, options, imgRender}) {
        this.el = el
        this.src = src
        this.options = options
        this.imgRender = imgRender
        this.loaded = false
        this.state = {
            loading: false,
            error: false            
        }
    }
    checkIsVisible() {
        const {top} = this.el.getBoundingClientRect()
        const {preload = 1.3} = this.options        
        return top < window.innerHeight * preload
    }

    load() {
        // 图片还未渲染出来时先渲染loading
        this.imgRender(this, 'loading')
        this.loadImgSync().then(()=> {
            // 成功加载图片
            this.state.loading = true
            this.imgRender(this, 'success')
            this.loaded = true
        }).catch(()=> {
            // 失败
            this.state.error = true
            this.imgRender(this, 'error')
            this.loaded = true
        })
    }

    loadImgSync() {
        return new Promise((resolve, reject)=> {
            const IMG = document.createElement('img')
            IMG.src = this.src
            IMG.onload = ()=> {
                resolve()
            }
            IMG.onerror = ()=> {
                reject()
            }
        })
        
    }
}
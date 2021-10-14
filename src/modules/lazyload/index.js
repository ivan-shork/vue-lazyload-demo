import lazy from './lazy'

const LazyLoad = {
    install(Vue, options) {
        const LazyClass = lazy(Vue)
        const lazyLoad = new LazyClass(options)
        Vue.directive('lazy', {
            // el biding vnode
            bind: lazyLoad.bindLazy.bind(lazyLoad)
        })
    }
}

export default LazyLoad

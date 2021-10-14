import Lazy from './lazy'
const LazyComponent = (lazy)=> {
  return {
    props: {
      tag: {
        type: String,
        default: 'div'
      }
    },
    render(h, context) {
      return h(tag, null, this.show ? this.$slots.default : [])
    },
    data() {
      return {
        show: false,
        loaded: false,
        rect: null
      }
    },
    mounted() {
      lazy.addLazyComponent(this.$el)
      this.getRect()
    },
    methods: {
      getRect() {
        this.rect = this.$el.getBoundingClientRect()
      },
      load() {
        this.show = true
        this.loaded = true
        this.emit('success', this)
        
      },
      checkIsVisible() {
        const {top} = this.rect
        const {preload = 1.3} = this.options        
        return top < window.innerHeight * preload
      }
    }
  }
}

LazyComponent.install = (Vue, options={})=> {
  const LazyClass = Lazy(Vue)
  const lazy = new LazyClass(options)
  Vue.component('lazy-component', LazyComponent(lazy))
}

export default LazyComponent
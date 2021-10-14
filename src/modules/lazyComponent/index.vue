<template>
  <div class="container">
    <div v-if="isInit">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LazyComponent',
  props: {
    maxWaitingTime: {
      type: Number,
      default: 3000
    },
    // 视口
    viewPort: {
      type: typeof window !== 'undefined' ? window.HTMLElement : Object,
      default: ()=> null
    }
  },
  data() {
    return {
      isInit: false
    }
  },
  mounted() {
    this.createObserver()
  },
  methods: {
    createObserver() {
      try {
        this._observer = new IntersectionObserver(this.intersectionHandler, {
          root: this.viewPort,
          threshold: 0.1
        })
        this._observer.observe(this.$el)
      } catch (error) {
        // 没有intersecitonApi  直接加载组件了
        console.log(error);
        this.init()
      }
    },
    intersectionHandler([entry]) {
      console.log(entry);
      // 交叉
      if(entry.isIntersecting  || entry.intersectionRatio > 0) {
        this.init()
        this._observer.unobserve(this.$el)
      }
    },
    init() {
      this.$emit('before-init')
      
      this.requestAnimationFrame(()=>{
        this.isInit = true
        this.$emit('init')
      })
    },
    requestAnimationFrame(callback) {
      // 防止等待太久没有执行回调
        // 设置最大等待时间
      setTimeout(()=> {
        if(this.isInit) return
        callback()
      }, this.maxWaitingTime)
      // 放在其他线程执行， 不然组件的加载会阻塞主线程
      return (window.requestAnimationFrame || ((fn) => setTimeout(fn, 1000 /60)))(callback)
    }
  }
}
</script>

<style>

</style>
<!--
 * @Author: aven9527
 * @Date: 2021-10-12 21:54:32
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 22:49:21
 * @Description: 无限加载组件
-->

<template>
  <div class="target"></div>
</template>

<script>
export default {
    name: 'unLimitLoad',
    props: {
        viewPort: {
            type: typeof window !== 'undefined' ? window.HTMLElement : Object,
            default: () => null
        }
    },
    data() {
        return {
            _observer: null
        }
    },
    mounted() {
        this._observer = new IntersectionObserver(this.obHandler, {
            rootMargin: '0px 0px',
            root: this.viewPort,
            threshold: [0, Number.MIN_VALUE, 0.1]
        })
        this._observer.observe(this.$el)
    },
    methods: {
        obHandler([entry]) {
            // entry对象
            if(entry.isIntersecting || entry.intersectionRatio > 0) {
                console.log('交叉了。。。。');
                // 交叉了， 元素进入视口内
                
                this.$emit('nextLoad')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .target {
        width: 100%;
        height: 30px;
        background: transparent;
    }
</style>

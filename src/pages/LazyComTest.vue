<template>
  <div>
    <lazy-component @success="success">
      <test1 />
    </lazy-component>
    <lazy-component>
      <test1 />
    </lazy-component>
    <lazy-component>
      <test1 />
    </lazy-component>
    <lazy-component>
      <test1 />
    </lazy-component>
    <lazy-component>
      <test1 />
    </lazy-component>
  </div>
</template>

<script>
import Test1 from './test/test1.vue'
export default {
  name: 'LazyComponentTest',
  components: {
    Test1
  },
  methods: {
    success() {
      console.log('加载成功了');
    }
  }
}
</script>

<style>

</style>
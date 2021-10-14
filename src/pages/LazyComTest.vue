<template>
  <div>
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
}
</script>

<style>

</style>
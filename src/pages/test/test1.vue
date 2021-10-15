<template>
  <div class="box">
    halo
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('加载了');
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 200px;
    height: 200px;
    background: salmon;
    color: seashell;
    text-align: center;
    line-height: 200px;
  }
</style>
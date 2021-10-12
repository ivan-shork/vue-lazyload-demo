<template>
  <div id="app">
    <router-view />
    <div class="bottom-bar">
      <div @click="go(1)">懒加载</div>
      <div @click="go(2)">无限加载</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    go(type) {
      if(type === 1) {
        this.$router.push({path: '/lazy'})
      } else {
        this.$router.push({path: '/unlimit'})
      }
    }
  }
}
</script>

<style lang="scss" scoped>

html,
body,
#app{
 height: 100%;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: salmon;
  color: white;
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
}

</style>

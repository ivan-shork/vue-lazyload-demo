<template>
  <div id="app">
    <router-view />
    <div class="bottom-bar">
      <div v-for="(route, key) in routes" :key="key" @click="go(route.path)">
        {{route.meta.title}}
      </div>
    </div>
    
  </div>
</template>

<script>
import routes from './router'
export default {
  name: 'App',
  data() {
    return {
      routes
    }
  },
  methods: {
    go(path) {
      this.$router.push({path})
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

<template>
  <div id="app">
    <div class="container">
      <div class="box" v-for="item in list" :key="item.id">
        <div class="box-image">
          <img v-lazy="item.src" :alt="item.title">
        </div>
        <div class="box-content">
          <p class="box-content-title">
            {{item.title}}
          </p>
          <p class="box-content-tip">
            教师：{{item.teacher}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      list: []
    }
  },
  async mounted() {
    try {
      const res = await axios('http://localhost:3000/imgs')      
      if(!res.data.ret) {
        this.list = res.data.data        
      }
    } catch (error) {
      throw new Error(error)
    }

  }
}
</script>

<style lang="scss" scoped>
html,
body,
#app,
.container{
 height: 100%;
}


.container {
  overflow: auto;
  height: 600px;
}

.box {
  padding: 20px;
  &-image {
    height: 180px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-content {
    color: #333;
    &-title {
      font-size: 22px;
      font-weight: bold;
    }
    &-tip {
      color: gray
    }
  }
}
</style>

<!--
 * @Author: aven9527
 * @Date: 2021-10-12 22:10:14
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-12 22:50:00
 * @Description: file content
-->

<template>
  <div>
      <div class="box" v-for="(item,index) in list" :key="index">
        <div class="box-image">
          <img :src="item.src" :alt="item.title">
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
      <unLimitLoad @nextLoad="getList" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            list: []
        }
    },
     mounted() {
   this.getList() 
  },
  methods: {
      async getList() {
          try {
            const res = await axios('http://localhost:3000/imgs')      
            if(!res.data.ret) {
                this.list = this.list.concat(res.data.data)        
            }
            } catch (error) {
            throw new Error(error)
            }
      }
  }
}
</script>

<style lang="scss" scoped>
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
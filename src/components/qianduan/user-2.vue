<template>
  <el-carousel :interval="5000" arrow="always" height="500px">
    <el-carousel-item v-for="item in imgArr" :key="item.id">
      <img  :src="item.url" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";

interface ArrayObj {
    id:Number,
    url:string
}

let imgArr:ArrayObj[] = reactive([
    {
        id:1,
        url:require("../../assets/qianduan.jpg")
    },
    {
        id:2,
        url:require("../../assets/houduan.jpg")
    },
    {
        id:3,
        url:require("../../assets/ios.jpg")
    },
    {
        id:4,
        url:require("../../assets/xinan.jpg")
    },
])

// let imgArr = reactive([
//     {
//         id:Number
//     }
// ])

</script>

<style scoped lang="scss">
.el-carousel__item img {
    width: 100%;
    height: 100%;
//   position: fixed;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel_container{
    height: 120%;
}
</style>
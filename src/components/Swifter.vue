<template>
  <div id="swift">
    <div v-for="item in data" :key="item.id">
        <img :src="item.url" alt="">
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    setup(){
        let data = reactive([
            {
                id:0,
                url:require('../assets/qianduan.jpg')
            },
            {
                id:1,
                url:require('../assets/houduan.jpg')
            },
            {
                id:2,
                url:require('../assets/ios.jpg')
            },
            {
                id:3,
                url:require('../assets/xinan.jpg')
            }
        ])

        return {
            data
        }
    }
}
</script>

<style>

</style>
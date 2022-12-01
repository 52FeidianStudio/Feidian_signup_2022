<template>
  <div id="header-detail">
    <div id="title">
        <span>{{data.Uname}}--></span> 
    </div>
  </div>
  <Swift></Swift>
</template>

<script>
import Swift from './Swifter.vue'
import { reactive } from '@vue/reactivity'
export default {
    name:"HeaderDetail",
    components:{Swift},
    setup(){
        let data = reactive({
            Uname:"前端组"
        })
        return {
            data
        }
    }
}
</script>

<style lang="scss" scoped>
    #header-detail{
        background-color: red;
        width: 700px;
        height: 130px;
        line-height: 130px;
        text-align: center;
        #title{
            background-color: pink;
            span{
                font-size: 32px;
                color: rgb(39, 96, 9);
            }
        }
    }

</style>
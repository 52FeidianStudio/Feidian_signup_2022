<template>
  <div id="input1-1">
    
    <div id="top">
        <div id="icon"></div>
        <span> 找回密码 </span>
    </div>

    <div id="username-input">
        <span>请输入账号</span>
        <el-input v-model="input" placeholder="Please input username" @keyup.enter="toInput2" />
    </div>

    <div id="next_button">
        <el-button type="primary" :disabled="isDisabled" @click="toInput2">下一步</el-button>
    </div>
    
  </div>
</template>

<script setup lang="ts">


import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core';
// import router from '@/router';
import { useRouter } from 'vue-router';


        let input = ref('');

        let isDisabled = ref(true)

        const $router = useRouter() 

        //监视 input 变化 来控制按钮是否禁用
        watch(input , (newValue,oldValue)=>{

            console.log("new" + newValue,"old"+oldValue);
            if(newValue)
            {
                console.log(111)
                isDisabled.value = false;
            }
            //bug1 在清空输入框的内容时 按钮并未回到 disabled
            else
            {
                isDisabled.value = true;
             }
        },)

        //路由跳转
        function toInput2()
        {
            $router.push('input2');
        }

</script>

<style scoped lang="scss">
    #input1-1{
        width: 400px;
        height: 150px;
        // border: 1px solid black;
        border-radius: 6px;
        // backgr;
        box-shadow: 0px 0px 20px 0px #67b3dd ;
        margin: 0 auto; 
        display: flex;
        // flex: 1;
        flex-direction: column;
        justify-content: space-between;
        padding: 40px;
        margin-top: 40px;
        // align-items: center;
        #top{
            width: 100px;
            height: 16px;
            line-height: 16px;
            // height: 60px;
            // background-color: pink;
            #icon{
                width: 4px;
                height: 16px;
                background-color: #3A77FD;
                float: left;
                margin-right: 10px;
                font-size: 16px;
            }
            // height: 50px;
            // line-height: 50px;
            // flex: 1;
        }
        #username-input{
            // margin-right: 14px;
            font-size: 14px;
            .el-input{
                margin-top: 6px;
            }
            // height: 50px;
            // line-height: 50px;
        }
        
        #next_button{
            .el-button{
                width: 100%;
            }
        }
    }
</style>
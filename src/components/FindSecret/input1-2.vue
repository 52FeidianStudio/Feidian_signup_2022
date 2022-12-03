<template>
  <div id="input1-2">
    
    <div id="top">
        <div id="icon"></div>
        <span> 验证码 </span>
    </div>

    <div id="username-input">
        <span>验证码已发入您的邮箱，请注意查收</span >
        <el-input v-model="input" :placeholder= "'Just remain ' + Time + 's...'"  @keyup.enter="toLogin"/>
        <a href="">没收到验证码？重发</a>
    </div>

    <div id="next_button">
        <el-button type="primary" :disabled="isDisabled" @click="toLogin">去登录</el-button>
    </div>
    
  </div>
</template>

<script setup lang="ts">

import { onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, watch } from '@vue/runtime-core';

import { ref } from '@vue/reactivity'
// import func from 'vue-editor-bridge';
import { useRouter } from 'vue-router';
        const input = ref('');
        let isDisabled = ref(true);
        let Time = ref(60);
        const $router = useRouter();

        var timer;//用 var 定义 函数作用域！

        //调用生命周期钩子 页面挂载上去后 发送请求 时间递减
        onMounted(()=>{
            timer = setInterval(()=>{
                Time.value--;
            },1000)
        })
        //判断 Time 小于 0 让用户重新发送请求
        onBeforeUpdate(()=>{
            if(Time.value == 0)
            {
                timer = null;
                alert("没收到验证码？点击重发")
                Time.value = 60
            }
        })
        //实例摧毁之前 关闭定时器 时间还原
        onBeforeUnmount(()=>{
            timer = null;
            Time.value = 60;
        })
        //watch 监听input框是否为空，控制按钮是否禁止 --> 可以改进 提出来用TS封装
        watch(input , (newValue,oldValue)=>{
            console.log("new" + newValue,"old"+oldValue);
            if(newValue)
            {
                console.log(111)
                isDisabled.value = false;
            }
            else
            {
                isDisabled.value = true;
            }
        },)
        //判断输入框验证码是否正确
        // function isTrue(){
        //     //发送请求 
        // }
        function toLogin(){
            $router.push('/login')
        }
       
</script>

<style scoped lang="scss"> 
    #input1-2{
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
<template>
  <div id="login">
    <div id="left">
      <div id="logo">

        <span>沸腾的心，飞扬的梦！</span>

      </div>

    </div>
    <div id="right">
      <div id="ruleform">
        
        <div id="username">
          <span>账号：</span>
          <el-input v-model="username" placeholder="Please input username" />
        </div>

        <div id="password">
          <span>密码：</span>
          <el-input
            v-model="password"
            type="password"
            placeholder="Please input password"
            show-password
          />
        </div>

        <div id="forget">
          <span >
            <router-link to="/findsecret" target="_blank" >忘记密码?</router-link>
          </span>
        </div>

        <el-row class="mb-4">
          <el-button type="success">登录</el-button>
          <el-button id="default"> <router-link to="/register">注册</router-link></el-button>
        </el-row>

        
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref } from "@vue/reactivity";
    // const userinfo = ref({
    //   username: "",
    //   password: "",
    // });
    const username = ref('');
    const password = ref('');

    let data = reactive([
      require('../assets/qianduan.jpg'),
      require('../assets/houduan.jpg'),
      require('../assets/xinan.jpg'),
      require('../assets/ios.jpg'),
    ])
    
</script>

<style lang="less" scoped>
#login {
  height: 100vh;
  width: 100;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}
#left {
  flex: 1;
  background-color: #fff;
  #logo {
    width: 320px;
    height: 350px;
    // background-color: red;
    margin: 0 auto;
    margin-top: 250px;
    background-image: url('https://avatars.githubusercontent.com/u/11555754?s=200&v=4');
    background-repeat: no-repeat;
    background-position: top center;
    text-align: center;
    font-size: 32px;
    span{
      display: inline-block;
      height: 30px;
      line-height: 30px;
      margin-top: 190px;
      font-family:"华文行楷";
    }
  }
  
}
#right {
  flex: 1;
}
#ruleform{
  width: 400px;
  height: 350px;
  margin: 0 auto;
  margin-left: 50px;
  border: 1px solid rgba(43, 41, 41, 0.5); 
  border-radius: 6px;
  margin-top: 200px;
  background-color: #fbf3f3;
  #username{
    width: 70%;
    margin: 0 auto;
    display: flex;
    margin-top: 80px;
    .el-input{
      width: 80%;
    }

  }
  #password{
    width: 70%;
    margin: 0 auto;
    display: flex;
    margin-top: 30px;
    .el-input{
      width: 80%;
    }
  }
  .el-row{
    width: 70%;
    margin: 0 auto;
    margin-left: 110px;
    margin-top: 50px;
    #default{
      margin-left: 60px;
    }
  }
  #forget{
    float: right;

    // margin-top: 10px;
    margin-right: 70px;
    font-size: 14px;

    // margin-bottom: 4px;
  }
}
</style>
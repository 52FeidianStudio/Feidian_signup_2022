<template>
    <Head></Head>
    <div id="img">
        <img src='https://avatars.githubusercontent.com/u/11555754?s=200&v=4' alt="">
        <div>沸腾的心，飞扬的梦！</div>
    </div>
    
    <el-form :model="form" label-width="120px">
      <el-form-item label="姓名：">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input v-model="form.mail" />
      </el-form-item>
      <el-form-item label="电话：">
        <el-input v-model="form.tele" />
      </el-form-item>
      <el-form-item label="专业：">
        <el-input v-model="form.subject" placeholder="你所在的学院专业 例如：信息学院计算机类2107班" />
      </el-form-item>
      <el-form-item label="报名的组织：">
        <el-select v-model="form.region" placeholder="选择你要报名的组织">
          <el-option label="Web前端" value="Web" />
          <el-option label="后端" value="Java" />
          <el-option label="信息安全" value="Security" />
          <el-option label="IOS" value="iOS" />
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期：">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="点击选择"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
      </el-form-item>
      <el-form-item label="性别：">
        <el-radio-group v-model="form.gender">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="报名原因：">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(Object)">提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue';
  import Head from '../components/home/head.vue';
  
  // do not use same name with ref
  const form = reactive({
    name: '',
    region: '',
    date1: '',
    gender: '',
    desc: '',
    mail:'',
    tele:"",
    subject:""
  })
  
  function onSubmit(form:Object){
        console.log(1)
  }

//   const onSubmit = () => {
//     console.log('submit!')
//   }
  </script>



<style scoped lang="scss">
    #img{
        position: absolute;
        top: 300px;
        left: 300px;
        // background-color: aqua;
        img{
            margin-left: 60px;
        }
        div{
            height: 30px;
            line-height: 30px;
            font-size: 32px;
            text-align: center;
            margin: auto;
            // margin-top: 190px;
            font-family:"华文行楷";
        }
                
    }
    .el-form{
        width: 40%;
        // he;
        padding: 30px;
        margin: 0 auto;
        margin-top: 70px;
        margin-right: 100px;
        border: 1px solid black;
        border-radius: 6px;
        .el-input{
            width: 80%;
        }
    }

</style>
  
<template>
    <div id="reg">
    <div id="register">
        <el-form action="#" id="formdata">
            <div id="input-line">
                <label >用户名：</label ><el-input v-model="ruleForm.username" placeholder="Please input" />
            </div>
            <div id="input-line">
                <label >邮箱：</label ><el-input v-model="ruleForm.mail" placeholder="Please input" />
            </div>
            <div id="input-line">
                <label >密码：</label ><el-input v-model="ruleForm.password" type="password"  show-password placeholder="Please input" />
            </div>
            <div id="input-line">
                <label >确认密码：</label ><el-input v-model="ruleForm.password" type="password"  show-password placeholder="Please input" />
            </div>
            <div id="input-line">
                <label >验证码：</label ><el-input v-model="ruleForm.info" placeholder="Please input" id="last-input" />
            </div>
            <div id="input-line">
                <el-button style="width: 100%;" type="primary">注册</el-button>
            </div>
        </el-form>
        <span @click="toLogin"><a href="">已有账号？去登录 </a></span>
  </div>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRoute,useRouter } from 'vue-router'
export default {
    setup(){
        const $router = useRouter()
        let ruleForm  = reactive({
            username:"",
            password:"",
            mail:"",
            info:""
        })

        function toLogin(){
            $router.push('/login')
        }
        return {
        ruleForm,
    }
    }
    
}
</script>

<style lang="scss" scoped>
#reg{
    width: 100%;
    height: 100vh;
    background-image: url('https://img0.baidu.com/it/u=2250165809,3721637269&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}
    #register {
        width: 500px;
        height: 550px;
        margin: 0 auto;
        border: 1px solid black;
        border-radius: 6px;
        margin-top: 200px;
        background-color: rgba($color: #fff, $alpha: .6);
        // padding: 20px;
        #formdata { 
            .el-input {
                width: 300px;
            }
           
            #input-line{
                width: 400px;
                height: 77px;
                line-height: 77px;
                margin: 0 auto;
                label{
                    display: inline-block;
                    width: 90px;
                    vertical-align: middle;
                    text-align: justify;
                    text-align-last: justify;
                }
            }
            
        }
    }
</style>
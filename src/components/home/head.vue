<template>
    <div id="head">
        <div id="title">沸点部门招新简介</div>
        <div id="sign" @click="toSign">去报名></div>
    </div>
</template>

<script setup lang="ts">
    import {useRouter} from 'vue-router';

    const router = useRouter();
    function toSign(){
        router.push('/signup');
    }

</script>

<style lang="less" scoped>
    #head{
        width: 100%;
        height: 60px;
        background-color: skyblue;
        text-align: center;
        line-height: 60px;
        font-size: 32px;
        font-weight: 400;
        position: relative;
        // display: flex;
        #title {
            cursor: pointer;
            // flex: ;
        }
        #sign{
            position: absolute;
            top: 0px;
            right: 0;
            font-size: 18px;
            color: blanchedalmond;
            // float: right;
        }
        #sign:hover{
            color: rebeccapurple;
            cursor: pointer;
        }
    }
</style>

<template>
    <div id="user-3">
        <div id="leftimg">
            <img src="../../assets/houduan.jpg" alt="">
        </div>
        <div id="rightcontent">
            <p>
                后端开发，也可以称为服务器端开发，是对用户看不到的程序后端部分的开发，负责处理前端的请求，进行逻辑处理和数据交互，会用到应用构建的服务器端语言、数据相关工具、版本控制工具以及作为开发部署环境的Linux系统等工具。后端开发需要考虑底层业务逻辑的实现、数据的保存与读取、平台的稳定性和性能等。
                后端开发需要掌握大量的专业知识和技能。
                一是后端开发语言，包括但不限于Java、PHP、Scala、Go、Ruby等；
                二是计算机基础，包括计算机组成原理、计算机网络、操作系统、数据结构与算法等；
                三是数据库，主要掌握关系型数据库和非关系型数据库 。
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
#user-3 {
    // width: ;margint
    margin-top: 20px;
    height: 220px;
    display: flex;

    // background-color: red;
    #leftimg {
        flex: .7;

        img {
            width: 300px;
            height: 200px;
            border: 1px solid black;
        }
    }

    #rightcontent {
        margin-left: 20px;

        // flex: 1;
        p {
            line-height: 40px;
            font-size: 18px;
        }
    }
}
</style>

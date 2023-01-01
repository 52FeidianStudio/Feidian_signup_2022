<template>
    <div id="user-3">
        <div id="leftimg">
            <img src="../../assets/qianduan.jpg" alt="">
        </div>
        <div id="rightcontent">
            <p>
                web前端就是前端网络编程，也被认为是用户端编程，是为了网页或者网页应用，
          
                而编写HTML，CSS以及JS代码，所以用户能够看到并且和这些页面进行交流。
           
                前端网络编程的挑战在于用于实现前端页面的工具以及技术变化得很快，所以工程师需要不断注意产业是如何发展的（例如ECMAScript 6）。

                设计网页的目的在于确保用户打开站点的时候，信息是以容易阅读并且相互关联的形式呈现的。随之带来的问题是，现在用户实用大量的设备来访问网页，这些设备具有不同的屏幕尺寸以及清晰度。

                所以设计者在设计网页的时候需要注意这些方面。他们需要确保他们的网页在不同的浏览器、不同的操作系统以及不同的设备上显示正确，这需要在工程师端进行仔细的计划
                。</p> 
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
    #user-3{
        // width: ;margint
        margin-top: 20px;
        height: 220px;
        display: flex;
        // background-color: red;
        #leftimg {
            flex: .7;
            img{
                width: 300px;
                height: 200px;
            }
        }
        #rightcontent{
            margin-left: 20px;
            // flex: 1;
            p {
                line-height: 40px;
                font-size: 18px;
            }
        }
    }
</style>

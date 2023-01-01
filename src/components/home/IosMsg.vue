<template>
    <div id="user-3">
        <div id="leftimg">
            <img src="../../assets/ios.jpg" alt="">
        </div>
        <div id="rightcontent">
            <p>
                iOS开发就是为装有iOS系统完成应用软件或游戏软件的开发，主要工作职责是根据需求进行iOS平台客户端软件的设计、开发和维护，并与项目相关人员配合完成应用软件的开发设计工作。   
            </p> 
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
                border: 1px solid black;

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

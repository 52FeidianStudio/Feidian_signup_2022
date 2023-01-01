<template>
    <div id="user-3">
        <div id="leftimg">
            <img src="../../assets/xinan.jpg" alt="">
        </div>
        <div id="rightcontent">
            <p>
                信息安全专业可以在IT类企业从事信息安全工程、网络维护、防火墙维护、内网监测、安全评估分析、病毒分析、防毒系统设计、漏洞修复、数据还原等工作，还可以在政府、事业类单位从事信息安全系统的设计、网络安全、信息安全防护等工作。
                信息安全主要研究信息系统、信息安全与保密、网络安全等方面的基本知识和技术，采取各种防护措施，对信息、网络、服务器等进行安全保护等。例如：电脑防火墙的搭建、入侵检测系统的设计、网络病毒的检测分析、杀毒软件的研发、企业内网的监测排查、软件漏洞的挖掘与修复等。
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

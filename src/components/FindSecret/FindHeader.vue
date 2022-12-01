<template>
  <div id="find-header">
    <div id="title-name">沸点安全中心</div>
    <!-- <div></div> -->
    <div id="title-others">
        <span>反馈问题 | </span>
        <span>登录</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    #find-header{
        width: 100vmax;
        height: 75px;
        background-color: #3A77FD;
        display: flex;
        color: white;
        overflow: hidden;
        // padding-left: 10px;
        // padding-right: 10px;
        #title-name{
            height: 100%;
            line-height: 75px;
            flex:1;
            text-align: left;
            margin-left: 18px;
            font-size: large;
        }
        #title-others{
            height: 100%;
            line-height: 75px;
            text-align: right;
            margin-right: 18px;
            font-size: 14px;

        }
    }
</style>
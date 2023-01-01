<template>
  <Head></Head>
  <User1Vue></User1Vue>
  <User2Vue></User2Vue>
  <User3Vue></User3Vue>
  <HouduanMsg></HouduanMsg>
  <IosnMsg></IosnMsg>
  <XinanMsg></XinanMsg>

</template>

<script setup lang="ts">
// import User3Vue from '@/components/home/user-3.vue'
import User3Vue from '../components/home/QiandaunMsg.vue'
import User1Vue from '@/components/home/LeftTab.vue';
import User2Vue from '@/components/home/MainSwift.vue';
import Head from '../components/home/head.vue';

import HouduanMsg from '../components/home/HouduanMsg.vue';
import IosnMsg from '../components/home/IosMsg.vue';
import XinanMsg from '../components/home/XinanMsg.vue';

import {ref} from 'vue'

</script>

<style scoped lang="scss">
  

</style>
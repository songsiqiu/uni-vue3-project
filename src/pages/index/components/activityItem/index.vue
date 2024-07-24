<script setup lang="ts">
import {ActiveListResp} from "@/api/active/list/types";

const props = defineProps<ActiveListResp>()
</script>

<template>
<view class="box">
  <img v-if="props.imgUrl" class="w-full h-full object-cover" :src="props.imgUrl" alt=""/>
  <img v-else class="w-full h-full object-cover" src="@/static/active-default.png" alt=""/>
  <view class="title">{{props.title}}</view>
  <view class="personNum">
    报名人数：<span>{{props.personNum}}</span>人
  </view>
  <view class="time">
    活动时间：
    <view>
      <span class="startTime">{{props.startTime}}</span> - <span class="endTime">{{props.endTime}}</span>
    </view>
    <van-button round block type="primary" class="submit-btn !bg-sky-500">微信登录</van-button>
  </view>
</view>
</template>

<style scoped lang="scss">

</style>
<script lang="ts" setup>
import { ref } from 'vue'

const imgUrl = ref()
</script>

<template>
  <view>
    <view class="bg fixed w-[100vw] h-[100vh]">
      <img class="bg-cover" v-if="imgUrl" :src="imgUrl" alt="" />
      <img class="bg-cover" src="@/static/active-default.png" alt="" srcset="" />
    </view>
    <view class="top w-full flex justify-center">
      <view class="top-title mt-4 text-[20px] text-white">活动海报</view>
    </view>
    <view class="bottom flex gap-2 p-[20px] fixed bottom-0 z-[999]">
      <view class="left w-[108px] h-[108px] border"></view>
      <view class="right">
        <view class="notice flex gap-3  ml-3">
          <view class="left">
            <img class="w-[60px] h-[45px]" src="@/subPages/static/calendar.png" alt="" />
          </view>
          <view class="h-full flex flex-col justify-between text-[14px]">
            <view class="title">活动时间：</view>
            <view class="content">2023年01月01日-2023年01月01日</view>
          </view>
        </view>
        <view class="notice flex gap-3 pt-1 ml-3 ">
          <view class="left">
            <img class="w-[60px] h-[45px]" src="@/subPages/static/location.png" alt="" />
          </view>
          <view class="h-full flex flex-col justify-between text-[14px]">
            <view class="title">活动地址：</view>
            <view class="content ">2023年01月01日-2023年01月01日</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.bg {
  position: fixed;
  z-index: -1;
}
.bg-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bottom {
  background: rgba(0, 0, 0, 0.7);
}
.notice {
  color: #999999;
}
.title {
  font-size: 14px;
}
.content {
  font-size: 12px
}
</style>

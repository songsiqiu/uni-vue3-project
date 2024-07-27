<script setup lang="ts">
import useUserState from '@/store/userState'
import { ref } from 'vue'

const notice = ref(false)
/** 用户基本信息 */
const userBaseInfo = useUserState().getUserBaseInfo

/** tab */
const activeTab = ref(0)

console.log(userBaseInfo)
</script>

<template>
  <view class="common-page-containerBar">
    <view class="top flex justify-between items-center mb-3.5 mt-3 px-[12px]">
      <view class="title font-semibold text-2xl">我的</view>
      <img v-if="notice" class="w-[20px] h-[24px]" src="@/static/notice-nomsg.png" alt="" />
      <img v-else class="w-[20px] h-[24px]" src="@/static/notice-msg.png" alt="" />
    </view>
    <view class="flex-1 overflow-y-auto">
      <view v-if="userBaseInfo" class="user-info-panel p-[12px] flex flex-col items-center justify-center">
        <img v-if="userBaseInfo.avatar" class="w-[100px] h-[100px] rounded-full" :src="userBaseInfo.avatar" alt="" />
        <img v-else class="w-[100px] h-[100px] rounded-full" src="@/static/defaultAvatar.png" alt="" />
        <view class="user-name mt-3 text-base font-bold">{{ userBaseInfo.nickname }}</view>
        <view class="user-desc text-[#999999] mt-3">{{ userBaseInfo.desc }}</view>
      </view>
      <view class="divider"></view>
      <view class="tab p-[12px] flex gap-4 justify-start text-[16px]">
        <view class="tab-item" :class="activeTab === 0 ? 'active-tab-item' : ''" @click="activeTab = 0">我报名的活动</view>
        <view class="tab-item" :class="activeTab === 1 ? 'active-tab-item' : ''" @click="activeTab = 1">我投票的活动</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.divider {
  width: 100%;
  border: 1px solid rgba(241, 236, 236, 0.3);
}
.tab-item {
  color: #999999;
  padding: 6px;
  border-radius: 5px;
  background-color: white;
}
.active-tab-item {
  color: #1e1e1e;
  padding: 6px;
  border-radius: 5px;
  background-color: #f1f1f1;
}
</style>

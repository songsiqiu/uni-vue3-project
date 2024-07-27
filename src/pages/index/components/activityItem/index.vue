<script setup lang="ts">
import { ActiveListResp } from '@/api/active/list/types'

const props = defineProps<ActiveListResp>()
</script>

<template>
  <view class="box relative shadow-sm">
    <view class="absolute top-0 left-0">
      <view v-if="props.status === 1" class="status bg-[rgba(18,164,242,0.4)]">报名中</view>
      <view v-if="props.status === 2" class="status bg-[rgba(235,118,22,0.6)]">投票中</view>
      <view v-else class="status bg-[rgba(217,0,0,0.4)]">已结束</view>
    </view>
    <img v-if="props.imgUrl" class="w-full h-[115px] object-cover" :src="props.imgUrl" alt="" />
    <img v-else class="w-full h-[115px] object-cover" src="@/static/active-default.png" alt="" />
    <view class="p-[5px]">
      <view class="title mt-1">{{ props.title }}</view>
      <view class="personNum mt-[5px] mb-[15px]">
        <span class="font-bold text-[15px]">报名人数</span>：<span class="text-[#12A4F2] text-base font-medium"
          >{{ props.personNum }}人</span
        >
      </view>
      <view class="time text-[#999999] text-[13px]">
        活动时间：
        <view class="my-[5px]">
          <span class="startTime">{{ props.startTime }}</span> - <span class="endTime">{{ props.endTime }}</span>
        </view>
        <div v-if="props.status === 1" class="submit-btn bg-[#12a4f2]">我要报名</div>
        <div v-else-if="props.status === 2" class="submit-btn bg-[#F59D54]">我要投票</div>
        <div v-else class="submit-btn bg-[#FA6969]">查看</div>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.status {
  width: 70px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px 0px 6px 0px;
  color: white;
}
.title {
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}
.submit-btn {
  border-radius: 8px 8px 8px 8px;
  height: 35px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>

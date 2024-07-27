<script lang="ts" setup>
import { ActiveVoteRankResp } from '@/api/active/list/types'
import { ComponentPublicInstance, ref } from 'vue'
import gsap from 'gsap'

const props = defineProps<ActiveVoteRankResp>()

const status = ref<boolean>(props.status)

/** 投票 */
const plusOneStyle = ref({})
const numRef = ref<ComponentPublicInstance>()
const showPlusOne = (event: MouseEvent) => {
  if (!numRef.value) return
  // 使用 GSAP 动画
  gsap.fromTo(
    numRef.value.$el,
    { opacity: 0, y: 0 },
    {
      opacity: 1,
      y: -18,
      duration: 0.5,
      ease: 'power1.out',
      onComplete: () => {
        gsap.to('.plus-one', {
          opacity: 0,
          duration: 0.5,
          ease: 'power1.in',
        })
      },
    }
  )
}
const handleVote = (event: MouseEvent) => {
  showPlusOne(event)
  status.value = true
}
</script>

<template>
  <view class="rank-item h-[240px] relative shadow">
    <view class="number absolute top-0 left-0 bg-[#FF5900] w-[78px] h-[29px] text-center text-white">
      {{ props.rank }}
    </view>
    <img v-if="props.imgUrl" class="w-full h-[162px]" :src="props.imgUrl" alt="" srcset="" />
    <img v-else class="w-full h-[162px]" src="@/static/active-default.png" alt="" srcset="" />
    <view class="middle flex justify-between line-clamp-1">
      <view class="name text-[14px] font-bold line-clamp-1 text-nowrap">{{ props.name }}</view>
      <view class="personNum text-[14px] flex">
        <img src="@/static/fire.png" class="w-[12px] h-[16px] mr-1" alt="" srcset="" />
        <span class="text-[#FF5900] line-clamp-1 text-nowrap">{{ props.hot }}</span>
        <view :style="plusOneStyle" class="plus-one" ref="numRef">+1</view>
      </view>
    </view>
    <view v-if="!status" @click="handleVote" class="bottom flex items-center justify-center text-white bg-[#12A4F2]">
      <img src="@/static/vote.png" class="w-[16px] h-[16px]" alt="" srcset="" />
      <span class="ml-[8px] text-[13px] mt-[3px]">为TA点赞</span>
    </view>
    <view v-else class="bottom flex justify-around items-center">
      <view class="left flex gap-1 text-[#009B02]">
        <img src="@/static/voted.png" class="w-[13px] h-[13px]" alt="" srcset="" />
        <span class="text-[12px]">已投票</span>
      </view>
      <view class="right flex gap-1 text-[#12A4F2]">
        <img src="@/static/rocket.png" class="w-[13px] h-[13px] mt-[2px]" alt="" srcset="" />
        <span class="text-[12px]">为TA助力</span>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.bottom {
  height: 38px;
  border-radius: 0 0 5px 5px;
}
.middle {
  padding: 14px 14px 5px 14px;
}
.number {
  border-radius: 5px 0 5px 0;
}
.personNum {
  position: relative;
}
.plus-one {
  position: absolute;
  left: 50%;
  font-size: 14px;
  color: red;
  opacity: 0;
  pointer-events: none;
}
</style>

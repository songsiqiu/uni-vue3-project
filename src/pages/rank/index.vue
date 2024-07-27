<script setup lang="ts">
import { getVoteRank } from '@/api/active/list'
import { ActiveVoteRankResp } from '@/api/active/list/types'
import { onMounted, ref } from 'vue'
import RankItem from './components/rankItem/index.vue'

/** 投票排名 */
const rankData = ref<ActiveVoteRankResp[]>([])
const getVoteRankData = async () => {
  const { data } = await getVoteRank()
  rankData.value = data
}

onMounted(() => {
  getVoteRankData()
})
</script>

<template>
  <view class="top w-full h-[250px] flex justify-center">
    <view class="top-title mt-4 text-[20px] text-white">活动投票</view>
    <view class="bar shadow-lg flex">
      <span class="flex-1 text-[#999999] text-[14px] flex items-center justify-center">+10人</span>
      <view class="flex-1 flex items-center justify-center">
        <span class="text-[#12A4F2] text-[16px] leading-3">00天00时00分</span>
        <span class="text-[#999999] text-[14px] leading-3">结束</span>
      </view>
    </view>
  </view>
  <view class="content mt-[30px] p-[12px] grid grid-cols-2 gap-2">
    <RankItem v-for="item in rankData" :key="item.id" v-bind="item"></RankItem>
  </view>
</template>

<style lang="scss" scoped>
.top {
  background-image: url('@/static/active-default.png');
  background-size: cover;
  position: relative;
}
.bar {
  width: 80%;
  height: 59px;
  background: #fefeff;
  border-radius: 30px 30px 30px 30px;
  position: absolute;
  bottom: -30px;
}
</style>

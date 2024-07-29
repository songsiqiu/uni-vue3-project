<script setup lang="ts">
import { getGiftList, getVoteRank } from '@/api/active/list'
import { ActiveGiftListResp, ActiveVoteRankResp } from '@/api/active/list/types'
import { onMounted, ref } from 'vue'
import RankItem from './components/rankItem/index.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

/** 投票排名 */
const rankData = ref<ActiveVoteRankResp[]>([])
const getVoteRankData = async () => {
  const { data } = await getVoteRank()
  rankData.value = data
}

/** 助力 */
const supportShow = ref(false)
const handleSupport = () => {
  supportShow.value = true
}

/** 获取礼物列表 */
const giftList = ref<ActiveGiftListResp[]>([])
const handleGetGiftList = async () => {
  const { data } = await getGiftList()
  giftList.value = data
}

onMounted(() => {
  getVoteRankData()
  handleGetGiftList()
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
    <RankItem v-for="item in rankData" :key="item.id" v-bind="item" @support="handleSupport"></RankItem>
  </view>
  <van-popup v-model:show="supportShow" round position="bottom" :style="{ height: '74vh' }">
    <view class="support-top flex justify-center items-center h-[49px] bg-[#12A4F2] text-white"> 测试测试场测试 </view>
    <view class="top-desc p-[12px] font-bold text-[14px]"> 什么都可以加，您想买什么就买什么 </view>

    <Swiper>
      <swiper-slide>
        <view class="gift-list p-[16px]">
          <view class="gift-item" v-for="item in giftList.slice(0, 8)" :key="item.id">
            <img :src="item.imgUrl" alt="" class="w-[50px] h-[44px]" />
            <view class="gift-name">{{ item.name }}</view>
            <view class="gift-price">
              <img src="@/static/coin.png" alt="" class="w-[15px] h-[15px]" />
              <span class="text-[#919191]">{{ item.price }}</span>
            </view>
          </view>
        </view>
      </swiper-slide>
    </Swiper>
    <van-divider></van-divider>
    <view class="support-desc p-[12px]">
      <view class="desc-title font-bold"> 助力介绍 </view>
      <view class="desc-content text-[#999999] text-[12px] mt-2">
        󰀐这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是
        󰀐这是内容这是内容这是内容这是 󰀐这是内容这是内容这是内容这是
      </view>
    </view>
    <van-divider></van-divider>
    <view class="pop-bottom flex">
      <view class="pop-bottom-left flex flex-1 gap-2">
        <view class="pop-price flex items-center">
          <img src="@/static/coin.png" alt="" class="w-[15px] h-[15px]" />
          <span class="text-[#FF5900]">100</span>
        </view>
        <view class="flex gap-1 items-center">
          <img src="@/static/fire.png" alt="" class="w-[15px] h-[15px]" />
          <span class="text-[#FF5900]">100助力值</span>
        </view>
      </view>
      <view class="pop-bottom-right mb-1 flex flex-1">
        <select class="bottom-select">
          <option value="1212">请选择</option>
          <option value="1212">请选择</option>
        </select>
        <view class="bottom-btn-support flex items-center justify-center text-white"> 帮Ta助力 </view>
      </view>
    </view>
  </van-popup>
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
.gift-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 5px;
  .gift-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    > img {
      margin-bottom: 8px;
    }
    .gift-name {
      font-size: 12px;
      color: #333;
    }

    .gift-price {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-right: 4px;
      }

      span {
        font-size: 14px;
        color: #919191;
      }
    }
  }
}
.bottom-select {
  width: 85px;
  height: 38px;
  background: #ffffff;
  border-radius: 60px 0px 0px 60px;
  border: 1px solid #12a4f2;
}
.bottom-btn-support {
  width: 85px;
  height: 38px;
  background: #12a4f2;
  border-radius: 0px 60px 60px 0px;
  border: 1px solid #12a4f2;
}
.pop-bottom {
  position: absolute;
  bottom: 30px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
}
</style>

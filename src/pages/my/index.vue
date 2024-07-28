<script setup lang="ts">
import { getActiveList } from '@/api/active/list'
import { ActiveListResp } from '@/api/active/list/types'
import useUserState from '@/store/userState'
import { onMounted, ref } from 'vue'

const notice = ref(false)
/** 用户基本信息 */
const userBaseInfo = useUserState().getUserBaseInfo

/** tab */
const activeTab = ref(0)

/** 获取活动列表 */
const activeList = ref<ActiveListResp[]>([])
const getActivityList = async () => {
  const { data } = await getActiveList()
  activeList.value = data
}
onMounted(() => {
  getActivityList()
})
console.log(userBaseInfo)
</script>

<template>
  <view class="common-page-containerBar">
    <view class="top flex justify-between items-center mb-3.5 mt-3 px-[12px]">
      <view class="title font-semibold text-2xl">我的</view>
      <img v-if="notice" class="w-[20px] h-[24px]" src="@/static/notice-nomsg.png" alt="" />
      <img v-else class="w-[20px] h-[24px]" src="@/static/notice-msg.png" alt="" />
    </view>
    <view>
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
      <view class="flex-1 overflow-y-auto">
        <view class="active-item h-[178px] p-3" v-for="(item, index) in activeList" :key="index">
          <view class="content flex gap-2">
            <view class="left relative">
              <view class="number absolute top-0 left-0 bg-[#FF5900] w-[78px] h-[25px] leading-[25px] text-[14px] text-center text-white">
                {{ item.status }}
              </view>
              <img class="w-[156px]" src="@/static/active-default.png" alt="" />
            </view>
            <view class="right">
              <view class="top h-full flex flex-col justify-between">
                <view class="title font-bold line-clamp-1 whitespace-nowrap text-ellipsis"> {{ item.title }}</view>
                <view class="time">
                  <view class="start-time time">{{ item.startTime }}</view>
                  <view class="end-time time">{{ item.endTime }}</view>
                </view>
                <view class="number flex gap-[3px] items-center">
                  <img src="@/static/fire.png" class="w-[12px] h-[16px] mr-1" alt="" srcset="" />
                  <span class="text-[#FF5900] line-clamp-1 text-nowrap text-[14px] leading-[18px]">{{ item.personNum }}</span>
                </view>
              </view>
            </view>
          </view>
          <view class="bottom flex items-center gap-3 mt-2">
            <van-button type="primary" plain size="small">关闭</van-button>
            <van-button type="primary" size="small">转发投票</van-button>
            <van-button type="warning" size="small">投票详情</van-button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.number {
  border-radius: 5px 0 5px 0;
}
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
.bottom {
  :deep(.van-button) {
    flex: 1;
  }
}
.time {
  color: #999999;
  font-size: 14px;
}
</style>

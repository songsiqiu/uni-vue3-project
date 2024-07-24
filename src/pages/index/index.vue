<script setup lang="ts">
import {ref} from "vue";
import {onMounted} from "vue";
import {getActiveList} from "@/api/active/list";
import {ActiveListResp} from "@/api/active/list/types";
import ActivityItem from "@/pages/index/components/activityItem/index.vue";

const value = ref('')
const notice = ref(false)

const activeList = ref<ActiveListResp[]>([])
/** 获取活动列表  */
const handleGetActiveList = async () => {
  const {data} = await getActiveList()
  activeList.value = data
  console.log(activeList.value)
}

onMounted(() => {
  handleGetActiveList()
})
</script>

<template>
  <view class="common-page-containerBar">
    <view class="top flex justify-between items-center mb-3.5 mt-3 px-[12px]">
      <view class="title font-semibold text-2xl">首页</view>
      <img v-if="notice" class="w-[20px] h-[24px]" src="@/static/notice-nomsg.png" alt="">
      <img v-else class="w-[20px] h-[24px]" src="@/static/notice-msg.png" alt=""></img>
    </view>
    <view class="common-content">
      <view class="search p-[12px] flex items-center border border-[#E5E5E5] rounded-[8px] shadow-md">
        <img src="@/static/search.png" class="search-icon w-[13px] h-[13px] mr-[10px]" alt=""></img>
        <input class="" type="text" placeholder="请输入搜索内容">
      </view>
      <view class="active-list mt-[12px]">
        <ActivityItem v-for="(item, index) in activeList" :key="index" v-bind="item"></ActivityItem>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>

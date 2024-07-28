<script lang="ts" setup>
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
  }>(),
  {
    title: '活动标题',
  }
)

/** 判断是活动详情, 还是报名页面 */
const isDetail = ref(false)
const handleSwitchModule = () => {
  isDetail.value = false
  console.log('handleSwitchModule', isDetail.value)
}

/** 作品上传 */
const imageValue = ref([])
const imageStyles = {
  width: 100,
  height: 100,
}
const handleImgUploadSuccess = (res: any) => {
  console.log('handleImgUploadSuccess', res)
}
const handleImgUploadFail = (res: any) => {
  console.log('handleImgUploadFail', res)
}
</script>

<template>
  <view>
    <view class="top w-full h-[250px] flex justify-center">
      <view class="top-title mt-4 text-[20px] text-white">{{ props.title }}</view>
      <view class="bar shadow-lg flex">
        <view class="flex-1 flex items-center justify-center">
          <span class="text-[12px] text-[#999999] leading-3">报名倒计时：</span>
          <span class="text-[#12A4F2] text-[16px] leading-3">00天00时00分</span>
        </view>
      </view>
    </view>
    <view v-if="isDetail" class="detail">
      <view class="title p-[12px] mt-[40px] font-bold"> titel </view>
      <view class="content indent-8 p-[12px] text-[14px]">
        这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容。
      </view>
      <view class="notice flex gap-3 p-[12px] ml-3">
        <view class="left">
          <img class="w-[40px] h-[40px]" src="@/subPages/static/calendar.png" alt="" />
        </view>
        <view class="right h-full flex flex-col justify-between text-[14px]">
          <view class="title text-[#999999]">活动时间：</view>
          <view class="content">2023年01月01日-2023年01月01日</view>
        </view>
      </view>
      <view class="notice flex gap-3 p-[12px] pt-1 ml-3 pb-[65px]">
        <view class="left">
          <img class="w-[40px] h-[40px]" src="@/subPages/static/location.png" alt="" />
        </view>
        <view class="right h-full flex flex-col justify-between text-[14px]">
          <view class="title text-[#999999]">活动地址：</view>
          <view class="content">2023年01月01日-2023年01月01日</view>
        </view>
      </view>
      <view class="btn-group p-[12px] flex gap-4">
        <van-button type="warning" round>活动海报</van-button>
        <van-button type="primary" round @click="handleSwitchModule">
          <view class="flex gap-2 items-center justify-center">
            <span>我要报名</span>
            <img src="@/subPages/static/arrow.png" class="w-[17px] h-[17px]" />
          </view>
        </van-button>
      </view>
    </view>
    <view v-else class="apply mt-[40px] p-[12px]">
      <view class="apply-title"> 活动名称 </view>
      <input class="apply-input" type="text" placeholder="请输入活动名称" />
      <view class="apply-title"> 活动时间 </view>
      <input class="apply-input" type="text" placeholder="请输入活动时间" />
      <view class="apply-title mt-[20px]"> 上传作品 </view>
      <uni-file-picker
        class="upload-style"
        v-model="imageValue"
        fileMediatype="image"
        :imageStyles="imageStyles"
        :limit="1"
        mode="grid"
        @success="handleImgUploadSuccess"
        @fail="handleImgUploadFail"
      />
      <view class="apply-title mt-[12px] mb-[12px]"> 报名须知 </view>
      <view class="apply-tip text-[12px] text-[#666666] leading-[25px] mb-[50px]">
        这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是
        这是内容这是内容这是内容这是 这是内容这是内容这是内容这是 这是内容这是内容这是内容这是
      </view>
     <view class="w-full fixed bottom-[5px] right-[0]  p-[10px]">
       <van-button type="primary" class="w-full"  round>
        <view class="w-full flex items-center justify-center relative">
          <span>开始报名</span>
          <img src="@/subPages/static/arrow.png" class="w-[19px] h-[19px] absolute right-6" alt="" />
        </view>
      </van-button>
     </view>
    </view>
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
.btn-group {
  position: fixed;
  bottom: 0;
  height: 50px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 15px;
  :deep(.van-button) {
    width: 50%;
  }
}
.upload-style {
  :deep(.file-picker__box-content) {
    border: 1px dashed rgb(238, 238, 238) !important;
  }
}
:deep(.van-button__text) {
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
.apply-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.apply-input {
  font-size: 14px;
  margin-bottom: 10px;
  border: 1px solid rgb(238, 238, 238);
  padding: 16px;
  border-radius: 3px;
}
</style>

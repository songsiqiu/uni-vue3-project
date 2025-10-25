<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useUserState from '@/store/userState'
import { gsap } from 'gsap'

const userState = useUserState()
const pwd = ref('')
const formContainer = ref(null)
/**
 * 获取用户信息
 */
const getUserInfo = () => {}

/**
 * 触发store中的login
 */
const handleLogin = async () => {
  // if (userState.getUserBaseInfo?.username) {
    await userState.signIn({
      username: userState.getUserBaseInfo?.username || '',
      password: pwd.value,
    })

    uni.showLoading({ title: '验证中...' })
    setTimeout(() => {
      uni.hideLoading()
      // 跳转到首页
      uni.switchTab({
        url: '/pages/index/index',
      })
    }, 1000)
  // }
}

onMounted(() => {
  gsap.fromTo(
    formContainer.value,
    { opacity: 0, y: -50 }, // 初始状态：透明度为0，向上偏移50像素
    { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out' } // 目标状态：透明度为1，y轴位置恢复，动画时长1.5秒
  )
})
</script>

<template>
  <view class="w-full h-[100vh] bg-white flex justify-center items-center">
    <view class="content w-[85%] align-center flex flex-col items-center">
      <view class="title text-[#999999] mb-11">使用微信一键登录</view>
      <img
        v-if="userState.getUserBaseInfo?.avatar"
        class="avatar w-32 h-32 rounded-full object-cover mb-10"
        alt=""
        :src="userState.getUserBaseInfo.avatar"
      />
      <img v-else class="avatar w-32 h-32 rounded-full object-cover mb-10" src="@/static/defaultAvatar.png" alt="" />
      <view ref="formContainer" class="w-full">
        <view class="field-group mb-4 bg-gray-50 rounded-lg p-4">
          <view class="field-item mb-4">
            <text class="field-label text-gray-600 text-sm">用户名</text>
            <view class="field-value text-base mt-1">{{ userState.getUserBaseInfo?.nickname }}</view>
          </view>
          <view class="field-item">
            <text class="field-label text-gray-600 text-sm">密码</text>
            <input
              v-model="pwd"
              type="password"
              class="field-input w-full h-10 px-2 mt-1 border border-gray-200 rounded"
              placeholder="请输入密码"
            />
          </view>
        </view>
      </view>
      <button class="submit-btn w-full h-12 bg-sky-500 text-white rounded-full" @click="handleLogin">微信登录</button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.submit-btn {
  margin-top: 40px;
}
</style>

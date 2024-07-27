<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useUserState from '@/store/userState'
import { gsap } from 'gsap'
import { closeToast, showLoadingToast } from 'vant'

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
      username: userState.getUserBaseInfo?.username,
      password: pwd.value,
    })

    showLoadingToast('验证中...')
    setTimeout(() => {
      closeToast()
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
      <div ref="formContainer">
        <van-form>
          <van-cell-group inset>
            <van-field name="用户名" label="用户名" placeholder="用户名" autocomplete="username">
              <template #input>
                {{ userState.getUserBaseInfo?.nickname }}
              </template>
            </van-field>
            <van-field
              v-model="pwd"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              autocomplete="new-password"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </van-cell-group>
        </van-form>
      </div>
      <van-button round block type="primary" class="submit-btn !bg-sky-500" @click="handleLogin">微信登录</van-button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.submit-btn {
  margin-top: 40px;
}
</style>

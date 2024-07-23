import {defineStore} from "pinia";
import {ref, computed} from "vue";
import StorageUtil from "@/utils/storage/storage";
import {BaseUserInfo, UserAndCodeReq} from "@/api/system/user/types";
import {getUserInfo, verificationUserAndCode} from "@/api/system/user";
import {showNotify} from "vant";

const useUserState = defineStore('userState', () => {
    /** 当前登录用户token信息  */
    const userTokenInfo = ref<string | null>(StorageUtil.getItem('userTokenInfo') || null)
    /** 当前用户基本信息  */
    const userBaseInfo = ref<BaseUserInfo | null>(StorageUtil.getItem('userBaseInfo') || null)
    /** 登录的loading  */
    const loginLoading = ref(false)


    /** 当前登录用户token信息  */
    const getUserTokenInfo = computed(() => userTokenInfo.value)
    /** 当前登录用户基本信息  */
    const getUserBaseInfo = computed(() => userBaseInfo.value)

    const setUserTokenInfo = (value: string) => {
        userTokenInfo.value = value
        StorageUtil.setItem('userTokenInfo', value)
    }
    const setUserBaseInfo = (value: BaseUserInfo) => {
        userBaseInfo.value = value
        StorageUtil.setItem('userBaseInfo', value)
    }

    /**
     * 刷新用户基本信息
     */
    const refreshUserInfo = async () => {
        const {data} = await getUserInfo()
        setUserBaseInfo(data)
    }

    /**
     * 登录
     */
    const signIn = async (loginInfo: UserAndCodeReq) => {
        try {
            loginLoading.value = true
            const {data} = await verificationUserAndCode(loginInfo)
            setUserTokenInfo(data.token)

            // 获取用户基本信息
            await refreshUserInfo()

            if(userBaseInfo.value) {
                showNotify({
                    message: '登录成功',
                    type: 'success'
                })
            }
        } finally {
            loginLoading.value = false
        }
    }

    return {
        getUserTokenInfo,
        getUserBaseInfo,
        loginLoading,

        setUserTokenInfo,

        signIn
    }

})

export default useUserState
import {defineStore} from "pinia";
import {ref,computed} from "vue";
import StorageUtil from "@/utils/storage/storage";

const useUserState = defineStore('userState',() =>{
    /** 当前登录用户token信息  */
    const userTokenInfo = ref<string | null>(StorageUtil.getItem('userTokenInfo') || null)

    /** 当前登录用户token信息  */
    const getUserTokenInfo = computed(() => userTokenInfo.value)

    const setUserTokenInfo = (value: string) => {
        userTokenInfo.value = value
        StorageUtil.setItem('userTokenInfo', value)
    }

    return {
        getUserTokenInfo,

        setUserTokenInfo
    }

})

export default useUserState
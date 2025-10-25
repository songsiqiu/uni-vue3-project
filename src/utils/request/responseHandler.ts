import type {ApiResponse} from "@/api/types";
import type {AxiosError, AxiosResponse} from "axios";
import {BusinessErrCode, businessErrCodeMsgKV, ErrCode, errCodeMsgKV} from "@/utils/request/errcode";


/**
 * 处理resp.data.success为false的情况
 *
 * @returns 返回响应success
 */
export function handleInnerCodeErr(respData:ApiResponse) {
    if(!respData.success) {
        // 展示默认错误提示信息
        const outMsgInfo = businessErrCodeMsgKV[respData.code as BusinessErrCode]
        if(outMsgInfo) {
            // 提示错误信息
            uni.showToast({ icon: 'none', title: respData.msg });
        }else {
            uni.showToast({ icon: 'none', title:'服务器发生了错误，请重试' });
        }
        return false
    }
    return true
}

/**
 * 处理http响应码为200的响应
 */
export const handleNormalResponse = async (resp:AxiosResponse<ApiResponse>) => {
  // 处理已知错误码
  if (resp?.data?.code) {
    switch (resp.data.code) {
      case ErrCode.UNAUTHORIZED:
        // 执行登出操作
        break
    }
  }
  // 如果发现屏蔽内部错误处理标记打开，则直接放行
  if (resp.config.maskingErrorInterceptors) return true
  // 处理resp.data.success为false的情况
  return handleInnerCodeErr(resp.data)
}

/**
 * 处理http响应码不为200的响应
 */
export const handleHttpError = (err:AxiosError) => {
    if(err.code === 'ECONNABORTED') {
        return Promise.reject(err)
    }

    // 展示默认错误提示信息
    const msg = errCodeMsgKV[err.response?.status as ErrCode]
    if(err.code === 'ECONNABORTED' && err.message.includes('timeout')) {
        uni.showToast({ icon: 'none', title: '请求超时，请重试！' });
    }else if(err.message === 'Network Error') {
        uni.showToast({ icon: 'none', title: '服务器错误或网络错误, 请稍后再试！' });
    }else if(msg) {
        uni.showToast({ icon: 'none', title: msg });
    }else {
        uni.showToast({ icon: 'none', title: '服务器发出了未知错误！' });
    }

    return Promise.reject(err)
}
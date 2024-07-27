import axios from 'axios'
import { handleToken } from '@/utils/request/requestHandler'
import { handleHttpError, handleNormalResponse } from '@/utils/request/responseHandler'
import { showNotify } from 'vant'

export const service = axios.create({
  baseURL: '/api',
  timeout: 3000,
  isAuth: true,
  maskingErrorInterceptors: false,
})

service.interceptors.request.use((requestConfig) => {
  handleToken(requestConfig)
  return requestConfig
})

service.interceptors.response.use(
  async (resp) => {
    const isSuccess = await handleNormalResponse(resp)
    return isSuccess ? resp.data : Promise.reject(resp.data)
  },
  (err) => {
    if (axios.isAxiosError(err)) {
      return handleHttpError(err)
    }
    showNotify({ type: 'warning', message: '网络请求发生了意料之外的错误' })
    return Promise.reject(err)
  }
)

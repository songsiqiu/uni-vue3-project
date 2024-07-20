import useUserState from '@/store/userState'
import  { AxiosRequestConfig, AxiosHeaders } from 'axios'
import { HeaderKey } from './header'

/**
 * 处理token问题
 */
export async function handleToken(requestConfig: AxiosRequestConfig) {
  const userState = useUserState()
  if (requestConfig.isAuth && requestConfig.headers && requestConfig.headers instanceof AxiosHeaders) {
    if (!requestConfig.headers.get('authorization')) {
      if (userState.getUserTokenInfo) {
        requestConfig.headers.set(
          HeaderKey.AUTHORIZATION,
          userState.getUserTokenInfo
        )
      }
    }
  }
}

/**
 * 扩充axios配置类型，修改接口返回值类型
 *
 * 主要因为在拦截器中过滤了 axios 的原本的一些 response 信息，直接返回了 data 信息
 * 这些类型是要为了适配在拦截器中的修改
 *
 */
import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    /** 是否添加token */
    isAuth?: boolean
  }
  export interface AxiosInstance {
    <T = any, D = any>(config: AxiosRequestConfig<D>): Promise<T>
    <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>
    request<T = any, D = any>(config: AxiosRequestConfig<D>): Promise<T>
    get<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>
    delete<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>
    head<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>
    post<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>
    put<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>
    patch<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>
  }
}

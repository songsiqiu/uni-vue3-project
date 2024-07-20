import {BusinessErrCode, ErrCode} from "@/utils/request/errcode";

/**
 * 接口响应类型
 */
export interface ApiResponse<T = null> {
  code: BusinessErrCode | ErrCode;
  data: T;
  msg: string;
  success: boolean;
}

/**
 * 分页接口响应类型,与ApiResponse结合使用
 * 示例: ApiResponse<PageResp<string>>
 *     相当于 {
 *         code: BusinessErrCode | ErrCode;
 *         data: {
 *             result: T[];
 *             total: number;
 *         };
 *         message: string;
 *     }
 */
export interface PageResp<T> {
    result: T[];
    total: number;
}

/**
 * 分页接口请求参数,与请求的参数类型相结合使用,这里不是包裹,应该是继承(并列)
 * 示例: interface UserListReq extends PageReq {
 *          name: string;
 * }
 * 相当于
 * interface UserListReq {
 *     page: number;
 *     size: number;
 *     name: string;
 * }
 */
export interface PageReq {
    page?: number;
    size?: number;
}
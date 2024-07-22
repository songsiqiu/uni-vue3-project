import {BaseUserInfo, UserAndCodeReq, UserAndCodeResp} from "@/api/system/user/types";
import {service} from "@/utils/request";
import {ApiResponse} from "@/api/types";

export enum SystemUserApi {
    /** 密码登录  */
    verificationUserAndCode = '/verificationUserAndCode',
    /** 获取用户基本信息  */
    GET_USER_INFO = '/getUserInfo'
}

/** 获取用户基本信息  */
export function getUserInfo() {
    return service.get<ApiResponse<BaseUserInfo>>(SystemUserApi.GET_USER_INFO)
}
/** 密码登录 */
export function verificationUserAndCode(data: UserAndCodeReq) {
    return service.post<ApiResponse<UserAndCodeResp>>(SystemUserApi.verificationUserAndCode,data,{
        isAuth:false
    })
}

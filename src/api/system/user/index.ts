import {UserAndCodeReq, UserAndCodeResp} from "@/api/system/user/types";
import {service} from "@/utils/request";
import {ApiResponse} from "@/api/types";

export enum SystemUserApi {
    /** 密码登录  */
    verificationUserAndCode = '/verificationUserAndCode',
}

/** 密码登录 */
export function verificationUserAndCode(data: UserAndCodeReq) {
    return service.post<ApiResponse<UserAndCodeResp>>(SystemUserApi.verificationUserAndCode,data,{
        isAuth:false
    })
}

import {BaseUserInfo} from "@/api/system/user/types";

export interface StorageData {
    /** 当前用户token信息  */
    userTokenInfo?: string;
    /** 当前登录用户基本信息 */
    userBaseInfo: BaseUserInfo;
}
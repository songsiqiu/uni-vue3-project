/** 密码登录请求类型  */
export interface UserAndCodeReq {
    password: string;
    username: string;
}
/** 密码登录响应类型  */
export interface UserAndCodeResp {
    token: string;
}
/** 用户基本信息  */
export interface BaseUserInfo {
    id: number;
    username: string;
    avatar: string;
    nickname: string;
}
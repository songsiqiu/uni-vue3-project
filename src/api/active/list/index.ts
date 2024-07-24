import {service} from "@/utils/request";
import {ApiResponse} from "@/api/types";
import {ActiveListResp} from "@/api/active/list/types";

export enum ActiveListApi {
    /** 获取活动列表 */
    GET_ACTIVE_LIST = '/active/list'
}

/** 获取活动列表  */
export function getActiveList() {
    return service.get<ApiResponse<ActiveListResp[]>>(ActiveListApi.GET_ACTIVE_LIST)
}
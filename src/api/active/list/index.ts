import { service } from '@/utils/request'
import { ApiResponse } from '@/api/types'
import { ActiveGiftListResp, ActiveListResp, ActiveVoteRankResp } from '@/api/active/list/types'

export enum ActiveListApi {
  /** 获取活动列表 */
  GET_ACTIVE_LIST = '/active/list',
  /** 投票排名 */
  GET_VOTE_RANK = '/vote/rank',
  /** 礼物列表 */
  GET_GIFT_LIST = '/gift/list',
}

/** 获取活动列表  */
export function getActiveList() {
  return service.get<ApiResponse<ActiveListResp[]>>(ActiveListApi.GET_ACTIVE_LIST)
}

/** 投票排名 */
export function getVoteRank() {
  return service.get<ApiResponse<ActiveVoteRankResp[]>>(ActiveListApi.GET_VOTE_RANK)
}

/** 礼物列表 */
export function getGiftList() {
  return service.get<ApiResponse<ActiveGiftListResp[]>>(ActiveListApi.GET_GIFT_LIST)
}
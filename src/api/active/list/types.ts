
/** 获取活动列表  */
export interface ActiveListResp {
    endTime: string;
    personNum: string;
    startTime: string;
    status: number;
    title: string;
    imgUrl: string;
    [property: string]: any;
}

/** 投票排名相应 */
export interface ActiveVoteRankResp {
  hot: string
  id: string
  imgUrl: string
  name: string
  rank: string
  status:boolean
  [property: string]: any
}
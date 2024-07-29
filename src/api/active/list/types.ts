
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

/** 礼物列表 */
export interface ActiveGiftListResp {
  /**
   * ID 编号
   */
  id: string
  /**
   * 名字
   */
  name: string
  /**
   * 礼物url
   */
  imgUrl: string
  /**
   * 价格
   */
  price: string
  [property: string]: any
}
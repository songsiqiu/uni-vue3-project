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
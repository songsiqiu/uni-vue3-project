/**
 * 通用前端分页参数
 */
export interface PageInfo {
    /** 单页数据数量 */
    pageSize: number
    /** 当前页码 */
    current: number
    /** 全部数量 */
    total: number
}
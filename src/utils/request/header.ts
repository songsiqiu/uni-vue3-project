export enum HeaderKey {
  /** 内容数据类型头 */
  CONTENT_TYPE = 'Content-Type',
  /** token验证头 */
  AUTHORIZATION = 'Authorization',
}

/**
 * 表单头
 */
export const formHeader = {
  [HeaderKey.CONTENT_TYPE]: 'application/x-www-form-urlencoded;charset=UTF-8',
}

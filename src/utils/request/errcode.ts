export enum ErrCode {
    /** 操作成功 */
    SUCCESS = 200,
    /** 不存在该资源 */
    NOT_FOUND = 404,
    /** 抱歉，没有访问权限！ */
    UNAUTHORIZED = 401,
    /** 访问妥限 */
    FORBIDDEN = 403,
    /** 系统内部错误 */
    SYS_ERROR_1 = 500,
    SYS_ERROR_2 = 503,
}

export enum BusinessErrCode {
    /** 暂未登录或token已经过期！ */
    UNAUTHORIZED = 401,
}

export const errCodeMsgKV: Record<ErrCode, string> = {
    [ErrCode.SUCCESS]: '请求成功',
    [ErrCode.NOT_FOUND]: '404-请求资源不存在！',
    [ErrCode.UNAUTHORIZED]: '401-抱歉，没有访问权限！',
    [ErrCode.FORBIDDEN]: '403-抱歉，禁止访问此资源！',
    [ErrCode.SYS_ERROR_1]: '500-系统内部错误',
    [ErrCode.SYS_ERROR_2]: '503-系统内部错误',
}

export const businessErrCodeMsgKV: Record<BusinessErrCode, string> = {
    [BusinessErrCode.UNAUTHORIZED]: '401-暂未登录或token已经过期！',
}
## vue3小程序
使用vue3 pnpm pinia typescript  tailwindcss

要求node > 18

使用uniapp的js版本, 无需使用hbuilder

## 项目解读

api文件夹

其中例如 :  `service.get<ApiResponse<ActiveListResp[]>>(ActiveListApi.GET_ACTIVE_LIST)`


api请求抽象出来了`ApiResponse`  `PageResp` `PageReq` 具体使用查看相关注释

## utils文件夹

用来存放工具类,  其中request也在这里,  其中错误处理在这里统一处理了
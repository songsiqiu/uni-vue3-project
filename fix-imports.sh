#!/bin/bash
# 修复 API 文件
sed -i '' 's/import { ApiResponse } from/import type { ApiResponse } from/g' src/api/active/list/index.ts
sed -i '' 's/import { ActiveGiftListResp, ActiveListResp, ActiveVoteRankResp } from/import type { ActiveGiftListResp, ActiveListResp, ActiveVoteRankResp } from/g' src/api/active/list/index.ts
sed -i '' 's/import {BaseUserInfo, UserAndCodeReq, UserAndCodeResp} from/import type {BaseUserInfo, UserAndCodeReq, UserAndCodeResp} from/g' src/api/system/user/index.ts
sed -i '' 's/import { ApiResponse } from/import type { ApiResponse } from/g' src/api/system/user/index.ts
sed -i '' 's/import { ProxyOptions } from/import type { ProxyOptions } from/g' src/config/api-proxy.ts
sed -i '' 's/import { ActiveListResp } from/import type { ActiveListResp } from/g' src/pages/index/components/activityItem/index.vue
sed -i '' 's/import { ActiveListResp } from/import type { ActiveListResp } from/g' src/pages/index/index.vue
sed -i '' 's/import { ActiveListResp } from/import type { ActiveListResp } from/g' src/pages/my/index.vue
sed -i '' 's/import { ActiveVoteRankResp } from/import type { ActiveVoteRankResp } from/g' src/pages/rank/components/rankItem/index.vue
sed -i '' 's/import { ComponentPublicInstance } from/import type { ComponentPublicInstance } from/g' src/pages/rank/components/rankItem/index.vue
sed -i '' 's/import { ActiveGiftListResp, ActiveVoteRankResp } from/import type { ActiveGiftListResp, ActiveVoteRankResp } from/g' src/pages/rank/index.vue
sed -i '' 's/import { App } from/import type { App } from/g' src/store/index.ts
sed -i '' 's/import { BaseUserInfo, UserAndCodeReq } from/import type { BaseUserInfo, UserAndCodeReq } from/g' src/store/userState/index.ts
sed -i '' 's/import {AxiosRequestConfig} from/import type {AxiosRequestConfig} from/g' src/utils/request/requestHandler.ts
sed -i '' 's/import {ApiResponse} from/import type {ApiResponse} from/g' src/utils/request/responseHandler.ts
sed -i '' 's/import {AxiosError, AxiosResponse} from/import type {AxiosError, AxiosResponse} from/g' src/utils/request/responseHandler.ts
sed -i '' 's/import { StorageData } from/import type { StorageData } from/g' src/utils/storage/storage.ts
sed -i '' 's/import { BaseUserInfo } from/import type { BaseUserInfo } from/g' src/utils/storage/type.ts

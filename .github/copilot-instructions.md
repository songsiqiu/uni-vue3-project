# GitHub Copilot 指南

## 项目概述
这是一个使用 Vue 3、TypeScript、Pinia 和 TailwindCSS 构建的 UniApp 跨平台小程序。通过 uni-app 的编译系统，它可以针对多个平台（微信、支付宝、H5 等）进行部署。

## 架构模式

### API 层 (`/src/api/`)
- **按功能领域组织**：每个 API 组都有自己的文件夹（例如：`active/list/`、`system/user/`）
- **标准化响应类型**：所有 API 都使用 `ApiResponse<T>` 包装器，分页数据使用 `PageResp<T>`
- **基于枚举的端点**：API URL 定义为枚举（例如：`ActiveListApi.GET_ACTIVE_LIST`）
- **示例模式**：`service.get<ApiResponse<ActiveListResp[]>>(ActiveListApi.GET_ACTIVE_LIST)`

### 请求/响应处理 (`/src/utils/request/`)
- **集中式错误处理**：所有 HTTP 和业务错误都在拦截器中处理
- **令牌管理**：通过 `handleToken()` 自动注入令牌
- **Toast 通知**：错误通过 uni-app 的 `uni.showToast()` 显示
- **代理配置**：开发环境的 API 调用通过 `/src/config/proxy.ts` 路由

### 页面结构 (`/src/pages/` + `/src/subPages/`)
- **主页面**：核心标签页位于 `/src/pages/`（index、rank、my、login）
- **分包**：详情/次要页面位于 `/src/subPages/`，以提升加载性能
- **页面配置**：所有路由在 `/src/pages.json` 中定义，包含导航标题

### 组件组织
- **同位组件**：页面特定的组件嵌套在 `pages/[page]/components/` 中
- **Props 类型**：所有组件的 props 都使用 TypeScript 接口（例如：`defineProps<ActiveListResp>()`）
- **导航**：使用 `uni.navigateTo()` 进行路由跳转，通过查询参数传递数据

### 样式策略
- **TailwindCSS 为主**：大部分样式使用实用类
- **SCSS 补充**：自定义样式使用作用域 `<style lang="scss">` 块
- **通用布局**：使用 `.common-page-containerBar` 和 `.common-content` 类保持页面结构一致
- **响应式网格**：使用 `grid grid-cols-2 gap-2` 模式布局卡片

## 开发工作流

### 运行项目
- **开发环境**：`pnpm dev:mp-weixin`（微信）、`pnpm dev:h5`（网页）、`pnpm dev:app`（原生）
- **构建**：`pnpm build:mp-weixin`、`pnpm build:h5` 等
- **类型检查**：`pnpm run type-check`

### 状态管理
- **Pinia stores**：位于 `/src/store/`，采用模块化结构
- **设置模式**：Store 初始化在 `/src/store/index.ts` 中

### 自动导入
- **Vue API**：通过 `unplugin-auto-import` 自动导入
- **Uni-UI**：通过 `pages.json` 中的 easycom 自动导入

## 关键约定

### 文件命名
- **API 文件**：`index.ts` 用于实现，`types.ts` 用于接口定义
- **组件**：使用 PascalCase 文件夹，包含 `index.vue` 文件
- **页面**：使用 kebab-case，包含 `index.vue` 入口点

### 类型定义
- **API 响应**：始终使用 `ApiResponse<T>` 包装
- **分页**：列表响应使用 `PageResp<T>`，请求使用 `PageReq`
- **组件 props**：在 `defineProps<Interface>()` 中直接定义接口

### 错误处理
- **业务错误**：通过 `BusinessErrCode` 枚举处理，提供用户友好的消息
- **HTTP 错误**：通过 `ErrCode` 枚举处理，提供后备消息
- **屏蔽错误**：在 axios 配置中使用 `maskingErrorInterceptors: true` 跳过错误处理

### 平台特定注意事项
- **uni-app API**：使用 `uni.*` 方法实现原生功能（导航、存储等）
- **条件渲染**：需要时使用 `v-if` 进行平台检查
- **资源路径**：图片使用 `@/static/`，由构建系统自动解析
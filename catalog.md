# Next.js + TypeScript + React 学习目录

## 第一章 项目基础与环境配置

### 1.1 Next.js 项目初始化
- **项目创建与配置**
  - `create-next-app` 脚手架使用
  - `next.config.js` / `next.config.mjs` 核心配置项
  - TypeScript 配置 (`tsconfig.json`)
- **项目结构理解**
  - App Router 目录结构 (`app/` vs `pages/`)
  - 特殊文件约定 (`layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`)
  - 公共资源目录 (`public/`, `static/`)
- **开发工具配置**
  - ESLint 和 Prettier 集成
  - Tailwind CSS 配置与使用

### 1.2 TypeScript 基础语法
- **类型系统基础**
  - 基本类型 (string, number, boolean, null, undefined, symbol, bigint)
  - 数组和元组 (Array, Tuple)
  - 枚举 (Enum)
  - Any, Unknown, Never, Void
- **类型注解与推断**
  - 变量类型注解
  - 函数参数和返回值类型
  - 类型推断机制
- **联合类型与交叉类型**
  - Union Types (`|`)
  - Intersection Types (`&`)
  - 类型守卫 (Type Guards)

## 第二章 TypeScript 进阶特性

### 2.1 接口与类型别名
- **Interface 接口**
  - 基本定义和属性
  - 可选属性 (`?`)
  - 只读属性 (`readonly`)
  - 索引签名 (`[key: string]: any`)
  - 接口继承 (`extends`)
- **Type 类型别名**
  - 类型别名定义
  - Interface vs Type 的区别和使用场景
  - 字面量类型

### 2.2 泛型编程
- **泛型基础**
  - 泛型函数
  - 泛型接口
  - 泛型类
- **泛型约束**
  - `extends` 约束
  - 多个类型参数
  - 默认类型参数
- **内置工具类型**
  - `Partial<T>`, `Required<T>`, `Readonly<T>`
  - `Pick<T, K>`, `Omit<T, K>`
  - `Record<K, T>`, `Exclude<T, U>`, `Extract<T, U>`
  - `ReturnType<T>`, `Parameters<T>`

### 2.3 类与面向对象
- **类的基本结构**
  - 构造函数 (`constructor`)
  - 属性和方法
  - 参数属性 (构造函数中直接定义)
- **访问修饰符与继承**
  - `public`, `private`, `protected`
  - `readonly` 属性
  - `extends` 继承和 `super` 调用
- **高级类特性**
  - 静态成员 (`static`)
  - 抽象类 (`abstract`)
  - 实现接口 (`implements`)

## 第三章 React 核心概念

### 3.1 组件基础
- **函数组件与 TSX**
  - 函数组件定义
  - TSX 语法规则
  - JSX 表达式和嵌入
- **Props 类型定义**
  - Props 接口定义
  - 可选 Props 和默认值
  - `children` 属性类型
  - Props 解构和类型推断
- **组件导入导出**
  - 默认导出 vs 命名导出
  - 组件组织最佳实践

### 3.2 Hooks 基础
- **useState**
  - 状态定义和类型推断
  - 状态更新机制
  - 函数式更新
  - 状态初始化函数
- **useEffect**
  - 副作用执行时机
  - 依赖数组原理
  - 清理函数 (cleanup)
  - 常见使用场景 (数据获取、订阅、DOM 操作)
- **useRef**
  - DOM 引用
  - 可变值存储
  - `useRef` vs `useState` 的区别

### 3.3 Hooks 进阶
- **useContext**
  - Context 创建和类型定义
  - Provider 和 Consumer
  - 跨组件状态共享
- **useMemo 和 useCallback**
  - 性能优化原理
  - 使用场景和注意事项
  - 依赖项管理
- **useReducer**
  - Reducer 函数定义
  - Action 类型定义
  - 复杂状态管理
  - `useReducer` vs `useState`

### 3.4 自定义 Hooks
- **自定义 Hooks 设计**
  - 命名规范 (`use` 前缀)
  - 逻辑复用模式
  - 返回值设计
- **常用自定义 Hooks 实现**
  - `useLocalStorage`
  - `useFetch` / `useAsync`
  - `useDebounce` / `useThrottle`
  - `useWindowSize` / `useMediaQuery`

## 第四章 Next.js App Router 核心

### 4.1 路由系统
- **文件系统路由**
  - 基于文件夹的路由约定
  - 动态路由 (`[id]`, `[...slug]`, `[[...slug]]`)
  - 路由组 (`(folder)`)
  - 平行路由 (`@folder`)
- **路由导航**
  - `<Link>` 组件
  - `useRouter` Hook
  - `usePathname`, `useSearchParams`
  - 编程式导航
- **路由拦截与重写**
  - 拦截路由 (`(.)`, `(..)`, `(...)`)
  - `next.config.js` 中的 rewrites 和 redirects

### 4.2 布局与模板
- **Layout 布局系统**
  - 根布局 (`app/layout.tsx`)
  - 嵌套布局
  - 路由组布局
  - 布局间数据传递限制
- **Template 模板**
  - Template vs Layout 的区别
  - 使用场景
- **加载与错误处理**
  - `loading.tsx` 加载状态
  - `error.tsx` 错误边界
  - `not-found.tsx` 404 页面
  - `global-error.tsx` 全局错误处理

### 4.3 数据获取
- **服务端组件 (Server Components)**
  - RSC 原理和优势
  - `async/await` 直接数据获取
  - 数据获取最佳实践
- **客户端组件 (Client Components)**
  - `'use client'` 指令
  - 何时使用客户端组件
  - 服务端与客户端组件边界
- **数据获取模式**
  - 并行数据获取
  - 串行数据获取
  - 预加载数据
  - 流式渲染 (Streaming)

### 4.4 缓存与重新验证
- **缓存机制**
  - 请求缓存 (Request Memoization)
  - 数据缓存 (Data Cache)
  - 完整路由缓存 (Full Route Cache)
  - 路由器缓存 (Router Cache)
- **重新验证策略**
  - 基于时间的重新验证 (`revalidate`)
  - 按需重新验证 (`revalidatePath`, `revalidateTag`)
  - `cache: 'no-store'` 禁用缓存
- **`fetch` 扩展选项**
  - `next.revalidate`
  - `next.tags`

## 第五章 Next.js 数据处理

### 5.1 Server Actions
- **Server Actions 基础**
  - `'use server'` 指令
  - 表单处理
  - 服务端数据变更
- **Server Actions 进阶**
  - 错误处理
  - 验证和安全性
  - 乐观更新 (Optimistic Updates)
  - 与客户端组件集成
- **FormData 和表单状态**
  - `useFormStatus` Hook
  - `useFormState` Hook
  - 表单验证

### 5.2 Route Handlers (API Routes)
- **Route Handler 基础**
  - `route.ts` / `route.js` 文件
  - HTTP 方法 (GET, POST, PUT, DELETE, PATCH)
  - 请求和响应对象
- **动态 Route Handlers**
  - 动态路由参数
  - 查询参数处理
  - Headers 和 Cookies 操作
- **高级应用**
  - 中间件模式
  - CORS 配置
  - Webhook 处理
  - 流式响应

### 5.3 Middleware 中间件
- **Middleware 基础**
  - `middleware.ts` 配置
  - 请求拦截和重写
  - 执行顺序
- **常用场景**
  - 身份验证和授权
  - 国际化 (i18n)
  - A/B 测试
  - 日志记录
- **Matcher 配置**
  - 路径匹配规则
  - 条件执行

## 第六章 状态管理与数据流

### 6.1 React 状态管理模式
- **状态提升 (Lifting State Up)**
  - 共享状态管理
  - 单一数据源原则
- **组件组合模式**
  - Composition vs Inheritance
  - Render Props
  - Compound Components
- **Context API 深入**
  - 多个 Context 组合
  - Context 性能优化
  - Context 分离策略

### 6.2 第三方状态管理库
- **Zustand**
  - Store 创建和类型定义
  - Actions 和 Selectors
  - 中间件使用
  - 与 Next.js 集成
- **React Query / TanStack Query**
  - 查询和变更
  - 缓存管理
  - 乐观更新
  - SSR 配置
- **Jotai / Recoil** (可选)
  - 原子化状态管理
  - 使用场景

### 6.3 表单状态管理
- **React Hook Form**
  - 表单注册和验证
  - TypeScript 类型定义
  - 错误处理
  - 与 Server Actions 集成
- **Zod 验证库**
  - Schema 定义
  - 类型推断
  - 自定义验证规则
  - 与 React Hook Form 结合

## 第七章 样式与 UI 设计

### 7.1 Tailwind CSS 深入
- **工具类使用**
  - 响应式设计 (sm, md, lg, xl, 2xl)
  - 暗黑模式 (`dark:`)
  - 伪类和伪元素 (hover, focus, active, before, after)
  - 自定义变体
- **配置与扩展**
  - `tailwind.config.js` 配置
  - 主题定制 (colors, spacing, fonts)
  - 插件系统
- **组件化样式**
  - `@apply` 指令
  - CSS 模块化
  - 样式复用策略

### 7.2 CSS-in-JS 方案
- **CSS Modules**
  - 模块化 CSS 使用
  - 与 TypeScript 集成
  - 类名组合
- **styled-components / Emotion**
  - 基本使用和类型定义
  - 主题系统
  - 服务端渲染配置
- **选择合适的样式方案**
  - 各方案对比
  - 性能考量

### 7.3 UI 组件库集成
- **shadcn/ui**
  - 组件安装和自定义
  - 主题配置
  - 表单组件使用
- **Radix UI**
  - 无样式组件库
  - 可访问性 (Accessibility)
  - 与 Tailwind 结合
- **响应式图片和媒体**
  - `next/image` 组件
  - 图片优化
  - 懒加载

## 第八章 性能优化

### 8.1 React 性能优化
- **组件渲染优化**
  - `React.memo`
  - `useMemo` 和 `useCallback` 深入
  - 虚拟化长列表 (react-window, react-virtual)
- **Code Splitting**
  - 动态导入 (`dynamic import`)
  - `React.lazy` 和 `Suspense`
  - Next.js `dynamic` 函数
- **性能分析工具**
  - React DevTools Profiler
  - Chrome Performance 工具
  - 性能指标理解 (LCP, FID, CLS)

### 8.2 Next.js 性能优化
- **渲染策略**
  - 静态生成 (Static Generation)
  - 服务端渲染 (Server-Side Rendering)
  - 增量静态再生成 (ISR)
  - 流式服务端渲染 (Streaming SSR)
- **资源优化**
  - 字体优化 (`next/font`)
  - 脚本优化 (`next/script`)
  - 图片优化策略
  - Bundle 分析
- **部分预渲染 (PPR)**
  - PPR 概念和优势
  - 配置和使用

### 8.3 SEO 优化
- **Metadata API**
  - 静态 Metadata
  - 动态 Metadata (`generateMetadata`)
  - Open Graph 和 Twitter Cards
- **Sitemap 和 Robots**
  - `sitemap.ts` 生成
  - `robots.ts` 配置
- **结构化数据**
  - JSON-LD
  - Schema.org

## 第九章 测试

### 9.1 单元测试
- **Jest 配置**
  - Next.js 测试环境配置
  - TypeScript 支持
- **React Testing Library**
  - 组件测试基础
  - 用户交互模拟
  - 异步操作测试
  - Mock 和 Stub
- **测试驱动开发 (TDD)**
  - TDD 流程
  - 测试覆盖率

### 9.2 集成测试与 E2E 测试
- **Playwright / Cypress**
  - E2E 测试配置
  - 页面交互测试
  - API 测试
- **测试策略**
  - 测试金字塔
  - 关键路径测试

## 第十章 TypeScript 高级类型

### 10.1 高级类型技巧
- **条件类型**
  - 条件类型语法 (`T extends U ? X : Y`)
  - 分布式条件类型
  - `infer` 关键字
- **映射类型**
  - 基本映射类型
  - 键重映射 (`as` 子句)
  - 模板字面量类型
- **类型体操实践**
  - 深度 Readonly
  - 深度 Partial
  - 数组转联合类型
  - 函数重载类型定义

### 10.2 TypeScript 配置优化
- **编译选项深入**
  - `strict` 系列选项
  - `moduleResolution`
  - 路径别名 (`paths`)
- **类型声明文件**
  - `.d.ts` 文件编写
  - 第三方库类型声明
  - 全局类型声明

## 第十一章 实战项目模式

### 11.1 认证与授权
- **Next Auth.js**
  - 认证提供商配置
  - Session 管理
  - 中间件保护路由
  - TypeScript 类型扩展
- **JWT 和 Cookies**
  - Token 管理
  - 安全实践

### 11.2 数据库集成
- **Prisma ORM**
  - Schema 定义
  - 类型安全查询
  - 迁移管理
  - 与 Next.js 集成
- **数据库选择**
  - PostgreSQL, MySQL
  - MongoDB
  - Supabase, PlanetScale

### 11.3 文件上传与存储
- **文件上传处理**
  - FormData 处理
  - 多文件上传
  - 进度显示
- **云存储集成**
  - AWS S3
  - Cloudinary
  - Vercel Blob

### 11.4 国际化 (i18n)
- **next-intl / next-i18next**
  - 多语言配置
  - 翻译文件管理
  - 语言切换
  - 类型安全的翻译

## 第十二章 部署与DevOps

### 12.1 部署平台
- **Vercel 部署**
  - 自动部署流程
  - 环境变量配置
  - 预览部署
- **其他部署选项**
  - Docker 容器化
  - 自托管 (Self-hosting)
  - Netlify, Railway

### 12.2 环境管理
- **环境变量**
  - `.env.local`, `.env.production`
  - 客户端 vs 服务端环境变量
  - 类型安全的环境变量
- **多环境配置**
  - 开发、测试、生产环境
  - 环境隔离策略

### 12.3 监控与日志
- **错误监控**
  - Sentry 集成
  - 错误边界实践
- **性能监控**
  - Vercel Analytics
  - Web Vitals 监控
- **日志系统**
  - 服务端日志
  - 客户端日志

## 第十三章 安全性

### 13.1 Web 安全基础
- **常见安全威胁**
  - XSS (跨站脚本攻击)
  - CSRF (跨站请求伪造)
  - SQL 注入
- **Next.js 内置安全特性**
  - 自动 HTML 转义
  - CSP (内容安全策略)
  - HTTPS 强制

### 13.2 数据验证与清洗
- **输入验证**
  - 客户端验证
  - 服务端验证
  - Zod Schema 验证
- **输出编码**
  - HTML 实体编码
  - URL 编码
  - JSON 安全

### 13.3 认证安全
- **密码安全**
  - 哈希算法 (bcrypt, argon2)
  - 盐值 (Salt)
- **会话管理**
  - Session 过期
  - Token 刷新
  - 双因素认证 (2FA)

## 第十四章 高级模式与最佳实践

### 14.1 设计模式
- **React 设计模式**
  - Container/Presentational 组件
  - Higher-Order Components (HOC)
  - Render Props
  - Hooks 组合模式
- **Next.js 架构模式**
  - 功能模块化
  - 代码组织最佳实践
  - Monorepo 结构 (Turborepo)

### 14.2 代码质量
- **代码规范**
  - ESLint 规则定制
  - Prettier 配置
  - Husky + lint-staged
- **TypeScript 严格模式**
  - 类型覆盖率
  - 避免 `any`
  - 类型收窄技巧

### 14.3 可访问性 (A11y)
- **ARIA 属性**
  - 语义化 HTML
  - 键盘导航
  - 屏幕阅读器支持
- **可访问性测试**
  - axe-core
  - WAVE 工具

### 14.4 文档与协作
- **代码注释与文档**
  - TSDoc / JSDoc
  - Storybook 组件文档
- **版本控制**
  - Git 工作流
  - 语义化版本
  - Changelog 管理

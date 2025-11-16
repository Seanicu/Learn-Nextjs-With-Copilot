# 1.1 Next.js 项目初始化

## 学习目标
- 理解 Next.js 项目的创建和初始化流程
- 掌握 App Router 的目录结构和特殊文件约定
- 熟悉核心配置文件的作用和常用配置项
- 了解 TypeScript 和 Tailwind CSS 的集成方式

---

## 一、项目创建与配置

### 1.1 使用 create-next-app 创建项目

Next.js 提供了官方脚手架工具 `create-next-app` 来快速创建项目：

```bash
npx create-next-app@latest my-app
```

**交互式选项说明：**
- **TypeScript**: 是否使用 TypeScript（推荐选 Yes）
- **ESLint**: 是否集成 ESLint 代码检查工具（推荐选 Yes）
- **Tailwind CSS**: 是否使用 Tailwind CSS（推荐选 Yes）
- **`src/` directory**: 是否使用 src 目录组织代码（推荐选 Yes）
- **App Router**: 是否使用新的 App Router（推荐选 Yes，这是 Next.js 13+ 的核心特性）
- **Import alias**: 自定义导入别名，默认为 `@/*`

### 1.2 next.config.js / next.config.mjs

这是 Next.js 的核心配置文件，用于自定义构建和运行时行为。

**基础配置示例：**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 严格模式：检测潜在问题
  reactStrictMode: true,
  
  // 图片优化配置
  images: {
    domains: ['example.com'], // 允许的外部图片域名
    formats: ['image/webp', 'image/avif'], // 支持的图片格式
  },
  
  // 重定向配置
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
  
  // 环境变量配置
  env: {
    CUSTOM_KEY: 'my-value',
  },
}

module.exports = nextConfig
```

#### 1.2.1 reactStrictMode - React 严格模式

**作用：** 启用 React 的严格模式，帮助检测应用中的潜在问题。

```javascript
reactStrictMode: true  // 推荐开启
```

**启用 vs 禁用的区别：**

| 配置 | 行为 | 适用场景 |
|------|------|---------|
| `true` | 在开发模式下进行额外的检查和警告，组件会**双重渲染** | ✅ 推荐用于所有项目 |
| `false` | 不进行额外检查，组件正常渲染一次 | ❌ 不推荐，除非排查特定问题 |

**重要特性：**
- ✅ **仅在开发环境生效**，不影响生产环境性能
- ✅ 帮助识别不安全的生命周期方法
- ✅ 检测意外的副作用（通过双重调用函数）
- ✅ 检测过时的 API 使用

**示例影响：**
```tsx
// 开启严格模式时，这个组件在开发环境会渲染两次
export default function MyComponent() {
  console.log('Rendering...') // 会打印两次
  return <div>Hello</div>
}
```

#### 1.2.2 images - 图片优化配置

**作用：** 配置 Next.js 内置的图片优化功能。

```javascript
images: {
  // 方式 1: 使用 domains（推荐用于明确的域名）
  domains: ['example.com', 'cdn.example.com'],
  
  // 方式 2: 使用 remotePatterns（更灵活，推荐）
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.example.com', // 支持通配符
      port: '',
      pathname: '/images/**',
    },
  ],
  
  // 支持的图片格式
  formats: ['image/webp', 'image/avif'],
  
  // 图片尺寸配置
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  
  // 图片质量（1-100）
  quality: 75, // 默认值
  
  // 禁用静态导入优化
  disableStaticImages: false,
}
```

**配置项详解：**

**domains vs remotePatterns：**

| 配置方式 | 用途 | 示例 |
|---------|------|------|
| `domains` | 简单的域名白名单 | `['cdn.com']` |
| `remotePatterns` | 更精细的控制（协议、路径、通配符） | 支持 `**.cdn.com/images/**` |

```javascript
// ❌ 不配置域名 - 外部图片会报错
<Image src="https://example.com/photo.jpg" width={500} height={300} />
// Error: Invalid src prop

// ✅ 配置后可以使用
images: {
  domains: ['example.com']
}
```

**formats 图片格式：**

| 格式 | 优势 | 浏览器支持 | 文件大小 |
|------|------|-----------|---------|
| `image/webp` | 较好的压缩率，广泛支持 | 96%+ | 比 JPEG 小 25-35% |
| `image/avif` | 最佳压缩率 | 较新浏览器 | 比 WebP 再小 20% |

**quality 质量参数：**

| 值 | 效果 | 推荐场景 |
|----|------|---------|
| `100` | 最高质量，文件最大 | 需要完美画质的场景 |
| `75` | 默认值，质量与大小平衡 | ✅ 大多数场景 |
| `50` | 较低质量，文件较小 | 缩略图、背景图 |

#### 1.2.3 redirects - 重定向配置

**作用：** 配置 URL 重定向规则。

```javascript
async redirects() {
  return [
    // 永久重定向（SEO 友好）
    {
      source: '/old-blog',
      destination: '/blog',
      permanent: true, // 返回 308 状态码
    },
    
    // 临时重定向
    {
      source: '/temp-page',
      destination: '/new-page',
      permanent: false, // 返回 307 状态码
    },
    
    // 带参数的重定向
    {
      source: '/user/:id',
      destination: '/profile/:id',
      permanent: true,
    },
    
    // 使用通配符
    {
      source: '/blog/:slug*',
      destination: '/news/:slug*',
      permanent: true,
    },
  ]
}
```

**permanent 参数的区别：**

| 值 | HTTP 状态码 | 浏览器行为 | 使用场景 |
|----|-----------|-----------|---------|
| `true` | 308 | 浏览器会缓存重定向，下次直接跳转 | ✅ 永久性的 URL 变更、旧 URL 废弃 |
| `false` | 307 | 每次都会请求服务器确认 | ✅ 临时维护、A/B 测试 |

**重要区别：**
- `permanent: true` → 搜索引擎会更新索引，将权重转移到新 URL
- `permanent: false` → 搜索引擎保留旧 URL 的索引

#### 1.2.4 rewrites - 路径重写（不改变 URL）

```javascript
async rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: 'https://external-api.com/:path*',
    },
  ]
}
```

**redirects vs rewrites 的区别：**

| 特性 | redirects | rewrites |
|------|-----------|----------|
| URL 变化 | ✅ 浏览器地址栏会变化 | ❌ 地址栏不变 |
| 用途 | 永久/临时跳转 | 代理、API 路由 |
| SEO 影响 | 有影响 | 无影响 |

#### 1.2.5 env - 环境变量

```javascript
env: {
  CUSTOM_KEY: 'my-value',
  API_URL: 'https://api.example.com',
}
```

**注意：** 
- ⚠️ 这些变量会**暴露到客户端**（不安全）
- ✅ 推荐使用 `.env.local` 文件代替
- ✅ 服务端专用变量不需要前缀
- ✅ 客户端变量需要 `NEXT_PUBLIC_` 前缀

#### 1.2.6 其他常用配置

```javascript
const nextConfig = {
  // 输出模式
  output: 'standalone', // 用于 Docker 部署
  
  // 自定义 webpack 配置
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false }
    }
    return config
  },
  
  // 压缩配置
  compress: true, // 启用 gzip 压缩（默认 true）
  
  // 页面扩展名
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],
  
  // 实验性功能
  experimental: {
    serverActions: true,
  },
}
```

### 1.3 tsconfig.json

TypeScript 配置文件，控制类型检查和编译行为。

**Next.js 默认配置：**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### 1.3.1 编译选项详解

**target - 编译目标：**

指定 TypeScript 编译后的 JavaScript 版本。

| 值 | 支持的特性 | 浏览器兼容性 | 推荐场景 |
|----|-----------|-------------|---------|
| `ES5` | 基础 ES5 语法 | IE9+ | 需要支持旧浏览器 |
| `ES2015/ES6` | let/const, 箭头函数, class | IE11+ | 一般项目 |
| `ES2017` | async/await | 现代浏览器 | ✅ Next.js 默认 |
| `ES2020` | 可选链 `?.`, 空值合并 `??` | 最新浏览器 | 仅现代浏览器 |

```json
"target": "ES2017" // Next.js 推荐值
```

**lib - 类型库：**

指定编译时包含的类型声明库。

| 库 | 包含的类型 | 必需性 |
|----|-----------|--------|
| `"dom"` | DOM API（document, window 等） | ✅ Web 应用必需 |
| `"dom.iterable"` | DOM 集合的迭代器方法 | ✅ 推荐 |
| `"esnext"` | 最新 ES 特性的类型 | ✅ 推荐 |

```json
"lib": ["dom", "dom.iterable", "esnext"]
```

**allowJs - 允许 JavaScript 文件：**

| 值 | 行为 | 使用场景 |
|----|------|---------|
| `true` | 可以在项目中混用 `.js` 和 `.ts` 文件 | ✅ 渐进式迁移到 TypeScript |
| `false` | 只允许 `.ts`/`.tsx` 文件 | 纯 TypeScript 项目 |

**skipLibCheck - 跳过库文件检查：**

| 值 | 行为 | 影响 |
|----|------|------|
| `true` | 跳过 `.d.ts` 声明文件的类型检查 | ✅ 加快编译速度，减少第三方库错误 |
| `false` | 检查所有类型声明文件 | 编译慢，可能出现库的类型错误 |

**strict - 严格模式：**

启用所有严格类型检查选项的集合。

| 值 | 包含的检查 | 推荐 |
|----|-----------|------|
| `true` | `strictNullChecks`, `strictFunctionTypes`, `strictBindCallApply` 等全部严格检查 | ✅ 强烈推荐 |
| `false` | 宽松的类型检查 | ❌ 不推荐，容易出错 |

```typescript
// strict: true 的影响
let name: string
name = null // ❌ Error: Type 'null' is not assignable to type 'string'

// strict: false 时
let name: string
name = null // ✅ 允许（但不安全）
```

**noEmit - 不生成输出文件：**

| 值 | 行为 | Next.js 中的作用 |
|----|------|-----------------|
| `true` | 只做类型检查，不生成 `.js` 文件 | ✅ Next.js 自己处理编译 |
| `false` | 生成编译后的 `.js` 文件 | 不适用于 Next.js |

**esModuleInterop - ES 模块互操作：**

| 值 | 导入行为 | 示例 |
|----|---------|------|
| `true` | 允许用 `import React from 'react'` | ✅ 推荐 |
| `false` | 需要用 `import * as React from 'react'` | 不方便 |

```typescript
// esModuleInterop: true
import React from 'react' // ✅ 简洁

// esModuleInterop: false
import * as React from 'react' // 繁琐
```

**module - 模块系统：**

| 值 | 模块格式 | 适用场景 |
|----|---------|---------|
| `commonjs` | require/module.exports | Node.js |
| `esnext` | import/export | ✅ Next.js 推荐 |
| `es2020` | import/export + 动态导入 | 现代项目 |

**moduleResolution - 模块解析策略：**

| 值 | 解析方式 | 说明 |
|----|---------|------|
| `node` | Node.js 风格解析 | 传统方式 |
| `bundler` | 打包工具风格解析 | ✅ Next.js 13+ 推荐，支持更多路径格式 |

```json
"moduleResolution": "bundler" // 支持 exports 字段等新特性
```

**resolveJsonModule - 解析 JSON 模块：**

| 值 | 行为 | 示例 |
|----|------|------|
| `true` | 可以直接导入 `.json` 文件 | `import data from './data.json'` ✅ |
| `false` | 不能导入 JSON | 需要用 `require` 或手动读取 |

**isolatedModules - 隔离模块：**

| 值 | 作用 | 为什么需要 |
|----|------|-----------|
| `true` | 确保每个文件都可以独立编译 | ✅ Babel/SWC 等转译器需要 |
| `false` | 允许跨文件的类型引用 | 不适用于 Next.js |

**jsx - JSX 编译：**

| 值 | 行为 | 说明 |
|----|------|------|
| `preserve` | 保留 JSX 语法不编译 | ✅ Next.js 自己处理 JSX |
| `react` | 编译为 `React.createElement()` | 传统 React 项目 |
| `react-jsx` | 编译为新的 JSX 转换 | React 17+ |

```tsx
// jsx: "preserve" - TypeScript 不处理，留给 Next.js
<div>Hello</div> → 保持原样

// jsx: "react" - TypeScript 编译
<div>Hello</div> → React.createElement('div', null, 'Hello')
```

**incremental - 增量编译：**

| 值 | 行为 | 优势 |
|----|------|------|
| `true` | 保存编译信息，下次只编译改变的文件 | ✅ 加快重新编译速度 |
| `false` | 每次都完整编译 | 慢 |

**plugins - TypeScript 插件：**

```json
"plugins": [
  {
    "name": "next"
  }
]
```

Next.js TypeScript 插件提供：
- ✅ 路由类型自动生成
- ✅ 服务端组件和客户端组件的类型检查
- ✅ 特殊文件（layout、page 等）的类型提示

**paths - 路径别名：**

简化导入路径，避免多层 `../../` 引用。

```json
"paths": {
  "@/*": ["./src/*"],
  "@components/*": ["./src/components/*"],
  "@utils/*": ["./src/utils/*"]
}
```

**使用示例：**

```typescript
// ❌ 不使用别名
import Button from '../../../components/Button'

// ✅ 使用别名
import Button from '@/components/Button'
// 或
import Button from '@components/Button'
```

#### 1.3.2 include 和 exclude

**include - 包含的文件：**

```json
"include": [
  "next-env.d.ts",      // Next.js 类型声明
  "**/*.ts",            // 所有 .ts 文件
  "**/*.tsx",           // 所有 .tsx 文件
  ".next/types/**/*.ts" // Next.js 生成的类型
]
```

**exclude - 排除的文件：**

```json
"exclude": [
  "node_modules",  // 第三方包
  ".next",         // Next.js 构建输出（include 中已特殊包含 types）
  "dist",          // 其他构建输出
  "build"
]
```

#### 1.3.3 常见配置对比

**开发环境 vs 生产环境：**

两者通常使用相同配置，TypeScript 仅在编译时工作，不影响运行时。

**严格模式 vs 宽松模式：**

| 配置 | 严格模式 | 宽松模式 |
|------|---------|---------|
| `strict` | `true` | `false` |
| 类型安全 | ✅ 高 | ❌ 低 |
| 开发体验 | 初期较慢，但减少 bug | 快速但容易出错 |
| 推荐 | ✅ 新项目 | 老项目迁移过渡期 |

---

## 二、App Router 目录结构

### 2.1 App Router vs Pages Router

Next.js 13 引入了全新的 **App Router**（基于 `app/` 目录），它提供了更强大的功能：

| 特性 | App Router (`app/`) | Pages Router (`pages/`) |
|------|---------------------|------------------------|
| 服务端组件 | ✅ 默认支持 | ❌ 不支持 |
| 嵌套布局 | ✅ 支持 | ❌ 受限 |
| 加载状态 | ✅ `loading.tsx` | ❌ 需手动实现 |
| 错误处理 | ✅ `error.tsx` | ❌ 需手动实现 |
| 流式渲染 | ✅ 支持 | ❌ 不支持 |

**重点：** 新项目应优先使用 App Router，它是 Next.js 的未来方向。

### 2.2 特殊文件约定

App Router 使用特殊文件名来定义路由和 UI：

| 文件名 | 作用 | 必需性 |
|--------|------|--------|
| `layout.tsx` | 定义布局，在路由间共享 | 根布局必需 |
| `page.tsx` | 定义页面，使路由可访问 | 必需（定义路由） |
| `loading.tsx` | 定义加载状态 UI | 可选 |
| `error.tsx` | 定义错误边界 UI | 可选 |
| `not-found.tsx` | 定义 404 页面 | 可选 |
| `template.tsx` | 类似 layout，但每次导航都重新挂载 | 可选 |

**文件夹结构示例：**

```
app/
├── layout.tsx          # 根布局（必需）
├── page.tsx            # 首页 /
├── loading.tsx         # 首页加载状态
├── error.tsx           # 首页错误处理
├── about/
│   └── page.tsx        # /about 页面
└── blog/
    ├── layout.tsx      # 博客布局
    ├── page.tsx        # /blog 页面
    └── [slug]/
        └── page.tsx    # /blog/xxx 动态路由
```

### 2.3 layout.tsx - 布局文件

布局在路由切换时**保持状态**且**不重新渲染**。

**根布局示例：**

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
```

**关键点：**
- 根布局**必须**包含 `<html>` 和 `<body>` 标签
- 根布局**必须**存在，不能删除
- `children` 是子路由或子布局的内容
- 布局可以嵌套，子布局会渲染在父布局的 `children` 位置

### 2.4 page.tsx - 页面文件

只有定义了 `page.tsx` 的路由才能被访问。

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <main>
      <h1>欢迎来到首页</h1>
    </main>
  )
}
```

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <main>
      <h1>关于我们</h1>
    </main>
  )
}
```

**难点：** 如果文件夹中没有 `page.tsx`，该路由不会被创建（但可以包含 `layout.tsx` 作为布局容器）。

### 2.5 loading.tsx - 加载状态

自动创建 Suspense 边界，显示加载 UI。

```tsx
// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}
```

**工作原理：** 
- Next.js 会自动将 `page.tsx` 包裹在 `<Suspense>` 中
- 页面数据加载时显示 `loading.tsx` 的内容
- 加载完成后替换为实际页面内容

### 2.6 error.tsx - 错误边界

捕获并处理错误，需要是客户端组件。

```tsx
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold text-red-600">出错了！</h2>
      <p className="mt-2 text-gray-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        重试
      </button>
    </div>
  )
}
```

**重点：**
- 必须使用 `'use client'` 指令（错误边界需要 React 客户端功能）
- `error` 参数包含错误信息
- `reset()` 函数尝试重新渲染错误组件

---

## 三、公共资源目录

### 3.1 public/ 目录

存放静态资源，直接映射到根路径 `/`。

```
public/
├── favicon.ico
├── images/
│   └── logo.png
└── robots.txt
```

**使用方式：**

```tsx
// 访问 public/images/logo.png
<img src="/images/logo.png" alt="Logo" />

// 使用 next/image
import Image from 'next/image'
<Image src="/images/logo.png" width={200} height={100} alt="Logo" />
```

**注意：** 
- 文件路径从 `/` 开始，不需要写 `public`
- 适合存放不会改变的资源（图片、字体、robots.txt 等）

---

## 四、Tailwind CSS 配置

### 4.1 tailwind.config.ts

配置 Tailwind 的扫描路径、主题、插件等。

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  // 配置要扫描的文件路径
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // 主题自定义
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  
  // 插件
  plugins: [],
}

export default config
```

### 4.2 globals.css

全局样式文件，导入 Tailwind 指令。

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 自定义全局样式 */
@layer base {
  h1 {
    @apply text-2xl font-bold;
  }
}

@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}
```

**重点：**
- `@tailwind` 指令导入 Tailwind 的基础样式、组件和工具类
- `@layer` 指令用于组织自定义样式
- 在根布局中导入：`import './globals.css'`

---

## 五、开发工具配置

### 5.1 ESLint

Next.js 内置了 ESLint 配置。

```json
// .eslintrc.json
{
  "extends": "next/core-web-vitals"
}
```

**常用命令：**
```bash
npm run lint        # 检查代码
npm run lint -- --fix  # 自动修复
```

### 5.2 Prettier（可选）

代码格式化工具，需要手动安装。

```bash
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## 六、重点总结

### 必须掌握的概念

1. **App Router 是基于文件系统的路由**
   - `page.tsx` 定义可访问的路由
   - `layout.tsx` 定义共享布局
   - 特殊文件有特定用途和命名约定

2. **根布局的重要性**
   - 必须包含 `<html>` 和 `<body>`
   - 应用的最外层包装
   - 整个应用只有一个根布局

3. **配置文件的作用**
   - `next.config.js`: Next.js 运行时配置
   - `tsconfig.json`: TypeScript 编译配置
   - `tailwind.config.ts`: Tailwind 主题和扫描路径配置

### 常见易错点

1. **忘记在根布局中添加 `<html>` 和 `<body>` 标签**
   ```tsx
   // ❌ 错误
   export default function RootLayout({ children }) {
     return <div>{children}</div>
   }
   
   // ✅ 正确
   export default function RootLayout({ children }) {
     return (
       <html lang="zh-CN">
         <body>{children}</body>
       </html>
     )
   }
   ```

2. **error.tsx 忘记添加 'use client' 指令**
   ```tsx
   // ❌ 错误 - 缺少 'use client'
   export default function Error({ error, reset }) {
     return <div>Error</div>
   }
   
   // ✅ 正确
   'use client'
   export default function Error({ error, reset }) {
     return <div>Error</div>
   }
   ```

3. **public 目录路径使用错误**
   ```tsx
   // ❌ 错误
   <img src="public/logo.png" />
   
   // ✅ 正确
   <img src="/logo.png" />
   ```

4. **混淆 layout 和 template**
   - `layout.tsx`: 在路由切换时保持状态，不重新挂载
   - `template.tsx`: 在每次路由切换时都会重新挂载

---

## 学习建议

1. **动手实践**：创建一个 Next.js 项目，观察目录结构
2. **对比文件**：查看 `next.config.js`、`tsconfig.json` 的默认配置
3. **理解约定**：记住特殊文件名及其作用
4. **实验布局**：创建嵌套路由和布局，观察它们如何组合

完成知识学习后，请继续完成试题来巩固理解！

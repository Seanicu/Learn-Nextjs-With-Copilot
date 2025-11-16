/**
 * 编程题 3: 创建嵌套布局结构
 * 
 * 要求：
 * 1. 创建一个博客布局组件，包含侧边栏和主内容区
 * 2. 侧边栏显示固定的导航链接（首页、文章列表、关于）
 * 3. 主内容区显示 children（子页面内容）
 * 4. 使用 Tailwind CSS 创建响应式布局
 * 5. 正确定义 TypeScript 类型
 * 
 * 提示：
 * - 使用 next/link 创建导航链接
 * - 布局组件接收 children 参数
 * - 可以使用 flexbox 或 grid 布局
 */

import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // TODO: 实现博客布局
    // 1. 创建包含侧边栏和主内容区的布局
    // 2. 侧边栏包含导航链接
    // 3. 主内容区渲染 children
    // 4. 使用响应式设计（移动端侧边栏可折叠或置顶）
    <div>
      {/* 在这里编写你的代码 */}
      {/* 侧边栏 */}
      <aside>
        {/* 导航链接 */}
      </aside>
      
      {/* 主内容区 */}
      <main>
        {/* children */}
      </main>
    </div>
  )
}

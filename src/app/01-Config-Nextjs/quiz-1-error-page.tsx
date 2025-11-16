/**
 * 编程题 1: 创建自定义错误页面组件
 * 
 * 要求：
 * 1. 创建一个错误处理组件，符合 Next.js App Router 的规范
 * 2. 组件需要显示错误信息和错误摘要（如果有）
 * 3. 提供一个"返回首页"按钮和一个"重试"按钮
 * 4. 使用 Tailwind CSS 进行样式设计
 * 5. 确保使用正确的 TypeScript 类型定义
 * 
 * 提示：
 * - 错误边界组件需要特殊的指令
 * - 参考 error.tsx 的参数类型定义
 * - 使用 next/navigation 中的 useRouter 进行导航
 */

'use client'

import { useRouter } from 'next/navigation'

export default function CustomError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  return (
    // TODO: 实现错误页面 UI
    // 1. 显示错误标题
    // 2. 显示错误消息 (error.message)
    // 3. 如果有 digest，显示错误摘要
    // 4. 添加"重试"按钮，调用 reset()
    // 5. 添加"返回首页"按钮，调用 router.push('/')
    // 6. 使用 Tailwind CSS 美化样式
    <div>
      {/* 在这里编写你的代码 */}
    </div>
  )
}

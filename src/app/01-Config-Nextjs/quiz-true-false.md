# 判断题 - Next.js 项目初始化

请判断以下陈述是否正确。完成后提交给我检查。

| 题号 | 题目 | 你的答案 (对/错) |
|------|------|-----------------|
| 1 | App Router 和 Pages Router 可以在同一个项目中同时使用 | |
| 2 | 根布局文件 `app/layout.tsx` 必须包含 `<html>` 和 `<body>` 标签 | |
| 3 | 如果一个文件夹中只有 `layout.tsx` 而没有 `page.tsx`，该路由仍然可以被访问 | |
| 4 | `loading.tsx` 文件必须使用 `'use client'` 指令才能正常工作 | |
| 5 | `error.tsx` 文件必须使用 `'use client'` 指令 | |
| 6 | 在 `tsconfig.json` 中配置了 `"paths": {"@/*": ["./src/*"]}`，可以使用 `@/components/Button` 代替 `../../../components/Button` | |
| 7 | `public` 目录中的文件应该使用 `/public/image.png` 路径访问 | |
| 8 | `next.config.js` 中的 `reactStrictMode: true` 会在生产环境中影响性能 | |
| 9 | `layout.tsx` 在路由切换时会保持状态不重新渲染，而 `template.tsx` 每次路由切换都会重新挂载 | |
| 10 | 可以在项目中同时存在多个根布局（Root Layout） | |
| 11 | Next.js 的 `create-next-app` 脚手架会自动集成 TypeScript、ESLint 和 Tailwind CSS | |
| 12 | `globals.css` 中的 `@tailwind base;` 指令必须在 `@tailwind components;` 之前 | |
| 13 | 嵌套布局中，子布局会渲染在父布局的 `children` 位置 | |
| 14 | `not-found.tsx` 文件可以自动处理 404 错误，无需手动抛出错误 | |
| 15 | 在 `next.config.js` 中配置 `images.domains` 是为了允许 `next/image` 组件加载外部图片 | |

---

## 提交说明

完成后，请在"你的答案"列中填写"对"或"错"（或者使用 ✓ / ✗），然后告诉我你已完成，我会为你批改并讲解。

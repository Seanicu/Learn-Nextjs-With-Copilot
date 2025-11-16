/**
 * 编程题 4: 配置文件理解与应用
 * 
 * 任务：根据以下需求，编写正确的 next.config.js 配置
 * 
 * 需求：
 * 1. 启用 React 严格模式
 * 2. 允许从 'images.unsplash.com' 和 'cdn.example.com' 加载图片
 * 3. 配置图片支持 webp 和 avif 格式
 * 4. 添加一个重定向：将 '/old-blog' 永久重定向到 '/blog'
 * 5. 添加一个临时重定向：将 '/temp' 重定向到 '/home'
 * 6. 设置环境变量 API_URL 为 'https://api.example.com'
 * 
 * 说明：这是一个配置文件示例，不需要运行，但要理解每个配置项的作用
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: 在这里编写配置
  // 1. reactStrictMode
  
  // 2. images 配置
  
  // 3. redirects 函数
  
  // 4. env 环境变量
  
}

module.exports = nextConfig

// 完成后，请在下方注释中回答以下问题：
// 
// Q1: reactStrictMode 在生产环境中会影响性能吗？为什么？
// A1: 
//
// Q2: 如果不在 images.domains 中配置域名，直接使用外部图片会怎样？
// A2: 
//
// Q3: permanent: true 和 permanent: false 的重定向有什么区别？
// A3: 

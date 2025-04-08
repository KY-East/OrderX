import createMiddleware from 'next-intl/middleware';

// 只支持英文
export default createMiddleware({
  // 支持的语言列表
  locales: ['en', 'zh'],
  
  // 默认语言
  defaultLocale: 'en',
  
  // 启用语言检测
  localeDetection: true,
  
  // 始终显示语言前缀
  localePrefix: 'always'
});

export const config = {
  // 匹配所有路径，除了 /api, /_next, 和静态文件
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 
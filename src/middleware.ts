import createMiddleware from 'next-intl/middleware';

// 只支持英文
export default createMiddleware({
  // 支持的语言列表 - 只有英文
  locales: ['en'],
  
  // 默认语言
  defaultLocale: 'en',
  
  // 禁用语言检测，始终使用英文
  localeDetection: false,
  
  // 防止无限循环
  localePrefix: 'always'
});

export const config = {
  // 匹配所有路径，除了 /api, /_next, 和静态文件
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 
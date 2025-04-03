import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const isProd = process.env.NODE_ENV === 'production';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder-image.com'],
    unoptimized: isGithubPages, // 为GitHub Pages禁用图片优化
  },
  // 为GitHub Pages添加basePath和assetPrefix
  basePath: isGithubPages ? '/OrderX' : '',
  assetPrefix: isGithubPages ? '/OrderX/' : '',
  // 支持静态导出
  output: isGithubPages ? 'export' : undefined,
  // 禁用i18n路由以支持静态导出
  trailingSlash: isGithubPages,
};

export default withNextIntl(nextConfig); 
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// 支持的语言列表
export const locales = ['en', 'zh'] as const;

export default getRequestConfig(async ({locale}) => {
  // 验证locale是否在支持的列表中
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await import(`./messages/${locale}.json`)
    ).default
  };
}); 
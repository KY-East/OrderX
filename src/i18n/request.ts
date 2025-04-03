import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// 只支持英文
export const locales = ['en'] as const;

export default getRequestConfig(async ({locale}) => {
  // 验证locale是否在支持的列表中
  if (locale !== 'en') {
    return {
      locale: 'en',
      timeZone: 'Asia/Shanghai',
      messages: (
        await import(`../messages/en.json`)
      ).default
    };
  }

  return {
    locale,
    timeZone: 'Asia/Shanghai',
    messages: (
      await import(`../messages/${locale}.json`)
    ).default
  };
}); 
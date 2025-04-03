import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';
import MainNavigation from '@/components/navigation/MainNavigation';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <MainNavigation locale={locale} />
      <main style={{ paddingTop: '70px' }}>
        {children}
      </main>
    </NextIntlClientProvider>
  );
} 
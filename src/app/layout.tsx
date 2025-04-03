import '@/styles/globals.scss';
import { NextIntlClientProvider } from 'next-intl';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { locales } from '@/i18n/request';
import { ReactNode } from 'react';

// 字体配置
const spacegrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsmono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata = {
  title: 'Order X Protocol',
  description: 'Redefining Participation for the Future of Mobility',
};

// 生成动态元数据
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${spacegrotesk.variable} ${inter.variable} ${jetbrainsmono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
} 
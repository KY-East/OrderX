'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './page.module.scss';
import PageNavigation from '@/components/navigation/PageNavigation';
import { useParams } from 'next/navigation';

// 动态导入密码保护组件
const PasswordProtection = dynamic(
  () => import('@/components/auth/PasswordProtection'),
  { ssr: false }
);

export default function HomePage() {
  const [authenticated, setAuthenticated] = useState(false);
  const t = useTranslations('home');
  const params = useParams();
  const locale = params.locale as string;

  // 检查是否已经通过验证
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('orderx-authenticated') === 'true';
    if (isAuthenticated) {
      setAuthenticated(true);
    }
  }, []);

  // 简单的认证处理函数
  const handleAuthenticated = () => {
    setAuthenticated(true);
  };

  // 定义下一页导航
  const nextPage = {
    key: 'overview',
    href: `/${locale}/content/overview`,
    label: t('startExploring')
  };

  return (
    <div className={styles.homepage}>
      {/* 未认证时显示密码保护 */}
      {!authenticated && (
        <PasswordProtection onAuthenticated={handleAuthenticated} />
      )}

      {/* 认证后显示首页内容 */}
      {authenticated && (
        <>
          <div className={styles.hero}>
            <motion.div 
              className={styles.content}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className={`${styles.title} gradient-text`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {t('title')}
              </motion.h1>
              
              <motion.h2 
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {t('subtitle')}
              </motion.h2>
              
              <motion.div 
                className={styles.quote}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <blockquote>
                  {t('quote')}
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
          
          {/* 添加页面导航 */}
          <PageNavigation locale={locale} nextPage={nextPage} />
        </>
      )}
    </div>
  );
} 
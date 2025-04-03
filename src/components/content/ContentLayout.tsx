'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PageNavigation } from '@/components';
import styles from './ContentLayout.module.scss';

interface ContentLayoutProps {
  locale: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  nextPage?: {
    key: string;
    href: string;
    label: string;
  };
}

/**
 * 内容页面通用布局组件
 * 提供标题、副标题和内容区域的统一样式和动画
 */
const ContentLayout: React.FC<ContentLayoutProps> = ({ 
  locale, 
  title, 
  subtitle, 
  children,
  nextPage
}) => {
  return (
    <div className={styles.contentPage}>
      <header className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
      </header>
      
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
      
      <PageNavigation 
        locale={locale} 
        nextPage={nextPage} 
      />
    </div>
  );
};

export default ContentLayout; 
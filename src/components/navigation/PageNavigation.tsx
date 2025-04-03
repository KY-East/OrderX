'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './PageNavigation.module.scss';

interface PageNavigationProps {
  locale: string;
  nextPage?: {
    key: string;
    href: string;
    label: string;
  };
}

/**
 * 页面导航组件，显示在页面右下角
 * 提供下一页导航功能
 */
const PageNavigation: React.FC<PageNavigationProps> = ({ locale, nextPage }) => {
  // 如果没有下一页，不渲染
  if (!nextPage) return null;

  return (
    <motion.div 
      className={styles.pageNav}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <Link href={nextPage.href} className={styles.nextPage}>
        <span className={styles.label}>{nextPage.label}</span>
        <span className={styles.icon}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
};

export default PageNavigation; 
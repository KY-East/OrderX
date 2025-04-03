'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContentSection.module.scss';

interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * 内容分段组件
 * 用于将内容页面分割为多个独立区域，每个区域有自己的标题和内容
 * 支持动画和自定义样式
 */
const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  children, 
  delay = 0,
  className = ''
}) => {
  return (
    <motion.section 
      className={`${styles.section} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + delay }}
    >
      {title && (
        <h2 className={styles.sectionTitle}>{title}</h2>
      )}
      <div className={styles.sectionContent}>
        {children}
      </div>
    </motion.section>
  );
};

export default ContentSection; 
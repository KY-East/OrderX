'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './LanguageSwitch.module.css';

export default function LanguageSwitch() {
  const router = useRouter();

  const toggleLanguage = () => {
    const currentPath = window.location.pathname;
    const isZh = currentPath.includes('/zh/');
    router.push(isZh ? '/en/resume' : '/zh/resume');
  };

  const currentPath = window.location.pathname;
  
  return (
    <button onClick={toggleLanguage} className={styles.switch}>
      {currentPath.includes('/zh/') ? 'English' : '中文'}
    </button>
  );
} 
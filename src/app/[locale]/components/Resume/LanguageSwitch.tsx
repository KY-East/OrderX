import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './LanguageSwitch.module.css';

export function LanguageSwitch() {
  const router = useRouter();

  const toggleLanguage = () => {
    const currentPath = window.location.pathname;
    const newLocale = currentPath.includes('/zh') ? 'en' : 'zh';
    router.push(currentPath.replace(/(\/[a-z]{2})?(\/.*)/, `/${newLocale}$2`));
  };

  return (
    <button onClick={toggleLanguage} className={styles.switch}>
      {window.location.pathname.includes('/zh') ? 'EN' : '中文'}
    </button>
  );
} 
import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations('Resume');

  return (
    <header className={styles.header}>
      <div className={styles.profileContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/profile.jpg"
            alt="Yang Tianhuan"
            width={200}
            height={200}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.name}>Yang Tianhuan (KY.East)</h1>
          <h2 className={styles.subtitle}>
            {t('founder')} · {t('storyteller')} · {t('ecosystemArchitect')}
          </h2>
          <p className={styles.quote}>{t('quote')}</p>
        </div>
      </div>
    </header>
  );
} 
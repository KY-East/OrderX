import React from 'react';
import styles from './CareerSection.module.css';
import { useTranslations } from 'next-intl';

export function CareerSection() {
  const t = useTranslations('Resume.career');

  const careers = [
    {
      id: 'web3',
      period: t('web3.period'),
      title: t('web3.title'),
    },
    {
      id: 'crypto',
      period: t('crypto.period'),
      title: t('crypto.title'),
    },
    {
      id: 'viralGrowth',
      period: t('viralGrowth.period'),
      title: t('viralGrowth.title'),
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.timeline}>
        {careers.map((career) => (
          <div key={career.id} className={styles.timelineItem}>
            <div className={styles.period}>{career.period}</div>
            <div className={styles.content}>
              <h3 className={styles.careerTitle}>{career.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
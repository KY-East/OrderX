import React from 'react';
import styles from './MediaCoverage.module.css';
import { useTranslations } from 'next-intl';

export function MediaCoverage() {
  const t = useTranslations('Resume.media');

  const mediaItems = [
    {
      id: 'tsinghua',
      source: '清华大学美术学院',
      quote: '赛博朋克在他看来从来不是一个科学幻想，而是一种近未来的设定。人类现在已经把自己有限的生命用来搭建和宇宙一样无限的虚拟世界。',
      link: 'https://www.ad.tsinghua.edu.cn/info/1206/25598.htm'
    },
    {
      id: 'cgtn',
      source: 'CGTN / CCTV 9',
      quote: 'NFT technology opens their mind and sets them free, so they can make what they want, not only products.',
      link: 'https://news.cgtn.com'
    },
    {
      id: 'nju',
      source: '南京大学',
      quote: '创业是这个时代的背景音。希望通过自己的故事告诉年轻创业者，"散伙"才是创业的常态。',
      link: 'https://www.nju.edu.cn'
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.grid}>
        {mediaItems.map((item) => (
          <a 
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.source}>{item.source}</div>
            <blockquote className={styles.quote}>{item.quote}</blockquote>
          </a>
        ))}
      </div>
    </section>
  );
} 
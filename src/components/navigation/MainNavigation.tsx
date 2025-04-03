'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MainNavigation.module.scss';

interface MainNavigationProps {
  locale: string;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ locale }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');

  // 监听滚动事件以改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 防止菜单打开时页面滚动
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // 导航项定义
  const navItems = [
    { key: 'overview', href: `/${locale}` },
    { key: 'background', href: `/${locale}/content/background` },
    { key: 'architecture', href: `/${locale}/content/architecture` },
    { key: 'userJourney', href: `/${locale}/content/user-journey` },
    { key: 'technical', href: `/${locale}/content/technical` },
    { key: 'expansion', href: `/${locale}/content/expansion` },
    { key: 'launch', href: `/${locale}/content/launch` },
  ];

  return (
    <>
      <header 
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      >
        <div className={`${styles.container} container`}>
          <Link href={`/${locale}`} className={styles.logo}>
            <span className="gradient-text">Order X</span>
          </Link>

          <nav className={`${styles.desktopNav}`}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.key} className={styles.navItem}>
                  <Link 
                    href={item.href} 
                    className={`${styles.navLink} ${
                      (pathname === item.href || 
                       (item.key === 'overview' && pathname === `/${locale}`)) ? 
                        styles.active : ''
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.rightSection}>
            <button 
              className={styles.menuButton} 
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 6H20M4 12H20M4 18H20" />
              </svg>
            </button>
          </div>

          <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.key} className={styles.navItem}>
                  <Link 
                    href={item.href} 
                    className={`${styles.navLink} ${
                      (pathname === item.href || 
                       (item.key === 'overview' && pathname === `/${locale}`)) ? 
                        styles.active : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNavigation; 
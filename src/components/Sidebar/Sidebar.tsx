import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FiHome, FiLayers, FiActivity, FiUser, FiCode, FiArrowUpRight, FiCalendar } from 'react-icons/fi';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const pathname = usePathname();
  const t = useTranslations('nav');

  const isActive = (path: string) => {
    return pathname?.includes(path);
  };

  const sidebarItems = [
    { 
      name: t('overview'), 
      path: '/content/overview',
      icon: <FiHome />
    },
    { 
      name: t('background'), 
      path: '/content/background',
      icon: <FiLayers />
    },
    { 
      name: t('architecture'), 
      path: '/content/architecture',
      icon: <FiActivity />
    },
    { 
      name: t('userJourney'), 
      path: '/content/user-journey',
      icon: <FiUser />
    },
    { 
      name: t('technical'), 
      path: '/content/technical',
      icon: <FiCode />
    },
    { 
      name: t('expansion'), 
      path: '/content/expansion',
      icon: <FiArrowUpRight />
    },
    { 
      name: t('launch'), 
      path: '/content/launch',
      icon: <FiCalendar />
    }
  ];

  return (
    <motion.div 
      className={styles.sidebar}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul className={styles.sidebarItems}>
        {sidebarItems.map((item, index) => (
          <motion.li 
            key={index}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={item.path} passHref>
              <div className={`${styles.sidebarItem} ${isActive(item.path) ? styles.active : ''}`}>
                <div className={styles.icon}>{item.icon}</div>
                <span>{item.name}</span>
                {isActive(item.path) && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                  />
                )}
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar; 
import React from 'react';
import styles from './ContentHeader.module.scss';

interface ContentHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ 
  title, 
  subtitle, 
  className = '' 
}) => {
  return (
    <div className={`${styles.contentHeader} ${className}`}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default ContentHeader; 
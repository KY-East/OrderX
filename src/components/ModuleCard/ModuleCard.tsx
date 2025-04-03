import React from 'react';
import { motion } from 'framer-motion';
import styles from './ModuleCard.module.scss';

interface ModuleCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon,
  className = '',
  onClick,
  children,
}) => {
  return (
    <motion.div 
      className={`${styles.moduleCard} ${className}`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 8px 30px rgba(0, 163, 255, 0.15)'
      }}
      onClick={onClick}
    >
      <div className={styles.cardHeader}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <h3 className={styles.title}>{title}</h3>
      </div>
      
      {description && (
        <p className={styles.description}>{description}</p>
      )}
      
      {children && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </motion.div>
  );
};

export default ModuleCard; 
'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import styles from './PasswordProtection.module.scss';

// 动态导入Three.js组件，避免服务端渲染问题
const ParticleBackground = dynamic(
  () => import('@/components/animations/ParticleBackground'),
  { ssr: false }
);

interface PasswordProtectionProps {
  onAuthenticated: () => void;
}

// 使用简单的哈希函数处理密码，避免明文存储
const hashPassword = (password: string): string => {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 转换为32位整数
  }
  return hash.toString();
};

// 预先计算的密码哈希值 ("FFAI1054"的哈希值)
const CORRECT_PASSWORD_HASH = "1368206822"; 

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = useTranslations('auth');

  // 检查是否已经通过验证
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('orderx-authenticated') === 'true';
    if (isAuthenticated) {
      setAuthenticated(true);
      onAuthenticated();
    } else {
      // 自动聚焦输入框
      inputRef.current?.focus();
    }
  }, [onAuthenticated]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (hashPassword(password) === CORRECT_PASSWORD_HASH) {
      setError(false);
      setAuthenticated(true);
      localStorage.setItem('orderx-authenticated', 'true');
      onAuthenticated();
    } else {
      setError(true);
      setPassword('');
      // 聚焦输入框便于重新输入
      inputRef.current?.focus();
    }
  };

  if (authenticated) return null;

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.background}>
        <ParticleBackground />
      </div>
      
      <motion.div 
        className={styles.content}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className={`${styles.title} gradient-text`}>Order X</h1>
        <p className={styles.subtitle}>{t('passwordPrompt')}</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              ref={inputRef}
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              placeholder="********"
              aria-label={t('passwordPrompt')}
            />
            {error && (
              <motion.p 
                className={styles.error}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {t('incorrect')}
              </motion.p>
            )}
          </div>
          
          <motion.button 
            type="submit"
            className={styles.button}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('submit')}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PasswordProtection; 
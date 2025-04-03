import React from 'react';
import { motion } from 'framer-motion';

interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  delay = 0.2,
  duration = 0.5,
  className = '',
}) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv; 
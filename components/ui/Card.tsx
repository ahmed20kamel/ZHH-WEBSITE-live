import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { 
        y: -4, 
        transition: { 
          duration: 0.3, 
          ease: 'easeOut'
        } 
      } : {}}
      className={`bg-white overflow-hidden transition-all duration-300 ${hover ? 'hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]' : ''} ${className}`}
      style={{ borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
    >
      {children}
    </motion.div>
  );
}


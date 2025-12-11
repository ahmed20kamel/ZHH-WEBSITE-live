import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export default function Card({ children, className = '', hover = true, style }: CardProps) {
  const defaultStyle: CSSProperties = {
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    ...style
  };

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
      style={defaultStyle}
    >
      {children}
    </motion.div>
  );
}


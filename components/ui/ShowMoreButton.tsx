'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ShowMoreButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const premiumColors = {
  darkBlue: '#0A3D62',
  lightGray: '#F6F7F9',
  borderGray: '#E5E7EB',
};

export default function ShowMoreButton({ 
  isExpanded, 
  onClick, 
  className = '',
  size = 'md'
}: ShowMoreButtonProps) {
  const sizeStyles = {
    sm: {
      padding: 'clamp(8px, 1vw, 10px) clamp(14px, 1.8vw, 18px)',
      fontSize: 'clamp(12px, 1.2vw, 14px)',
      iconSize: 'w-3.5 h-3.5 md:w-4 md:h-4',
    },
    md: {
      padding: 'clamp(10px, 1.3vw, 14px) clamp(17px, 2.1vw, 20px)',
      fontSize: 'clamp(14px, 1.5vw, 16px)',
      iconSize: 'w-4 h-4 md:w-5 md:h-5',
    },
    lg: {
      padding: 'clamp(12px, 1.5vw, 16px) clamp(20px, 2.5vw, 24px)',
      fontSize: 'clamp(15px, 1.7vw, 17px)',
      iconSize: 'w-4 h-4 md:w-5 md:h-5',
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <motion.button
        onClick={onClick}
        className="flex items-center gap-2.5 rounded-xl font-semibold transition-all"
        style={{
          padding: currentSize.padding,
          backgroundColor: isExpanded ? premiumColors.darkBlue : premiumColors.lightGray,
          border: `1.5px solid ${isExpanded ? premiumColors.darkBlue : premiumColors.borderGray}`,
          color: isExpanded ? 'white' : premiumColors.darkBlue,
          fontSize: currentSize.fontSize,
          boxShadow: isExpanded 
            ? '0 4px 12px rgba(10, 61, 98, 0.2)'
            : '0 2px 6px rgba(0, 0, 0, 0.06)'
        }}
        whileHover={{ 
          scale: 1.05,
          backgroundColor: premiumColors.darkBlue,
          color: 'white',
          borderColor: premiumColors.darkBlue,
          boxShadow: '0 6px 16px rgba(10, 61, 98, 0.25)'
        }}
        whileTap={{ scale: 0.98 }}
      >
        <span>
          {isExpanded ? 'Show less' : 'Show more'}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={currentSize.iconSize} />
        </motion.div>
      </motion.button>
    </div>
  );
}


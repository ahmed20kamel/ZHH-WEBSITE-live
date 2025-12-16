'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode, CSSProperties } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  style?: CSSProperties;
}

/**
 * Unified Button System
 * All buttons follow the same design system:
 * - Same height, radius, font weight, padding, hover behavior
 * - Three variants: Primary, Secondary, Ghost
 * - No custom styles per section allowed
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
  style,
}: ButtonProps) {
  // Unified base styles - same for all buttons
  const baseStyles = 'font-semibold transition-all duration-300 ease-in-out rounded-lg inline-flex items-center justify-center';
  
  // Unified size system - same height, padding, font size
  const sizeStyles = {
    sm: 'px-6 py-2.5 text-sm h-10',
    md: 'px-8 py-3 text-base h-12',
    lg: 'px-10 py-3.5 text-base h-14',
  };

  // Unified variant system
  const variantStyles = {
    primary: 'bg-[#00d4aa] text-white hover:bg-[#00b896] hover:shadow-[0_4px_12px_rgba(0,212,170,0.3)]',
    secondary: 'border-2 border-[#00d4aa] bg-transparent text-[#00d4aa] hover:bg-[#00d4aa] hover:text-white',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`inline-block ${buttonClasses}`}
          style={style}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      style={style}
    >
      {children}
    </motion.button>
  );
}


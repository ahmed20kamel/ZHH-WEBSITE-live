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
  // Using !important to ensure Tailwind classes override any global CSS
  const baseStyles = '!font-semibold !transition-all !duration-300 !ease-in-out !rounded-lg !inline-flex !items-center !justify-center';
  
  // Unified size system - improved padding and spacing for better UI
  const sizeStyles = {
    sm: '!px-7 !py-3.5 !text-sm !min-h-[44px]',
    md: '!px-10 !py-4 !text-base !min-h-[50px]',
    lg: '!px-12 !py-5 !text-base !min-h-[56px]',
  };

  // Unified variant system - professional design with proper spacing and borders
  const variantStyles = {
    primary: '!bg-[#01B2B2] !text-white hover:!bg-[#009999] hover:!shadow-[0_8px_24px_rgba(1,178,178,0.4)] active:!bg-[#008888] !border-0',
    secondary: '!border-2 !border-[#01B2B2] !bg-white !text-[#01B2B2] hover:!bg-[#01B2B2] hover:!text-white hover:!shadow-[0_6px_16px_rgba(1,178,178,0.3)] active:!bg-[#009999] active:!border-[#009999]',
    ghost: '!bg-transparent !text-gray-700 hover:!bg-gray-50 !border-2 !border-gray-200 hover:!border-gray-300 active:!bg-gray-100',
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


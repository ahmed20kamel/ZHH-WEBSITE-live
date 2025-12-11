import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-all duration-300 ease-in-out rounded inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[#0070ba] text-white hover:bg-[#005a94] hover:shadow-[0_4px_12px_rgba(0,112,186,0.3)]',
    secondary: 'border-2 border-[#0070ba] bg-transparent text-[#0070ba] hover:bg-[#0070ba] hover:text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#0070ba]',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-7 py-3 text-base',
  };

  // Mubadala button styles: padding 12px 32px, border-radius 4px
  const buttonClasses = size === 'lg'
    ? `${baseStyles} ${variants[variant]} px-8 py-3 text-base rounded ${className}`
    : variant === 'primary'
    ? `${baseStyles} ${variants[variant]} px-8 py-3 text-base rounded ${className}`
    : `${baseStyles} ${variants[variant]} px-8 py-2.5 text-base rounded ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`inline-block ${buttonClasses}`}
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
    >
      {children}
    </motion.button>
  );
}


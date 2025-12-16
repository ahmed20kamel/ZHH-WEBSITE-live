'use client';

import { ReactNode } from 'react';

interface CardBodyProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
}

/**
 * CardBody - Internal content wrapper for Cards
 * Ensures content doesn't span full width and maintains proper spacing
 * Enforces unified Vertical Rhythm inside cards
 */
export default function CardBody({ 
  children, 
  className = '',
  maxWidth = 'max-w-none'
}: CardBodyProps) {
  return (
    <div 
      className={`${maxWidth} flex flex-col ${className}`}
      style={{
        gap: 'var(--rhythm-card-internal)',
      }}
    >
      {children}
    </div>
  );
}


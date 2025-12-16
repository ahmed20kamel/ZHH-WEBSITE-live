'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input - shadcn/ui style input adapted to ZHH design system
 * Used as the single source of truth for all text inputs.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          'w-full h-12 px-4 border border-gray-300/80 rounded-lg bg-white text-gray-900 placeholder-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-[#00d4aa33] focus:border-[#00d4aa80]',
          'transition-all disabled:cursor-not-allowed disabled:opacity-60 text-sm md:text-[15px]',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };



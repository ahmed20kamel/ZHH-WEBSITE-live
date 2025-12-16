'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * Textarea - shadcn/ui style textarea adapted to ZHH design system
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full px-4 py-3 border border-gray-300/80 rounded-lg bg-white text-gray-900 placeholder-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-[#00d4aa33] focus:border-[#00d4aa80]',
          'transition-all disabled:cursor-not-allowed disabled:opacity-60 leading-relaxed text-sm md:text-[15px] resize-none',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };



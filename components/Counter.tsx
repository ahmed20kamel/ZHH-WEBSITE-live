'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CounterProps {
  value: string;
  duration?: number;
}

export default function Counter({ value, duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Extract numeric value from string (handles "100M+", "12B+", "1.2 Tons", etc.)
  const extractNumber = (val: string): number => {
    // Remove all non-numeric characters except decimal point
    const match = val.match(/^([\d.]+)/);
    if (!match) return 0;
    return parseFloat(match[1]) || 0;
  };

  const number = extractNumber(value);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, number, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [springValue]);

  // Format number back to display format
  const formatValue = (num: number, originalValue: string): string => {
    // Check if original had decimal
    const hasDecimal = originalValue.includes('.');
    
    // Check for suffixes
    if (originalValue.includes('B+') || originalValue.includes('B')) {
      return num.toFixed(1).replace(/\.0$/, '') + 'B+';
    }
    if (originalValue.includes('M+') || originalValue.includes('M')) {
      return num.toFixed(1).replace(/\.0$/, '') + 'M+';
    }
    if (originalValue.includes('K+') || originalValue.includes('K')) {
      return num.toFixed(1).replace(/\.0$/, '') + 'K+';
    }
    if (originalValue.includes('Tons') || originalValue.includes('Tons')) {
      return num.toFixed(1) + ' Tons';
    }
    if (hasDecimal) {
      return num.toFixed(1);
    }
    
    // For values with + suffix (like "70+", "300+", "180+", "10+")
    if (originalValue.includes('+')) {
      return Math.floor(num).toString() + '+';
    }
    
    // For plain numbers (like "24")
    return Math.floor(num).toString();
  };

  return (
    <span ref={ref}>
      {formatValue(displayValue, value)}
    </span>
  );
}

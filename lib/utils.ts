'use client';

/**
 * Minimal utility, inspired by shadcn/ui `cn`
 * Safely merges conditional className strings.
 */
export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ');
}



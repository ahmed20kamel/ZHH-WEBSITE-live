'use client';

import React, { ReactNode } from 'react';

interface BulletListProps {
  items: Array<ReactNode | { title: ReactNode; description?: ReactNode }>;
  bulletColor?: string;
  className?: string;
  maxWidth?: string;
  titleGap?: 'sm' | 'md' | 'lg';
}

/**
 * BulletList - SINGLE SOURCE OF TRUTH for all bullet-based content
 * Fully controls: bullet size, spacing, left padding, typography
 * Supports both simple items and title/description pairs
 * 
 * ❌ Do not use BulletListItem.tsx directly
 * ❌ No custom <ul><li> implementations
 * ❌ No inline spacing, margins, or list styling in pages
 */
export default function BulletList({
  items,
  bulletColor = '#00d4aa',
  className = '',
  maxWidth = 'max-w-none',
  titleGap = 'md',
}: BulletListProps) {
  const titleGapClass = {
    sm: 'mt-3',
    md: 'mt-6',
    lg: 'mt-8',
  }[titleGap];

  // Internal BulletListItem component (not exported)
  const BulletListItem = ({
    title,
    description,
    content,
    bulletColor: color,
  }: {
    title?: ReactNode;
    description?: ReactNode;
    content?: ReactNode;
    bulletColor: string;
  }) => {
    // If content is provided, use it directly
    if (content) {
      return (
        <li className="flex items-baseline gap-4">
          <div
            className="flex-shrink-0 rounded-full"
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: color,
              boxShadow: `0 0 4px ${color}30`,
              marginTop: '0.35em', // Aligns with first line baseline
            }}
          />
          <div className="flex-1 text-gray-700 leading-[1.7] text-[15px]">
            {content}
          </div>
        </li>
      );
    }

    // If title + description, use hierarchical structure
    if (title && description) {
      return (
        <li className="flex items-baseline gap-4">
          <div
            className="flex-shrink-0 rounded-full"
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: color,
              boxShadow: `0 0 4px ${color}30`,
              marginTop: '0.35em', // Aligns with first line baseline
            }}
          />
          <div className="flex-1">
            <div className="font-semibold text-[#1a2332] mb-1.5 text-[15px] leading-[1.5]">
              {title}
            </div>
            <div className="text-gray-600 text-sm leading-[1.7]">
              {description}
            </div>
          </div>
        </li>
      );
    }

    // Single line item (title only)
    return (
      <li className="flex items-baseline gap-4">
        <div
          className="flex-shrink-0 rounded-full"
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: color,
            boxShadow: `0 0 4px ${color}30`,
            marginTop: '0.35em', // Aligns with first line baseline
          }}
        />
        <div className="flex-1 text-gray-700 leading-[1.7] text-[15px]">
          {title}
        </div>
      </li>
    );
  };

  return (
    <div className={`${maxWidth} ${titleGapClass} ${className}`}>
      <ul className="space-y-4 pl-6 pr-2" style={{ lineHeight: '1.7' }}>
        {items.map((item, index) => {
          // Check if item is an object with title/description
          if (typeof item === 'object' && item !== null && 'title' in item) {
            return (
              <BulletListItem
                key={index}
                title={item.title}
                description={item.description}
                bulletColor={bulletColor}
              />
            );
          }
          // Otherwise treat as simple content
          return (
            <BulletListItem
              key={index}
              content={item}
              bulletColor={bulletColor}
            />
          );
        })}
      </ul>
    </div>
  );
}



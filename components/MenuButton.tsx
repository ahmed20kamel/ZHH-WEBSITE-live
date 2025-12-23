'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function MenuButton() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    
    // Listen for menu open/close events from Header
    const handleMenuState = (e: CustomEvent) => {
      setIsMenuOpen(e.detail.isOpen);
    };
    
    window.addEventListener('menuStateChange' as any, handleMenuState);
    
    return () => {
      window.removeEventListener('menuStateChange' as any, handleMenuState);
    };
  }, []);

  // Show button only at the very top of the first section (no scroll)
  useEffect(() => {
    if (!isMounted) return;

    const checkScrollPosition = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Show button only when at the very top (scrollY = 0)
      // Hide button as soon as user scrolls even a little bit
      setIsInHeroSection(scrollY === 0 || scrollY < 10); // Show only if at top or scrolled less than 10px
    };

    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [isMounted]);

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('openMenu'));
  };

  if (!isMounted) return null;
  if (isMenuOpen) return null;
  if (!isInHeroSection) return null; // Hide button when scrolled past hero section

  const button = (
    <button
      onClick={handleClick}
      className="fixed-menu-button"
      aria-label="Toggle menu"
    >
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        style={{ 
          width: '36px', 
          height: '36px',
          display: 'block'
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h18M3.75 12h18"
        />
      </svg>
    </button>
  );

  // Portal directly to html element - this ensures it's outside any container
  return isMounted ? createPortal(button, document.documentElement) : null;
}


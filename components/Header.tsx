'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import MegaMenu from './MegaMenu';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  
  // Determine navbar style based on page and scroll position
  const [navbarStyle, setNavbarStyle] = useState<'transparent' | 'solid'>('transparent');

  // Check if we're on the home page
  const isHomePage = pathname === '/';

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setIsMegaMenuOpen(false);
  }, [pathname]);

  // Check navbar style based on hero section and scroll
  useEffect(() => {
    const checkNavbarStyle = () => {
      const heroSection = document.getElementById('hero-section');
      const hasHero = !!heroSection;
      
      if (hasHero) {
        // Transparent when at top, solid when scrolled
        setNavbarStyle(window.scrollY < 100 ? 'transparent' : 'solid');
      } else {
        // Solid for pages without hero
        setNavbarStyle('solid');
      }
    };
    
    checkNavbarStyle();
    window.addEventListener('scroll', checkNavbarStyle);
    window.addEventListener('resize', checkNavbarStyle);
    return () => {
      window.removeEventListener('scroll', checkNavbarStyle);
      window.removeEventListener('resize', checkNavbarStyle);
    };
  }, [pathname]);

  // Close mega menu when clicking outside
  useEffect(() => {
    if (isMegaMenuOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.mega-menu-trigger') && !target.closest('.mega-menu-content')) {
          setIsMegaMenuOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMegaMenuOpen]);

  const navLinks = [
    { 
      name: 'WHO WE ARE', 
      href: '/about',
      submenu: [
        { name: 'About ZHH Group Holding', href: '/about-zhh-group-holding' },
        { name: 'A Journey of Excellence', href: '/about#journey' },
        { name: 'Board of Directors', href: '/about#board' },
        { name: 'Our Structure', href: '/about#structure' },
      ]
    },
    { 
      name: 'OUR PORTFOLIO', 
      href: '/divisions',
      submenu: [
        { name: 'ZHH Construction LLC', href: '/divisions/construction' },
        { name: 'ZHH General Trading LLC', href: '/divisions/trading' },
        { name: 'ZHH Real Estate LLC', href: '/divisions/real-estate' },
        { name: 'Jewelust Jewelry & Gold Bullion Trading LLC', href: '/divisions/jewelust' },
      ]
    },
    { 
      name: 'OUR IMPACT', 
      href: '/impact',
      submenu: [
        { name: 'Our Impact', href: '/impact' },
      ]
    },
    { 
      name: 'INVESTORS', 
      href: '/investors',
      submenu: [
        { name: 'For Investors', href: '/investors' },
      ]
    },
  ];

  const isSolid = navbarStyle === 'solid';
  const textColor = isSolid ? 'var(--color-primary-dark)' : 'var(--color-text-white)';
  const iconColor = isSolid ? 'var(--color-primary-dark)' : 'var(--color-text-white)';

  return (
    <>
      {/* Floating Menu Button for Home Page - Clean and Light (Mubadala Style) */}
      {isHomePage && !isMobileMenuOpen && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMobileMenuOpen(true)}
          className="fixed top-6 right-6 z-[9998] flex items-center justify-center transition-opacity duration-300 hover:opacity-80"
          style={{
            width: 'auto',
            height: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: 'white'
          }}
          aria-label="Toggle menu"
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            style={{ 
              width: '28px', 
              height: '28px',
              display: 'block'
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h18M3.75 12h18"
            />
          </svg>
        </motion.button>
      )}

      <header
        className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300"
        style={{ 
          height: '80px',
          background: isSolid ? 'var(--color-bg-white)' : 'transparent',
          boxShadow: isSolid ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          backdropFilter: isSolid ? 'blur(10px)' : 'none',
          display: isMobileMenuOpen ? 'none' : (isHomePage ? 'none' : 'block'),
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <nav className="w-full h-full" style={{ width: '100%', maxWidth: '100%' }}>
          <div className="flex items-center justify-between h-full w-full mx-auto" style={{ 
            position: 'relative',
            maxWidth: '100%',
            width: '100%',
            paddingLeft: 'clamp(16px, 3vw, 40px)',
            paddingRight: 'clamp(16px, 3vw, 40px)',
            boxSizing: 'border-box'
          }}>
            {/* Left Side - Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center flex-shrink-0"
              style={{ 
                height: '100%',
                paddingLeft: 0
              }}
            >
              <Link 
                href="/" 
                className="flex items-center"
                style={{ gap: '12px' }}
              >
                {/* Logo Icon - Original Size */}
                <div 
                  style={{ 
                    width: 'clamp(60px, 8vw, 80px)',
                    height: 'clamp(60px, 8vw, 80px)',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src="/assets/logos/zhh-group-holding-logo.svg"
                    alt="ZHH Group Holding"
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                {/* ZHH Text */}
                <div className="flex flex-col" style={{ marginLeft: '12px' }}>
                  <span 
                    className="body-regular-unified font-bold uppercase"
                    style={{
                      letterSpacing: '2px',
                      color: textColor,
                      lineHeight: 1.1,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    ZHH
                  </span>
                  <span 
                    className="body-small-unified font-medium uppercase"
                    style={{
                      letterSpacing: '0.8px',
                      color: isSolid ? 'var(--color-text-secondary)' : 'rgba(255,255,255,0.9)',
                      marginTop: '2px',
                      lineHeight: 1.1,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    GROUP HOLDING
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Center - Navigation Items (Desktop Only) */}
            <nav 
              className="hidden lg:flex items-center flex-1"
              style={{ 
                gap: 'clamp(12px, 2vw, 40px)',
                justifyContent: 'center',
                flex: '1 1 auto',
                minWidth: 0,
                paddingLeft: 'clamp(12px, 1.5vw, 32px)',
                paddingRight: 'clamp(12px, 1.5vw, 32px)'
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="mega-menu-trigger body-small-unified transition-colors duration-200 whitespace-nowrap"
                  style={{
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    color: textColor,
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onMouseEnter={() => {
                    setHoveredNavItem(link.name);
                    setIsMegaMenuOpen(true);
                  }}
                  onMouseLeave={() => {
                    // Delay to allow mouse to move to mega menu
                    setTimeout(() => {
                      const megaMenu = document.querySelector('.mega-menu-content');
                      if (!megaMenu?.matches(':hover')) {
                        setHoveredNavItem(null);
                        setIsMegaMenuOpen(false);
                      }
                    }, 150);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side - Actions */}
            <div 
              className="flex items-center ml-auto flex-shrink-0"
              style={{ 
                gap: 'clamp(8px, 1.5vw, 20px)',
                paddingRight: 0,
                marginLeft: 'auto'
              }}
            >
              {/* Language Button */}
              <button
                className="flex items-center justify-center transition-opacity hover:opacity-80 flex-shrink-0"
                style={{ 
                  width: 'clamp(32px, 4vw, 40px)',
                  height: 'clamp(32px, 4vw, 40px)',
                  color: iconColor,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.3s ease',
                  fontFamily: 'var(--font-english)',
                  fontSize: 'clamp(9px, 1.1vw, 12px)',
                  fontWeight: 600
                }}
                aria-label="Language"
              >
                EN
              </button>

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="flex items-center justify-center transition-opacity hover:opacity-80 flex-shrink-0"
                style={{ 
                  width: 'clamp(32px, 4vw, 40px)',
                  height: 'clamp(32px, 4vw, 40px)',
                  color: iconColor,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                aria-label="Search"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  style={{ 
                    width: 'clamp(18px, 2.5vw, 22px)',
                    height: 'clamp(18px, 2.5vw, 22px)'
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>

              {/* Menu Button - Clean and Light (Mubadala Style) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center transition-opacity hover:opacity-80 flex-shrink-0"
                style={{ 
                  width: 'auto',
                  height: 'auto',
                  color: iconColor,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 'clamp(6px, 1vw, 8px)',
                  transition: 'opacity 0.3s ease'
                }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    style={{ 
                      width: 'clamp(22px, 2.8vw, 26px)',
                      height: 'clamp(22px, 2.8vw, 26px)',
                      display: 'block'
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    style={{ 
                      width: 'clamp(22px, 2.8vw, 26px)',
                      height: 'clamp(22px, 2.8vw, 26px)',
                      display: 'block'
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h18M3.75 12h18"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 z-50"
              style={{ 
                padding: '20px clamp(20px, 4vw, 40px)',
                background: isSolid ? 'var(--color-bg-white)' : 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            >
              <div className="max-w-[600px] mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full"
                  style={{ 
                    backgroundColor: isSolid ? 'var(--color-bg-light)' : 'rgba(255,255,255,0.15)',
                    color: isSolid ? 'var(--color-primary-dark)' : 'var(--color-text-white)',
                    border: `1px solid ${isSolid ? 'var(--color-border-light)' : 'rgba(255,255,255,0.3)'}`,
                    borderRadius: '8px',
                    padding: '12px 16px',
                    fontSize: '16px',
                    outline: 'none',
                    fontFamily: 'var(--font-english)'
                  }}
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full-Screen Mega Menu Overlay - Using Same Layout as MegaMenu Component */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-[10000] overflow-hidden"
            onClick={(e) => {
              // Close menu when clicking backdrop (but not on content)
              if (e.target === e.currentTarget) {
                setIsMobileMenuOpen(false);
                setActiveMenu(null);
                setIsMegaMenuOpen(false);
              }
            }}
          >
            <div 
              className="relative w-full h-full"
              style={{
                maxWidth: '1440px',
                margin: '0 auto',
                paddingTop: 'clamp(51px, 6.8vw, 68px)',
                paddingLeft: 'clamp(34px, 4.3vw, 68px)',
                paddingRight: 'clamp(34px, 4.3vw, 68px)',
                paddingBottom: 'clamp(51px, 6.8vw, 68px)'
              }}
            >
              {/* Logo - Small and Simple, Top Left (Mubadala Style) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{ 
                  position: 'absolute',
                  top: 'clamp(24px, 3vw, 32px)',
                  left: 'clamp(24px, 3vw, 40px)',
                  zIndex: 10001,
                  height: 'auto'
                }}
              >
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                  style={{ textDecoration: 'none' }}
                >
                  {/* Logo Icon - Same size as Hero */}
                  <div style={{ 
                    width: 'clamp(90px, 12vw, 140px)',
                    height: 'clamp(90px, 12vw, 140px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img
                      src="/assets/logos/zhh-group-holding-logo.svg"
                      alt="ZHH Group Holding"
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                    />
                  </div>
                  {/* Text */}
                  <span 
                    className="body-regular-unified"
                    style={{
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      color: 'var(--color-primary-dark)',
                      textTransform: 'uppercase'
                    }}
                  >
                    ZHH GROUP HOLDING
                  </span>
                </Link>
              </motion.div>

              {/* Close Button - Top Right */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveMenu(null);
                  setIsMegaMenuOpen(false);
                }}
                style={{
                  position: 'absolute',
                  top: 'clamp(32px, 4vw, 40px)',
                  right: 'clamp(20px, 4vw, 40px)',
                  zIndex: 10001,
                  color: '#032D46',
                  fontFamily: '"Montserrat", sans-serif',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  width: '44px',
                  height: '44px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s ease, color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.color = 'var(--color-primary-teal)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.color = '#032D46';
                }}
                aria-label="Close menu"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  style={{ width: '32px', height: '32px' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Same Layout as MegaMenu Component - 3 Column Grid */}
              <div 
                className="grid grid-cols-1 lg:grid-cols-3"
                style={{
                  gap: 'clamp(40px, 6vw, 80px)',
                  alignItems: 'flex-start',
                  marginTop: 'clamp(100px, 12vw, 140px)'
                }}
              >
                {/* LEFT COLUMN: Main Sections */}
                <div 
                  className="flex flex-col"
                  style={{
                    gap: 'clamp(20px, 2.6vw, 34px)'
                  }}
                >
                  {navLinks.map((link, index) => {
                    const isActive = activeMenu === link.name;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        onMouseEnter={() => setActiveMenu(link.name)}
                        onMouseLeave={() => {
                          // Keep active if clicked
                          if (!activeMenu) {
                            setActiveMenu(null);
                          }
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block transition-colors duration-200"
                          style={{
                            fontFamily: '"Montserrat", sans-serif',
                            fontSize: 'clamp(27px, 3.4vw, 41px)',
                            fontWeight: 300,
                            letterSpacing: '0.5px',
                            lineHeight: 1.2,
                            color: isActive ? 'var(--color-primary-teal)' : 'var(--color-text-primary)',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--color-primary-teal)';
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.color = '#1A1A1A';
                            }
                          }}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CENTER COLUMN: Sub-pages */}
                <div 
                  className="flex flex-col"
                  style={{
                    gap: 'clamp(17px, 2.1vw, 20px)',
                    paddingTop: 'clamp(7px, 0.9vw, 10px)'
                  }}
                >
                  <AnimatePresence mode="wait">
                    {activeMenu && navLinks.find(link => link.name === activeMenu)?.submenu && (
                      <motion.div
                        key={activeMenu}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 'clamp(20px, 2.5vw, 24px)'
                        }}
                      >
                        {navLinks.find(link => link.name === activeMenu)?.submenu?.map((item, idx) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03, duration: 0.2 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block transition-colors duration-200"
                              style={{
                                fontFamily: '"Montserrat", sans-serif',
                                fontSize: 'clamp(12px, 1.3vw, 14px)',
                                fontWeight: 300,
                                letterSpacing: '0.3px',
                                lineHeight: 1.5,
                                color: 'var(--color-text-primary)',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-primary-teal)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#333333';
                              }}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* RIGHT COLUMN: Contact Us */}
                <div 
                  className="flex flex-col"
                  style={{
                    gap: 'clamp(20px, 2.6vw, 27px)',
                    paddingTop: 'clamp(7px, 0.9vw, 10px)'
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {/* Contact Title */}
                  <h3
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: 'clamp(20px, 2.6vw, 27px)',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      lineHeight: 1.2,
                      color: '#032D46',
                      marginBottom: 'clamp(17px, 2.1vw, 20px)',
                      paddingBottom: 'clamp(10px, 1.3vw, 14px)',
                      borderBottom: '2px solid #032D46',
                      textTransform: 'uppercase'
                    }}
                  >
                    Contact Us
                  </h3>

                  {/* Contact Info */}
                  <div 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 'clamp(16px, 2vw, 20px)',
                      marginBottom: 'clamp(24px, 3vw, 32px)'
                    }}
                  >
                    <a
                      href="tel:+971504044187"
                      className="transition-colors duration-200"
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 'clamp(14px, 1.5vw, 15px)',
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: '#1A1A1A',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#01B2B2'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#1A1A1A'}
                    >
                      +971 50 404 4187
                    </a>
                    <a
                      href="mailto:contact@zhhgroup.com"
                      className="transition-colors duration-200"
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 'clamp(14px, 1.5vw, 15px)',
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: '#1A1A1A',
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#01B2B2'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#1A1A1A'}
                    >
                      contact@zhhgroup.com
                    </a>
                  </div>

                  {/* Social Icons */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(14px, 1.7vw, 17px)',
                      paddingTop: 'clamp(20px, 2.6vw, 27px)',
                      borderTop: '1px solid #E4E7EA'
                    }}
                  >
                    {[
                      { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                      { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                      { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                      { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="transition-all duration-200"
                        style={{
                          color: '#666666',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-primary-teal)';
                          e.currentTarget.style.transform = 'scale(1.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#666666';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                        aria-label={social.name}
                      >
                        <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mega Menu - Shows on hover or click for any section */}
      <MegaMenu 
        isOpen={isMegaMenuOpen || hoveredNavItem !== null} 
        onClose={() => {
          setIsMegaMenuOpen(false);
          setActiveMenu(null);
          setHoveredNavItem(null);
        }}
        navLinks={navLinks}
        activeSection={hoveredNavItem || activeMenu}
        setActiveSection={(section) => {
          setActiveMenu(section);
          setIsMegaMenuOpen(!!section);
        }}
      />
    </>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface NavLink {
  name: string;
  href: string;
  submenu: { name: string; href: string }[];
}

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
}

export default function MegaMenu({ 
  isOpen, 
  onClose, 
  navLinks, 
  activeSection, 
  setActiveSection 
}: MegaMenuProps) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const contactInfo = {
    phone: '+971 50 404 4187',
    email: 'contact@zhhgroup.com',
    social: [
      { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
      { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
      { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
      { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    ]
  };

  const currentSection = hoveredSection || activeSection;
  const currentSubmenu = navLinks.find(link => link.name === currentSection)?.submenu || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 z-[9998]"
            onClick={onClose}
          />
          
          {/* Mega Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-[80px] left-0 right-0 bg-white z-[9999] shadow-lg mega-menu-content"
            style={{ 
              paddingTop: '60px', 
              paddingBottom: '60px',
              borderTop: '1px solid #E0E0E0'
            }}
            onMouseLeave={() => {
              setHoveredSection(null);
              // Close menu when mouse leaves
              setTimeout(() => {
                if (!document.querySelector('.mega-menu-content:hover') && 
                    !document.querySelector('.mega-menu-trigger:hover')) {
                  onClose();
                }
              }, 200);
            }}
          >
            <div 
              className="max-w-[1440px] mx-auto"
              style={{
                paddingLeft: 'clamp(40px, 5vw, 80px)',
                paddingRight: 'clamp(40px, 5vw, 80px)'
              }}
            >
              <div 
                className="grid grid-cols-1 lg:grid-cols-3"
                style={{
                  gap: 'clamp(40px, 6vw, 80px)',
                  alignItems: 'flex-start'
                }}
              >
                {/* LEFT COLUMN: Main Sections */}
                <div 
                  className="flex flex-col"
                  style={{
                    gap: 'clamp(24px, 3vw, 40px)'
                  }}
                >
                  {navLinks.map((link, index) => {
                    const isActive = currentSection === link.name;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        onMouseEnter={() => setHoveredSection(link.name)}
                        onMouseLeave={() => {
                          if (!activeSection) {
                            setHoveredSection(null);
                          }
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="block transition-colors duration-200"
                          style={{
                            fontFamily: '"Montserrat", sans-serif',
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            fontWeight: 300,
                            letterSpacing: '0.5px',
                            lineHeight: 1.2,
                            color: isActive ? '#01B2B2' : '#1A1A1A',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#01B2B2';
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
                    gap: 'clamp(20px, 2.5vw, 24px)',
                    paddingTop: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  <AnimatePresence mode="wait">
                    {currentSubmenu.length > 0 && (
                      <motion.div
                        key={currentSection}
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
                        {currentSubmenu.map((item, idx) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03, duration: 0.2 }}
                          >
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="block transition-colors duration-200"
                              style={{
                                fontFamily: '"Montserrat", sans-serif',
                                fontSize: 'clamp(14px, 1.5vw, 16px)',
                                fontWeight: 300,
                                letterSpacing: '0.3px',
                                lineHeight: 1.5,
                                color: '#333333',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#01B2B2';
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
                    gap: 'clamp(24px, 3vw, 32px)',
                    paddingTop: 'clamp(8px, 1vw, 12px)'
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
                        fontSize: 'clamp(24px, 3vw, 32px)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        lineHeight: 1.2,
                        color: '#032D46',
                        marginBottom: 'clamp(20px, 2.5vw, 24px)',
                        paddingBottom: 'clamp(12px, 1.5vw, 16px)',
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
                          fontSize: 'clamp(16px, 1.8vw, 18px)',
                          fontWeight: 400,
                          lineHeight: 1.6,
                          color: '#1A1A1A',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#01B2B2'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#1A1A1A'}
                      >
                        {contactInfo.phone}
                      </a>
                      <a
                        href="mailto:contact@zhhgroup.com"
                        className="transition-colors duration-200"
                        style={{
                          fontFamily: '"Montserrat", sans-serif',
                          fontSize: 'clamp(16px, 1.8vw, 18px)',
                          fontWeight: 400,
                          lineHeight: 1.6,
                          color: '#1A1A1A',
                          textDecoration: 'underline',
                          textUnderlineOffset: '4px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#01B2B2'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#1A1A1A'}
                      >
                        {contactInfo.email}
                      </a>
                    </div>

                    {/* Social Icons */}
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(16px, 2vw, 20px)',
                        paddingTop: 'clamp(24px, 3vw, 32px)',
                        borderTop: '1px solid #E4E7EA'
                      }}
                    >
                      {contactInfo.social.map((social) => (
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
                            e.currentTarget.style.color = '#01B2B2';
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
        </>
      )}
    </AnimatePresence>
  );
}

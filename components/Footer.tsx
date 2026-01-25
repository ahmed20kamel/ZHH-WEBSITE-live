'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, ArrowUpRight,
  Linkedin, Twitter, Instagram, Youtube
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const divisions = [
    { 
      name: 'ZHH Construction', 
      href: '/divisions#construction',
      logo: '/assets/logos/ZHH%20Construction%20Logo.svg',
      description: 'Sustainable Infrastructure & Development',
      isExternal: false,
    },
    { 
      name: 'ZHH Real Estate', 
      href: '/divisions#real-estate',
      logo: '/assets/logos/zhh-real-estate-logo.svg',
      description: 'Premium Commercial & Residential',
      isExternal: false,
    },
    { 
      name: 'ZHH General Trading', 
      href: '/divisions#trading',
      logo: '/assets/logos/zhh-general-trading-logo.svg',
      description: 'Global Trade & Strategic Partnerships',
      isExternal: false,
    },
    { 
      name: 'Jewelust', 
      href: 'https://jewelust.ae/',
      logo: '/assets/logos/jewelust-logo.svg',
      description: 'Ethical Gold & Precious Metals',
      isExternal: true,
    },
  ];

  const links = [
    { name: 'Who We Are', href: '/about' },
    { name: 'What We Do', href: '/divisions' },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Investor Relations', href: '/investors' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialMedia = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/zhh-group' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/zhhgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/zhhgroup' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/zhhgroup' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-700" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(40px, 5vw, 60px)' }}>

      <div className="container-unified relative z-10">
        {/* Top Section - Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(32px, 4vw, 60px)', paddingBottom: 'clamp(40px, 5vw, 60px)' }}>
          {/* Company Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--content-spacing-lg)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <div className="relative">
                <div className="w-40 h-40 rounded-2xl bg-transparent flex items-center justify-center p-4">
                  <img
                    src="/assets/logos/drawing.svg"
                    alt="ZHH Group Holding"
                    style={{ width: '100%', height: '100%', filter: 'brightness(1.5) contrast(1.4) drop-shadow(0 0 10px rgba(13, 148, 136, 0.3))', objectFit: 'contain' }}
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="body-regular-unified text-gray-200"
              style={{ fontFamily: 'var(--font-primary)', lineHeight: 1.7 }}
            >
              A diversified Emirati conglomerate managing strategic investments 
              across construction, real estate, global trading, and precious metals.
            </motion.p>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              {socialMedia.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-teal-500 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-teal-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Group Companies */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h4-unified text-white uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-primary)', marginBottom: 'var(--content-spacing-md)' }}
            >
              Our Divisions
            </motion.h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--content-spacing-sm)' }}>
              {divisions.map((division, index) => {
                const content = (
                  <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-teal-500/30">
                    {/* Logo */}
                    <div className="w-14 h-14 rounded-lg bg-white/95 backdrop-blur-sm border border-gray-200/60 flex items-center justify-center flex-shrink-0 p-2" style={{ minWidth: '56px', minHeight: '56px' }}>
                      <img
                        src={division.logo}
                        alt={`${division.name} Logo`}
                        className="w-full h-full object-contain"
                        style={{ 
                          imageRendering: 'crisp-edges',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          filter: 'none',
                          opacity: 1
                        } as React.CSSProperties}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="body-small-unified text-white group-hover:text-teal-400 transition-colors" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
                          {division.name}
                        </span>
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-teal-400 flex-shrink-0"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.span>
                      </div>
                      <p className="body-small-unified text-gray-200 mt-1" style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(11px, 1.2vw, 12px)' }}>
                        {division.description}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={division.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {division.isExternal ? (
                      <a
                        href={division.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      <Link href={division.href}>
                        {content}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h4-unified text-white uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-primary)', marginBottom: 'var(--content-spacing-md)' }}
            >
              Explore ZHH
            </motion.h4>
            
            <div className="grid grid-cols-2" style={{ gap: 'var(--content-spacing-xs)' }}>
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center rounded-lg hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-900/50 transition-all duration-300"
                    style={{
                      padding: 'clamp(14px, 1.8vw, 18px) clamp(20px, 2.5vw, 24px)',
                      margin: 'clamp(2px, 0.3vw, 4px) 0'
                    }}
                  >
                    <span 
                      className="body-small-unified text-gray-200 group-hover:text-white transition-colors whitespace-nowrap" 
                      style={{ 
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'clamp(13px, 1.4vw, 14px)',
                        lineHeight: 1.6
                      }}
                    >
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h4-unified text-white uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-primary)', marginBottom: 'var(--content-spacing-md)' }}
            >
              Get In Touch
            </motion.h4>
            
            <div className="grid grid-cols-1" style={{ gap: 'clamp(20px, 2.5vw, 28px)' }}>
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px',
                  margin: 0,
                  padding: 0,
                  width: '100%',
                }}
              >
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: '#1F2937', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  margin: 0,
                  padding: 0,
                }}>
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '4px',
                  margin: 0,
                  padding: 0,
                  flex: 1,
                }}>
                  <p style={{ 
                    fontFamily: 'var(--font-primary)', 
                    fontWeight: 500, 
                    margin: 0,
                    padding: 0,
                    color: '#FFFFFF',
                    fontSize: 'clamp(13px, 1.4vw, 14px)',
                    lineHeight: 1.5,
                  }}>Corporate Headquarters</p>
                  <p style={{ 
                    fontFamily: 'var(--font-primary)', 
                    margin: 0,
                    padding: 0,
                    color: '#D1D5DB',
                    fontSize: 'clamp(13px, 1.4vw, 14px)',
                    lineHeight: 1.5,
                  }}>
                    Abu Dhabi Global Market<br />
                    United Arab Emirates
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px',
                  margin: 0,
                  padding: 0,
                  width: '100%',
                }}
              >
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: '#1F2937', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  margin: 0,
                  padding: 0,
                }}>
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '4px',
                  margin: 0,
                  padding: 0,
                  flex: 1,
                }}>
                  <a
                    href="tel:+971502621050"
                    style={{ 
                      fontFamily: 'var(--font-primary)', 
                      margin: 0,
                      padding: 0,
                      color: '#D1D5DB',
                      fontSize: 'clamp(13px, 1.4vw, 14px)',
                      lineHeight: 1.5,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'block',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                  >
                    +971 50 262 1050
                  </a>
                  <p style={{ 
                    fontFamily: 'var(--font-primary)', 
                    margin: 0,
                    padding: 0,
                    color: '#D1D5DB',
                    fontSize: 'clamp(11px, 1.2vw, 12px)',
                    lineHeight: 1.5,
                  }}>
                    Business Hours: 7AM - 7PM<br />
                    Sunday - Wednesday
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px',
                  margin: 0,
                  padding: 0,
                  width: '100%',
                }}
              >
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: '#1F2937', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  margin: 0,
                  padding: 0,
                }}>
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '4px',
                  margin: 0,
                  padding: 0,
                  flex: 1,
                }}>
                  <a
                    href="mailto:Info@zhhholding.com"
                    style={{ 
                      fontFamily: 'var(--font-primary)', 
                      margin: 0,
                      padding: 0,
                      color: '#D1D5DB',
                      fontSize: 'clamp(13px, 1.4vw, 14px)',
                      lineHeight: 1.5,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'block',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                  >
                    Info@zhhholding.com
                  </a>
                  <p style={{ 
                    fontFamily: 'var(--font-primary)', 
                    margin: 0,
                    padding: 0,
                    color: '#D1D5DB',
                    fontSize: 'clamp(11px, 1.2vw, 12px)',
                    lineHeight: 1.5,
                  }}>
                    General Inquiries
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                marginTop: 'clamp(32px, 4vw, 48px)',
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
              }}
            >
              <p className="body-small-unified text-white mb-2" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
                Stay Updated
              </p>
              <p className="body-small-unified text-gray-200" style={{ 
                fontFamily: 'var(--font-primary)',
                marginBottom: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
              }}>
                Subscribe for the latest news & insights
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  style={{ 
                    height: '44px',
                    padding: 'clamp(12px, 1.5vw, 16px) clamp(16px, 2vw, 20px)'
                  }}
                />
                <Button
                  variant="primary"
                  size="sm"
                  className="flex items-center gap-2"
                  type="button"
                  style={{
                    height: '44px',
                    padding: 'clamp(10px, 1.2vw, 12px) clamp(16px, 2vw, 20px)',
                    fontSize: 'clamp(13px, 1.4vw, 14px)'
                  }}
                >
                  <span>Subscribe</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800" style={{ paddingTop: 'clamp(32px, 4vw, 48px)', marginTop: 'clamp(20px, 2.5vw, 30px)' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="body-small-unified text-center"
            style={{ fontFamily: 'var(--font-primary)', color: '#FFFFFF' }}
          >
            © {currentYear} ZHH Group Holding. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
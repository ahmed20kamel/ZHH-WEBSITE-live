'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, ArrowUpRight,
  Linkedin, Twitter, Instagram, Youtube,
  Shield, Award, TrendingUp, Sparkles
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const divisions = [
    { 
      name: 'ZHH Construction', 
      href: '/divisions#construction',
      logo: '/assets/logos/zhh-construction-logo.svg',
      description: 'Sustainable Infrastructure & Development'
    },
    { 
      name: 'ZHH Real Estate', 
      href: '/divisions#real-estate',
      logo: '/assets/logos/zhh-real-estate-logo.svg',
      description: 'Premium Commercial & Residential'
    },
    { 
      name: 'ZHH General Trading', 
      href: '/divisions#trading',
      logo: '/assets/logos/zhh-general-trading-logo.svg',
      description: 'Global Trade & Strategic Partnerships'
    },
    { 
      name: 'Jewelust', 
      href: '/divisions#jewelust',
      logo: '/assets/logos/jewelust-logo.svg',
      description: 'Ethical Gold & Precious Metals'
    },
  ];

  const links = [
    { name: 'Who We Are', href: '/about' },
    { name: 'What We Do', href: '/divisions' },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Investor Relations', href: '/investors' },
    { name: 'Career Opportunities', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialMedia = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/zhh-group' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/zhhgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/zhhgroup' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/zhhgroup' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(40px, 5vw, 60px)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-900/20 to-teal-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(1, 178, 178, 0.05) 1px, transparent 1px),
                             linear-gradient(rgba(1, 178, 178, 0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)'
          }}
        />
      </div>

      <div className="container-unified relative z-10">
        {/* Top Section - Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(32px, 4vw, 60px)', paddingBottom: 'clamp(40px, 5vw, 60px)' }}>
          {/* Company Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--content-spacing-lg)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600/20 to-teal-600/20 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center shadow-md">
                  <img
                    src="/assets/logos/zhh-group-holding-logo.svg"
                    alt="ZHH Group Holding"
                    style={{ width: '80px', height: '80px' }}
                    className="object-contain"
                  />
                </div>
                {/* Animated Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 blur-sm -z-10 animate-pulse" />
              </div>
              
              <div>
                <h3 className="h4-unified text-white" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700 }}>
                  ZHH GROUP
                </h3>
                <p className="body-small-unified text-gray-400 uppercase tracking-wider" style={{ fontFamily: 'var(--font-primary)' }}>
                  Emirati Conglomerate
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="body-regular-unified text-gray-400"
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
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
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
                return (
                  <motion.div
                    key={division.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={division.href}
                      className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-900/10 hover:to-teal-900/10 transition-all duration-300 border border-transparent hover:border-blue-500/10"
                    >
                      {/* Logo */}
                      <div className="w-14 h-14 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center flex-shrink-0 p-2">
                        <img
                          src={division.logo}
                          alt={`${division.name} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="body-small-unified text-white group-hover:text-blue-300 transition-colors" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
                            {division.name}
                          </span>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="text-blue-400 flex-shrink-0"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.span>
                        </div>
                        <p className="body-small-unified text-gray-500 mt-1" style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(11px, 1.2vw, 12px)' }}>
                          {division.description}
                        </p>
                      </div>
                    </Link>
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
                    className="group flex items-center gap-2 p-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-900/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="body-small-unified text-gray-400 group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-primary)' }}>
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
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--content-spacing-md)' }}>
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="body-small-unified text-white" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>Corporate Headquarters</p>
                  <p className="body-small-unified text-gray-400 mt-1" style={{ fontFamily: 'var(--font-primary)' }}>
                    Abu Dhabi Global Market<br />
                    United Arab Emirates
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <a
                    href="tel:+971504044187"
                    className="body-small-unified text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    +971 50 404 4187
                  </a>
                  <p className="body-small-unified text-gray-500 mt-1" style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(11px, 1.2vw, 12px)' }}>
                    Business Hours: 9AM - 6PM GST
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <a
                    href="mailto:info@zhhgroup.com"
                    className="body-small-unified text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    info@zhhgroup.com
                  </a>
                  <p className="body-small-unified text-gray-500 mt-1" style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(11px, 1.2vw, 12px)' }}>
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
              style={{ marginTop: 'var(--content-spacing-lg)' }}
            >
              <p className="body-small-unified text-white mb-2" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
                Stay Updated
              </p>
              <p className="body-small-unified text-gray-400 mb-4" style={{ fontFamily: 'var(--font-primary)' }}>
                Subscribe for the latest news & insights
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'clamp(13px, 1.5vw, 15px)'
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(1, 178, 178, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'clamp(13px, 1.5vw, 15px)',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    textAlign: 'center'
                  }}
                >
                  <span>Subscribe</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Middle Section - Awards & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 border-y border-gray-800 mb-8"
        >
          <h4 className="h4-unified text-white text-center" style={{ fontFamily: 'var(--font-primary)', marginBottom: 'var(--content-spacing-md)' }}>
            Recognitions & Certifications
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <p className="body-small-unified text-gray-400" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>ISO 9001:2015</p>
              <p className="body-small-unified text-gray-500 mt-1" style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(11px, 1.2vw, 12px)' }}>
                Quality Management Certified
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="body-small-unified text-gray-400" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>ESG Excellence</p>
              <p className="body-small-unified text-gray-500 mt-1" style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(11px, 1.2vw, 12px)' }}>
                Sustainability Leadership
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-amber-400" />
              </div>
              <p className="body-small-unified text-gray-400" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>Top 50 UAE</p>
              <p className="body-small-unified text-gray-500 mt-1" style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(11px, 1.2vw, 12px)' }}>
                Fastest Growing Companies
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-violet-400" />
              </div>
              <p className="body-small-unified text-gray-400" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>Zero Violations</p>
              <p className="body-small-unified text-gray-500 mt-1" style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(11px, 1.2vw, 12px)' }}>
                Perfect Compliance Record
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="body-small-unified text-gray-500 text-center md:text-left"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              © {currentYear} ZHH Group Holding. All Rights Reserved.
            </motion.p>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-6 justify-center"
            >
              <Link href="/privacy" className="body-small-unified text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-primary)' }}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="body-small-unified text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-primary)' }}>
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="body-small-unified text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-primary)' }}>
                Legal Disclaimer
              </Link>
              <Link href="/sitemap" className="body-small-unified text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-primary)' }}>
                Sitemap
              </Link>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-gray-400 hover:text-white hover:border-blue-500/30 transition-all duration-300 flex items-center gap-2"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(12px, 1.4vw, 14px)'
              }}
            >
              <ArrowUpRight className="w-4 h-4" />
              Back to Top
            </motion.button>
          </div>
          
          {/* Additional Copyright Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="body-small-unified text-gray-600 text-center"
            style={{ fontFamily: 'var(--font-primary)', marginTop: 'var(--content-spacing-md)' }}
          >
            ZHH Group Holding is a registered trademark. All company names, logos, and 
            product names are trademarks or registered trademarks of their respective holders.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { divisions } from '@/data/divisions';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';

export default function DivisionsPageClient() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section - Unified */}
      <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ minHeight: '70vh' }}>
        {/* Background Image - Desktop Only */}
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
          <Image
            src="/assets/hero/hero-divisions.png"
            alt="ZHH Divisions"
            fill
            priority
            className="object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
        {/* Mobile Static Background - Shows bottom portion */}
        <div className="absolute inset-0 w-full h-full z-0 md:hidden">
          <Image
            src="/assets/hero/hero-divisions.png"
            alt="ZHH Divisions"
            fill
            priority
            className="object-cover"
            style={{ 
              pointerEvents: 'none',
              objectFit: 'cover',
              objectPosition: 'bottom'
            }}
          />
        </div>

        {/* Light Gradient Overlay - Bottom to Top (stronger at bottom) */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 40%, transparent 100%)'
          }}
        />

        {/* Text Content Container with Backdrop */}
        <div className="container-unified relative z-10 flex items-center justify-center" style={{ minHeight: '70vh', paddingTop: 'clamp(40px, 8vh, 80px)' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto space-y-6 px-4"
            style={{
              padding: 'clamp(40px, 5vw, 60px)',
              borderRadius: '16px',
              background: 'rgba(0, 0, 0, 0.35)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-1 bg-gradient-to-r from-[#00d4aa] via-[#c9a74a] to-[#00d4aa]" />
              <h1
                className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Divisions
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#c9a74a] via-[#00d4aa] to-[#c9a74a]" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Building Value Across Construction, Real Estate, Trading & Precious Metals
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Divisions Details - Tabs Layout */}
      <section className="section-unified bg-unified-white">
        <div className="container-unified">
          <div 
            className="space-y-16 md:space-y-24"
            style={{ 
              gap: 'clamp(41px, 5.1vw, 68px)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {divisions.map((division, index) => (
              <motion.div
                key={division.id}
                id={division.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={staggerContainer}
                style={{
                  width: '100%',
                  maxWidth: '100%'
                }}
              >
                <Card
                  className="overflow-hidden"
                  hover={false}
                  style={{
                    padding: 0,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    border: '1px solid #E5E5E5',
                    position: 'relative'
                  }}
              >
                  {/* Background Image with Blur and Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 0,
                      overflow: 'hidden',
                      borderRadius: '12px'
                    }}
                  >
                    {division.id === 'construction' && (
                      <Image
                        src="/assets/hero/card/Construction.jpg"
                        alt=""
                        fill
                        className="object-cover"
                        style={{
                          filter: 'blur(8px)',
                          opacity: 0.55,
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transform: 'scale(1.1)'
                        }}
                      />
                    )}
                    {division.id === 'trading' && (
                      <Image
                        src="/assets/hero/card/General Trading.jpg"
                        alt=""
                        fill
                        className="object-cover"
                        style={{
                          filter: 'blur(8px)',
                          opacity: 0.55,
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transform: 'scale(1.1)'
                        }}
                      />
                    )}
                    {division.id === 'real-estate' && (
                      <Image
                        src="/assets/hero/card/Real Estates.jpg"
                        alt=""
                        fill
                        className="object-cover"
                        style={{
                          filter: 'blur(8px)',
                          opacity: 0.55,
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transform: 'scale(1.1)'
                        }}
                      />
                    )}
                    {division.id === 'jewelust' && (
                      <Image
                        src="/assets/hero/card/Gold2.JPEG"
                        alt=""
                        fill
                        className="object-cover"
                        style={{
                          filter: 'blur(8px)',
                          opacity: 0.55,
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transform: 'scale(1.1)'
                        }}
                      />
                    )}
                    {/* White Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        zIndex: 1
                      }}
                    />
                  </div>

                  {/* Card Header - Logo, Title, Tagline */}
                <motion.div
                  variants={fadeInUp}
                    style={{
                      background: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(15px)',
                      WebkitBackdropFilter: 'blur(15px)',
                      padding: 'clamp(27px, 3.4vw, 41px)',
                      borderBottom: '1px solid rgba(229, 231, 235, 0.25)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 'clamp(17px, 2.1vw, 24px)',
                      textAlign: 'center',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {/* Logo */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={{
                        height: 'clamp(80px, 10vw, 120px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'clamp(8px, 1vw, 12px)'
                      }}
                    >
                    {division.id === 'construction' && (
                      <img
                        src="/assets/logos/zhh-construction-logo.svg"
                        alt="ZHH Construction Logo"
                        className="h-full w-auto object-contain"
                          style={{ maxWidth: 'min(100%, 300px)' }}
                      />
                    )}
                    {division.id === 'real-estate' && (
                      <img
                        src="/assets/logos/zhh-real-estate-logo.svg"
                        alt="ZHH Real Estate Logo"
                        className="h-full w-auto object-contain"
                          style={{ maxWidth: 'min(100%, 300px)' }}
                      />
                    )}
                    {division.id === 'trading' && (
                      <img
                        src="/assets/logos/zhh-general-trading-logo.svg"
                        alt="ZHH General Trading Logo"
                        className="h-full w-auto object-contain"
                          style={{ maxWidth: 'min(100%, 300px)' }}
                      />
                    )}
                    {division.id === 'jewelust' && (
                      <img
                        src="/assets/logos/jewelust-logo.svg"
                        alt="Jewelust Logo"
                        className="h-full w-auto object-contain"
                          style={{ maxWidth: 'min(100%, 300px)' }}
                        />
                      )}
                    </motion.div>

                    {/* Title and Tagline */}
                    <div style={{ width: '100%' }}>
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{
                          fontFamily: 'var(--font-english-heading)',
                          fontSize: 'clamp(32px, 4vw, 48px)',
                          fontWeight: 700,
                          color: '#032D46',
                          marginBottom: 'clamp(8px, 1vw, 12px)',
                          lineHeight: 1.2
                        }}
                      >
                        {division.name}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                          fontFamily: '"Montserrat", sans-serif',
                          fontSize: 'clamp(14px, 1.7vw, 17px)',
                          fontStyle: 'italic',
                          color: '#01B2B2',
                          fontWeight: 500,
                          lineHeight: 1.4
                        }}
                      >
                        {division.tagline}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Tabs Content */}
                  <div
                    style={{
                      padding: 'clamp(20px, 2.6vw, 34px)',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    <Tabs
                      defaultTab="overview"
                      tabs={[
                        {
                          id: 'overview',
                          label: 'Overview',
                          content: (
                            <div>
                              <p
                                style={{
                                  fontFamily: '"Montserrat", sans-serif',
                                  fontSize: 'clamp(14px, 1.5vw, 15px)',
                                  lineHeight: 1.8,
                                  color: '#333333',
                                  marginBottom: 'clamp(16px, 2vw, 20px)'
                                }}
                              >
                                {division.overview}
                              </p>
                  </div>
                          )
                        },
                        {
                          id: 'establishment',
                          label: 'Establishment',
                          content: (
                            <div>
                              <p
                                style={{
                                  fontFamily: '"Montserrat", sans-serif',
                                  fontSize: 'clamp(14px, 1.5vw, 15px)',
                                  lineHeight: 1.8,
                                  color: '#333333'
                                }}
                              >
                                {division.establishment}
                              </p>
                            </div>
                          )
                        },
                        {
                          id: 'core-activities',
                          label: 'Core Activities',
                          content: (
                            <div>
                              <ul
                                style={{
                                  listStyle: 'none',
                                  paddingLeft: 0,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 'clamp(9px, 1vw, 12px)'
                                }}
                              >
                                {division.coreActivities.map((activity, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    style={{
                                      fontFamily: '"Montserrat", sans-serif',
                                      fontSize: 'clamp(14px, 1.5vw, 15px)',
                                      lineHeight: 1.7,
                                      color: '#333333',
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: '12px'
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: '#01B2B2',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        lineHeight: '1.2',
                                        marginTop: '2px',
                                        flexShrink: 0
                                      }}
                                    >
                                      •
                                    </span>
                                    <span>{activity}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )
                        },
                        {
                          id: 'achievements',
                          label: division.id === 'trading' ? 'Achievements & Milestones' : 
                                 division.id === 'real-estate' ? 'Achievements' : 
                                 'Completed Projects & Achievements',
                          content: (
                            <div>
                              <ul
                                style={{
                                  listStyle: 'none',
                                  paddingLeft: 0,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 'clamp(9px, 1vw, 12px)'
                                }}
                              >
                                {division.achievements.map((achievement, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    style={{
                                      fontFamily: '"Montserrat", sans-serif',
                                      fontSize: 'clamp(14px, 1.5vw, 15px)',
                                      lineHeight: 1.7,
                                      color: '#333333',
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: '12px'
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: '#01B2B2',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        lineHeight: '1.2',
                                        marginTop: '2px',
                                        flexShrink: 0
                                      }}
                                    >
                                      ✓
                                    </span>
                                    <span>{achievement}</span>
                                  </motion.li>
                      ))}
                    </ul>
                  </div>
                          )
                        },
                        {
                          id: 'ceo-message',
                          label: 'CEO Message',
                          content: (
                            <div
                              style={{
                                padding: 'clamp(20px, 2.6vw, 27px)',
                                background: 'rgba(240, 253, 255, 0.35)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #01B2B2',
                                border: '1px solid rgba(229, 229, 229, 0.3)'
                              }}
                            >
                              <p
                                style={{
                                  fontFamily: '"Montserrat", sans-serif',
                                  fontSize: 'clamp(14px, 1.5vw, 15px)',
                                  fontWeight: 600,
                                  color: '#032D46',
                                  marginBottom: 'clamp(4px, 0.5vw, 8px)'
                                }}
                              >
                                {division.ceoMessage.name}
                              </p>
                              <p
                                style={{
                                  fontFamily: '"Montserrat", sans-serif',
                                  fontSize: 'clamp(14px, 1.6vw, 16px)',
                                  color: '#666666',
                                  marginBottom: 'clamp(16px, 2vw, 20px)'
                                }}
                              >
                                {division.ceoMessage.title}
                              </p>
                              <p
                                style={{
                                  fontFamily: '"Montserrat", sans-serif',
                                  fontSize: 'clamp(14px, 1.5vw, 15px)',
                                  lineHeight: 1.8,
                                  color: '#333333',
                                  fontStyle: 'italic',
                                  position: 'relative',
                                  paddingLeft: 'clamp(14px, 1.7vw, 20px)'
                                }}
                              >
                                <span
                                  style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    fontSize: 'clamp(27px, 3.4vw, 41px)',
                                    color: '#01B2B2',
                                    opacity: 0.2,
                                    fontFamily: 'Georgia, serif',
                                    lineHeight: 1
                                  }}
                                >
                                  "
                                </span>
                                {division.ceoMessage.quote}
                              </p>
                            </div>
                          )
                        },
                        // COO Quotes tab for Jewelust only
                        ...(division.cooQuotes && division.cooQuotes.length > 0 ? [{
                          id: 'coo-quotes',
                          label: 'COO Quotes',
                          content: (
                            <div>
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                  gap: 'clamp(17px, 2.1vw, 20px)'
                                }}
                              >
                                {division.cooQuotes.map((coo, idx) => (
                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    style={{
                                      padding: 'clamp(17px, 2.1vw, 20px)',
                                      backgroundColor: 'rgba(255, 255, 255, 0.35)',
                                      backdropFilter: 'blur(12px)',
                                      WebkitBackdropFilter: 'blur(12px)',
                                      borderRadius: '8px',
                                      border: '1px solid rgba(229, 229, 229, 0.3)',
                                      borderLeft: '4px solid #D4AF37',
                                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                                      transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                                      e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                                      e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                  >
                                    <p
                                      style={{
                                        fontFamily: '"Montserrat", sans-serif',
                                        fontSize: 'clamp(14px, 1.5vw, 15px)',
                                        fontWeight: 600,
                                        color: '#032D46',
                                        marginBottom: 'clamp(3px, 0.4vw, 7px)'
                                      }}
                                    >
                                      {coo.name}
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: '"Montserrat", sans-serif',
                                        fontSize: 'clamp(14px, 1.6vw, 16px)',
                                        color: '#666666',
                                        marginBottom: 'clamp(10px, 1.3vw, 14px)'
                                      }}
                                    >
                                      {coo.title}
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: '"Montserrat", sans-serif',
                                        fontSize: 'clamp(15px, 1.7vw, 17px)',
                                        lineHeight: 1.7,
                                        color: '#333333',
                                        fontStyle: 'italic'
                                      }}
                                    >
                                      "{coo.quote}"
                                    </p>
                                  </motion.div>
                                ))}
                      </div>
                            </div>
                          )
                        }] : [])
                      ]}
                    />
                    </div>
                  </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Unified */}
      <section className="section-unified bg-unified-dark text-white">
        <div className="container-unified text-center-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="section-title-wrapper"
          >
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-white mb-content"
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-large-unified text-white/80 mb-section"
            >
              Contact us to learn more about our divisions and how we can help you achieve your goals.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="/contact"
                className="btn-primary-unified"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

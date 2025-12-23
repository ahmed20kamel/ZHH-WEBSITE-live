'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { divisions } from '@/data/divisions';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';
import InternalHero from '@/components/InternalHero';
import Button from '@/components/ui/Button';

export default function DivisionsPageClient() {
  return (
    <div>
      {/* Hero Section - Shared InternalHero */}
      <InternalHero
        title="Our Divisions"
        subtitle="Building Value Across Construction, Real Estate, Trading & Precious Metals"
        imageSrc="/assets/hero/hero-divisions.png"
        imageAlt="ZHH Divisions"
      />

      {/* Divisions Details - Tabs Layout */}
      <section 
        className="section-unified bg-unified-white"
        style={{
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)'
        }}
      >
        <div className="container-unified">
          <div 
            className="space-y-16 md:space-y-24"
            style={{ 
              gap: 'clamp(48px, 6vw, 72px)',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              boxSizing: 'border-box'
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
                          opacity: 0.25,
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
                          opacity: 0.25,
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
                          opacity: 0.25,
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
                          opacity: 0.25,
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transform: 'scale(1.1)'
                        }}
                      />
                    )}
                    {/* White Overlay - Increased for better visibility */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
                      padding: 'clamp(24px, 5vw, 48px)',
                      paddingTop: 'clamp(28px, 5vw, 52px)',
                      paddingBottom: 'clamp(28px, 5vw, 52px)',
                      paddingLeft: 'clamp(20px, 4vw, 48px)',
                      paddingRight: 'clamp(20px, 4vw, 48px)',
                      borderBottom: '1px solid rgba(229, 231, 235, 0.25)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 0,
                      textAlign: 'center',
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Logo - Larger Size */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={{
                        height: 'clamp(100px, 18vw, 160px)',
                        maxHeight: 'clamp(100px, 18vw, 160px)',
                        width: '100%',
                        maxWidth: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'clamp(20px, 4vw, 32px)',
                        paddingLeft: 'clamp(12px, 3vw, 0px)',
                        paddingRight: 'clamp(12px, 3vw, 0px)',
                        boxSizing: 'border-box',
                        flexShrink: 0
                      }}
                    >
                    {division.id === 'construction' && (
                      <img
                        src="/assets/logos/zhh-construction-logo.svg"
                        alt="ZHH Construction Logo"
                        className="h-full w-auto object-contain"
                          style={{ 
                            maxWidth: 'min(100%, 400px)',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto'
                          }}
                      />
                    )}
                    {division.id === 'real-estate' && (
                      <img
                        src="/assets/logos/zhh-real-estate-logo.svg"
                        alt="ZHH Real Estate Logo"
                        className="h-full w-auto object-contain"
                          style={{ 
                            maxWidth: 'min(100%, 400px)',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto'
                          }}
                      />
                    )}
                    {division.id === 'trading' && (
                      <img
                        src="/assets/logos/zhh-general-trading-logo.svg"
                        alt="ZHH General Trading Logo"
                        className="h-full w-auto object-contain"
                          style={{ 
                            maxWidth: 'min(100%, 400px)',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto'
                          }}
                      />
                    )}
                    {division.id === 'jewelust' && (
                      <img
                        src="/assets/logos/jewelust-logo.svg"
                        alt="Jewelust Logo"
                        className="h-full w-auto object-contain"
                          style={{ 
                            maxWidth: 'min(100%, 400px)',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto'
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Tagline Only - Smaller text size */}
                    <div style={{ 
                      width: '100%', 
                      maxWidth: '100%',
                      paddingLeft: 'clamp(20px, 4vw, 0px)', 
                      paddingRight: 'clamp(20px, 4vw, 0px)',
                      paddingTop: 0,
                      boxSizing: 'border-box',
                      marginTop: 0
                    }}>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 'clamp(12px, 2.2vw, 16px)',
                          fontStyle: 'italic',
                          color: '#01B2B2',
                          fontWeight: 500,
                          lineHeight: 1.6,
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          hyphens: 'auto',
                          margin: 0,
                          padding: 0,
                          textAlign: 'center'
                        }}
                      >
                        {division.tagline}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Tabs Content */}
                  <div
                    style={{
                      padding: 'clamp(20px, 5vw, 40px)',
                      paddingTop: 'clamp(24px, 5vw, 40px)',
                      paddingBottom: 'clamp(24px, 5vw, 40px)',
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                      overflow: 'hidden'
                    }}
                  >
                    <Tabs
                      defaultTab="overview"
                      tabs={[
                        {
                          id: 'overview',
                          label: 'Overview',
                          content: (
                            <div style={{ 
                              width: '100%', 
                              maxWidth: '100%',
                              padding: 'clamp(8px, 2vw, 0px)',
                              boxSizing: 'border-box'
                            }}>
                              <p
                                style={{
                                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                                  lineHeight: 1.9,
                                  color: '#333333',
                                  margin: 0,
                                  padding: 0,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  hyphens: 'auto',
                                  textAlign: 'left'
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
                            <div style={{ 
                              width: '100%', 
                              maxWidth: '100%',
                              padding: 'clamp(8px, 2vw, 0px)',
                              boxSizing: 'border-box'
                            }}>
                              <p
                                style={{
                                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                                  lineHeight: 1.9,
                                  color: '#333333',
                                  margin: 0,
                                  padding: 0,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  hyphens: 'auto',
                                  textAlign: 'left'
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
                            <div style={{ 
                              width: '100%', 
                              maxWidth: '100%',
                              padding: 'clamp(8px, 2vw, 0px)',
                              boxSizing: 'border-box'
                            }}>
                              <ul
                                style={{
                                  listStyle: 'none',
                                  paddingLeft: 0,
                                  paddingRight: 0,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 'clamp(14px, 2.5vw, 16px)',
                                  width: '100%',
                                  margin: 0
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
                                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                                      fontSize: 'clamp(14px, 2.2vw, 16px)',
                                      lineHeight: 1.8,
                                      color: '#333333',
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: 'clamp(10px, 2.5vw, 14px)',
                                      width: '100%',
                                      maxWidth: '100%',
                                      margin: 0,
                                      padding: 0,
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word',
                                      hyphens: 'auto'
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: '#01B2B2',
                                        fontSize: 'clamp(18px, 3.5vw, 22px)',
                                        fontWeight: 'bold',
                                        lineHeight: '1',
                                        marginTop: 'clamp(4px, 0.8vw, 6px)',
                                        flexShrink: 0,
                                        minWidth: 'clamp(18px, 3.5vw, 22px)'
                                      }}
                                    >
                                      •
                                    </span>
                                    <span style={{ 
                                      flex: 1, 
                                      minWidth: 0,
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word',
                                      hyphens: 'auto'
                                    }}>
                                      {activity}
                                    </span>
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
                            <div style={{ 
                              width: '100%', 
                              maxWidth: '100%',
                              padding: 'clamp(8px, 2vw, 0px)',
                              boxSizing: 'border-box'
                            }}>
                              <ul
                                style={{
                                  listStyle: 'none',
                                  paddingLeft: 0,
                                  paddingRight: 0,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 'clamp(14px, 2.5vw, 16px)',
                                  width: '100%',
                                  margin: 0
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
                                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                                      fontSize: 'clamp(14px, 2.2vw, 16px)',
                                      lineHeight: 1.8,
                                      color: '#333333',
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: 'clamp(10px, 2.5vw, 14px)',
                                      width: '100%',
                                      maxWidth: '100%',
                                      margin: 0,
                                      padding: 0,
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word',
                                      hyphens: 'auto'
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: '#01B2B2',
                                        fontSize: 'clamp(18px, 3.5vw, 22px)',
                                        fontWeight: 'bold',
                                        lineHeight: '1',
                                        marginTop: 'clamp(4px, 0.8vw, 6px)',
                                        flexShrink: 0,
                                        minWidth: 'clamp(18px, 3.5vw, 22px)'
                                      }}
                                    >
                                      ✓
                                    </span>
                                    <span style={{ 
                                      flex: 1, 
                                      minWidth: 0,
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word',
                                      hyphens: 'auto'
                                    }}>
                                      {achievement}
                                    </span>
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
                                padding: 'clamp(20px, 5vw, 32px)',
                                background: 'rgba(240, 253, 255, 0.35)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #01B2B2',
                                border: '1px solid rgba(229, 229, 229, 0.3)',
                                width: '100%',
                                maxWidth: '100%',
                                boxSizing: 'border-box'
                              }}
                            >
                              <p
                                style={{
                                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                                  fontWeight: 600,
                                  color: '#032D46',
                                  marginBottom: 'clamp(6px, 1.5vw, 10px)',
                                  marginTop: 0,
                                  padding: 0,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  hyphens: 'auto',
                                  lineHeight: 1.5
                                }}
                              >
                                {division.ceoMessage.name}
                              </p>
                              <p
                                style={{
                                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                                  fontSize: 'clamp(13px, 2.2vw, 16px)',
                                  color: '#666666',
                                  marginBottom: 'clamp(14px, 2.5vw, 22px)',
                                  marginTop: 0,
                                  padding: 0,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  hyphens: 'auto',
                                  lineHeight: 1.6
                                }}
                              >
                                {division.ceoMessage.title}
                              </p>
                              <p
                                style={{
                                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                                  lineHeight: 1.9,
                                  color: '#333333',
                                  fontStyle: 'italic',
                                  position: 'relative',
                                  paddingLeft: 'clamp(20px, 4vw, 24px)',
                                  margin: 0,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  hyphens: 'auto'
                                }}
                              >
                                <span
                                  style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    fontSize: 'clamp(28px, 5vw, 44px)',
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
                            <div style={{ width: '100%', maxWidth: '100%' }}>
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                                  gap: 'clamp(16px, 3vw, 20px)',
                                  width: '100%',
                                  boxSizing: 'border-box'
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
                                      padding: 'clamp(16px, 3vw, 20px)',
                                      backgroundColor: 'rgba(255, 255, 255, 0.35)',
                                      backdropFilter: 'blur(12px)',
                                      WebkitBackdropFilter: 'blur(12px)',
                                      borderRadius: '8px',
                                      border: '1px solid rgba(229, 229, 229, 0.3)',
                                      borderLeft: '4px solid #D4AF37',
                                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                                      transition: 'all 0.3s ease',
                                      width: '100%',
                                      maxWidth: '100%',
                                      boxSizing: 'border-box'
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
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontSize: 'clamp(14px, 2.5vw, 15px)',
                                        fontWeight: 600,
                                        color: '#032D46',
                                        marginBottom: 'clamp(4px, 1vw, 7px)',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word'
                                      }}
                                    >
                                      {coo.name}
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontSize: 'clamp(13px, 2.5vw, 16px)',
                                        color: '#666666',
                                        marginBottom: 'clamp(10px, 2vw, 14px)',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word'
                                      }}
                                    >
                                      {coo.title}
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontSize: 'clamp(14px, 2.5vw, 17px)',
                                        lineHeight: 1.7,
                                        color: '#333333',
                                        fontStyle: 'italic',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word'
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
      <section 
        className="section-unified bg-unified-dark text-white"
        style={{
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)'
        }}
      >
        <div className="container-unified text-center-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="section-title-wrapper"
            style={{
              paddingLeft: 'clamp(16px, 4vw, 0px)',
              paddingRight: 'clamp(16px, 4vw, 0px)'
            }}
          >
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-white"
              style={{
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                lineHeight: 1.3,
                marginBottom: 'clamp(16px, 3vw, 24px)',
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-large-unified text-white/80"
              style={{
                fontSize: 'clamp(14px, 3vw, 18px)',
                lineHeight: 1.7,
                marginBottom: 'clamp(24px, 4vw, 32px)',
                paddingLeft: 'clamp(16px, 4vw, 0px)',
                paddingRight: 'clamp(16px, 4vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Contact us to learn more about our divisions and how we can help you achieve your goals.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                href="/contact"
                variant="primary"
                size="md"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

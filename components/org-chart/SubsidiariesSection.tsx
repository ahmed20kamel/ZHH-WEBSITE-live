'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { subsidiaries, premiumColors } from './types';
import Button from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

export default function SubsidiariesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  // Helper function to get short description (first sentence or ~120 chars)
  const getShortDescription = (description: string) => {
    const firstSentence = description.split('.')[0];
    if (firstSentence.length <= 120) {
      return firstSentence + '.';
    }
    return description.substring(0, 120).trim() + '...';
  };

  return (
    <>
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="section-unified bg-white"
      style={{
        paddingTop: 'clamp(50px, 6vw, 70px)',
        paddingBottom: 'clamp(50px, 6vw, 70px)'
      }}
    >
      <div className="container-unified" style={{ maxWidth: '100%', paddingLeft: 'clamp(16px, 4vw, 24px)', paddingRight: 'clamp(16px, 4vw, 24px)' }}>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
          style={{ 
            marginBottom: 'clamp(40px, 5vw, 60px)',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
            <span className="body-small-unified text-tertiary uppercase tracking-wider">
              Our Divisions
            </span>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
          </motion.div>
          
          <h2 
            className="h2-unified text-primary text-center"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: 'clamp(16px, 2vw, 24px)',
              lineHeight: '1.2'
            }}
          >
            Our Subsidiaries
          </h2>
          
          <p 
            className="body-large-unified text-secondary text-center"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: 'clamp(16px, 1.9vw, 19px)',
              lineHeight: '1.7',
              color: 'var(--color-text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Four powerful divisions, one unified vision for excellence
          </p>
        </motion.div>

        {/* Enhanced Subsidiaries Grid with Closing Statement */}
        <div 
          className="relative"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: 'clamp(32px, 4vw, 48px)',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(1, 178, 178, 0.1)'
          }}
        >
          <div 
            className="grid grid-cols-1 md:grid-cols-2"
            style={{
              gap: 'clamp(24px, 3vw, 32px)',
              marginBottom: 'clamp(40px, 5vw, 56px)'
            }}
          >
          {subsidiaries.map((subsidiary, idx) => {
            const isExpanded = expandedCards.has(subsidiary.id);
            
            return (
              <motion.div
                key={subsidiary.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: 0.3 + idx * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative overflow-hidden transition-all duration-500"
                style={{ 
                  padding: 0,
                  position: 'relative'
                }}
              >
                {/* Background Image with Blur and Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    overflow: 'hidden'
                  }}
                >
                  {subsidiary.id === 'construction' && (
                    <Image
                      src="/assets/hero/card/Construction.jpg"
                      alt=""
                      fill
                      className="object-cover"
                      style={{
                        filter: 'blur(4px)',
                        opacity: 0.4,
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transform: 'scale(1.1)'
                      }}
                    />
                  )}
                  {subsidiary.id === 'trading' && (
                    <Image
                      src="/assets/hero/card/General Trading.jpg"
                      alt=""
                      fill
                      className="object-cover"
                      style={{
                        filter: 'blur(4px)',
                        opacity: 0.4,
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transform: 'scale(1.1)'
                      }}
                    />
                  )}
                  {subsidiary.id === 'real-estate' && (
                    <Image
                      src="/assets/hero/card/Real Estates.jpg"
                      alt=""
                      fill
                      className="object-cover"
                      style={{
                        filter: 'blur(4px)',
                        opacity: 0.4,
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transform: 'scale(1.1)'
                      }}
                    />
                  )}
                  {subsidiary.id === 'jewelust' && (
                    <Image
                      src="/assets/hero/card/Gold2.JPEG"
                      alt=""
                      fill
                      className="object-cover"
                      style={{
                        filter: 'blur(4px)',
                        opacity: 0.4,
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transform: 'scale(1.1)'
                      }}
                    />
                  )}
                </div>

                {/* Subtle Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  style={{
                    background: `linear-gradient(135deg, ${premiumColors.darkBlue}08 0%, ${premiumColors.tealBlue}05 100%)`,
                    zIndex: 1
                  }}
                  animate={isExpanded ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative z-10 w-full max-w-full" style={{ padding: 'clamp(28px, 3.5vw, 44px)' }}>
                  {/* Enhanced Logo Section */}
                  <div className="flex items-center justify-center" style={{ marginBottom: 'clamp(20px, 2.5vw, 32px)' }}>
                    <motion.div 
                      className="relative flex items-center justify-center"
                      style={{
                        width: 'clamp(80px, 10vw, 128px)',
                        height: 'clamp(80px, 10vw, 128px)',
                        padding: 'clamp(12px, 1.5vw, 16px)'
                      }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <img 
                        src={subsidiary.logo} 
                        alt={`${subsidiary.name} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Enhanced Company Name & Tagline */}
                  <div className="text-center" style={{ marginBottom: 'clamp(20px, 2.5vw, 32px)' }}>
                    <h3 className="font-bold leading-tight" style={{ 
                      color: '#000000',
                      fontWeight: 700,
                      lineHeight: '1.3',
                      letterSpacing: '-0.02em',
                      fontSize: 'clamp(22px, 2.5vw, 36px)',
                      marginBottom: 'clamp(12px, 1.5vw, 16px)'
                    }}>
                      {subsidiary.name}
                    </h3>
                    <p className="font-semibold" style={{ 
                      color: '#000000',
                      fontWeight: 600,
                      lineHeight: '1.5',
                      fontSize: 'clamp(16px, 1.8vw, 20px)'
                    }}>
                      {subsidiary.tagline}
                    </p>
                  </div>

                  {/* Enhanced Description */}
                  <div style={{ marginBottom: 'clamp(20px, 2.5vw, 32px)' }}>
                    <p className="font-normal text-left leading-relaxed" style={{ 
                      color: '#000000',
                      fontWeight: 600,
                      lineHeight: '1.7',
                      fontSize: 'clamp(14px, 1.6vw, 18px)'
                    }}>
                      {expandedCards.has(subsidiary.id) 
                        ? subsidiary.description 
                        : getShortDescription(subsidiary.description)
                      }
                    </p>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedCards.has(subsidiary.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        {/* Enhanced Special Note for Jewelust */}
                        {subsidiary.specialNote && (
                          <div className="mb-10 p-6 rounded-2xl border" style={{
                            backgroundColor: premiumColors.bgGray,
                            borderColor: premiumColors.borderGray,
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                          }}>
                            <p className="text-sm md:text-base font-normal text-left leading-relaxed" style={{ 
                              color: premiumColors.textGray,
                              lineHeight: '1.7'
                            }}>
                              {subsidiary.specialNote}
                            </p>
                          </div>
                        )}

                        {/* Enhanced Highlights */}
                        {subsidiary.highlights && (
                          <div className="mb-10">
                            <h4 className="text-lg md:text-xl font-bold mb-6 text-left" style={{ 
                              color: premiumColors.textDark,
                              lineHeight: '1.4',
                              letterSpacing: '-0.01em'
                            }}>
                              Key Highlights
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {subsidiary.highlights.map((highlight, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-3 p-3 rounded-xl" style={{
                                  backgroundColor: premiumColors.lightGray
                                }}>
                                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ 
                                    backgroundColor: premiumColors.darkBlue 
                                  }} />
                                  <span className="text-sm font-medium text-left leading-relaxed" style={{ 
                                    color: premiumColors.textGray,
                                    lineHeight: '1.6'
                                  }}>
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Enhanced Focus Areas */}
                        {subsidiary.focusAreas && (
                          <div className="mb-10">
                            <h4 className="text-lg md:text-xl font-bold mb-6 text-left" style={{ 
                              color: premiumColors.textDark,
                              lineHeight: '1.4',
                              letterSpacing: '-0.01em'
                            }}>
                              Focus Areas
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {subsidiary.focusAreas.map((area, aIdx) => (
                                <motion.span
                                  key={aIdx}
                                  className="px-4 py-2.5 text-sm font-semibold rounded-xl border"
                                  style={{ 
                                    backgroundColor: premiumColors.lightGray,
                                    borderColor: premiumColors.borderGray,
                                    color: premiumColors.textDark
                                  }}
                                  whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: premiumColors.darkBlue,
                                    color: 'white',
                                    borderColor: premiumColors.darkBlue
                                  }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {area}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Enhanced Goal Section */}
                        <div className="mt-12 pt-12 border-t" style={{ borderColor: premiumColors.borderGray }}>
                          <div className="text-left">
                            <p className="text-lg md:text-xl font-bold mb-4" style={{ 
                              color: premiumColors.textDark,
                              lineHeight: '1.4'
                            }}>
                              Our Goal
                            </p>
                            <p className="text-base md:text-lg font-normal leading-relaxed" style={{ 
                              color: premiumColors.textGray,
                              lineHeight: '1.7'
                            }}>
                              {subsidiary.goal}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Enhanced Show More/Less Button */}
                  <div className="mt-8 flex justify-center">
                    <Button
                      variant={isExpanded ? 'primary' : 'secondary'}
                      size="md"
                      onClick={() => toggleCard(subsidiary.id)}
                      className="flex items-center gap-2"
                    >
                      <span>{isExpanded ? 'Show less' : 'Show more'}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>

          {/* Enhanced Closing Statement - Integrated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
            style={{
              paddingTop: 'clamp(32px, 4vw, 48px)',
              borderTop: '1px solid rgba(1, 178, 178, 0.1)'
            }}
          >
            <p 
              className="body-large-unified"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(17px, 2vw, 22px)',
                lineHeight: '1.8',
                color: 'var(--color-text-secondary)',
                margin: 0,
                textAlign: 'center',
                whiteSpace: 'normal',
                wordWrap: 'break-word',
                maxWidth: '100%'
              }}
            >
              <span style={{ 
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-inter), Inter, sans-serif'
              }}>
                ZHH Group Holding
              </span>{' '}
              continues to expand its legacy as an{' '}
              <span style={{
                fontWeight: 600,
                color: '#0D9488',
                fontFamily: 'var(--font-inter), Inter, sans-serif'
              }}>
                Emirati-driven enterprise
              </span>{' '}
              that builds, trades, and invests with integrity and innovation — strengthening the UAE's role as a{' '}
              <span style={{
                fontWeight: 600,
                color: '#0D9488',
                fontFamily: 'var(--font-inter), Inter, sans-serif'
              }}>
                global hub for excellence
              </span>.
            </p>
          </motion.div>
        </div>

      </div>
    </motion.section>
    </>
  );
}


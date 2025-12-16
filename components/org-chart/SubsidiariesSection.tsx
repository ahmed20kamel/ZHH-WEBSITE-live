'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { subsidiaries, premiumColors } from './types';

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
    >
      <div className="container-unified">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="inline-block mb-md"
          >
            <div className="w-16 h-1 mx-auto rounded-full" style={{ 
              background: `linear-gradient(90deg, ${premiumColors.darkBlue}, ${premiumColors.tealBlue}, ${premiumColors.darkBlue})`
            }} />
          </motion.div>
          <h2 className="h2-unified text-primary-color mb-lg" style={{
            background: `linear-gradient(135deg, ${premiumColors.textDark} 0%, ${premiumColors.darkBlue} 50%, ${premiumColors.tealBlue} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.1',
            letterSpacing: '-0.03em'
          }}>
            Our Subsidiaries
          </h2>
          <p className="body-large-unified text-secondary-color max-w-3xl mx-auto">
            Four powerful divisions, one unified vision for excellence
          </p>
        </motion.div>

        {/* Enhanced Subsidiaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10">
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
                className="relative bg-white rounded-3xl border overflow-hidden transition-all duration-500"
                style={{ 
                  borderColor: isExpanded ? premiumColors.darkBlue : premiumColors.borderGray,
                  padding: '40px 44px',
                  boxShadow: isExpanded
                    ? '0 20px 60px rgba(10, 61, 98, 0.12), 0 8px 24px rgba(10, 61, 98, 0.08)'
                    : '0 4px 16px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Subtle Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  style={{
                    background: `linear-gradient(135deg, ${premiumColors.darkBlue}08 0%, ${premiumColors.tealBlue}05 100%)`
                  }}
                  animate={isExpanded ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative z-10 w-full max-w-full">
                  {/* Enhanced Logo Section */}
                  <div className="mb-10 flex items-center justify-center">
                    <motion.div 
                      className="relative h-28 w-28 md:h-32 md:w-32 flex items-center justify-center p-4 rounded-2xl"
                      style={{
                        backgroundColor: premiumColors.lightGray,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
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
                  <div className="mb-8 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ 
                      color: premiumColors.textDark,
                      lineHeight: '1.3',
                      letterSpacing: '-0.02em'
                    }}>
                      {subsidiary.name}
                    </h3>
                    <p className="text-lg md:text-xl font-semibold" style={{ 
                      color: premiumColors.darkBlue,
                      lineHeight: '1.5'
                    }}>
                      {subsidiary.tagline}
                    </p>
                  </div>

                  {/* Enhanced Description */}
                  <div className="mb-8">
                    <p className="text-base md:text-lg font-normal text-left leading-relaxed" style={{ 
                      color: premiumColors.textGray,
                      lineHeight: '1.7'
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
                    <motion.button
                      onClick={() => toggleCard(subsidiary.id)}
                      className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold transition-all"
                      style={{
                        backgroundColor: isExpanded ? premiumColors.darkBlue : premiumColors.lightGray,
                        border: `1.5px solid ${isExpanded ? premiumColors.darkBlue : premiumColors.borderGray}`,
                        color: isExpanded ? 'white' : premiumColors.darkBlue,
                        boxShadow: isExpanded 
                          ? '0 4px 12px rgba(10, 61, 98, 0.2)'
                          : '0 2px 6px rgba(0, 0, 0, 0.06)'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: premiumColors.darkBlue,
                        color: 'white',
                        borderColor: premiumColors.darkBlue,
                        boxShadow: '0 6px 16px rgba(10, 61, 98, 0.25)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-sm md:text-base">
                        {expandedCards.has(subsidiary.id) ? 'Show less' : 'Show more'}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedCards.has(subsidiary.id) ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>

    {/* Enhanced Closing Statement */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="relative py-16 md:py-20 px-6 md:px-8 lg:px-12"
      style={{ 
        backgroundColor: premiumColors.bgGray,
        borderTop: `1px solid ${premiumColors.borderGray}`,
        marginTop: '0'
      }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-1 mx-auto rounded-full" style={{ 
              background: `linear-gradient(90deg, ${premiumColors.darkBlue}, ${premiumColors.tealBlue}, ${premiumColors.darkBlue})`
            }} />
          </motion.div>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-normal" style={{
            color: premiumColors.textGray,
            lineHeight: '1.7'
          }}>
            <span className="font-bold" style={{ color: premiumColors.textDark }}>
              ZHH Group Holding
            </span>{' '}
            continues to expand its legacy as an{' '}
            <span className="font-bold" style={{
              background: `linear-gradient(135deg, ${premiumColors.darkBlue}, ${premiumColors.tealBlue})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Emirati-driven enterprise
            </span>{' '}
            that builds, trades, and invests with integrity and innovation — strengthening the UAE's role as a{' '}
            <span className="font-bold" style={{
              background: `linear-gradient(135deg, ${premiumColors.tealBlue}, #10B981)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              global hub for excellence
            </span>.
          </p>
        </div>
      </div>
    </motion.section>
    </>
  );
}


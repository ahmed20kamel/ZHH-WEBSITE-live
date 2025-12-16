'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Users2, ArrowRight, MapPin, Briefcase, Search, Sparkles
} from 'lucide-react';
import { Person, orgData, premiumColors } from './types';
import { ProfileModal } from './OrgChartComponents';

export default function OrgChartSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);

  // Separate Chairman from other people
  const chairman = orgData.flatMap(level => level.people).find(p => p.title === 'Chairman');
  const otherPeople = orgData.flatMap(level => level.people).filter(p => p.title !== 'Chairman');

  return (
    <motion.div
      ref={sectionRef}
      className="relative section-unified border-t bg-light"
      style={{ 
        borderTopColor: premiumColors.borderGray,
      }}
    >
      <div className="container-unified">
        {/* Header - Enhanced Professional Design */}
        <div className="text-center mb-xl">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center justify-center gap-3 mb-md"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#0A3D62] to-transparent" />
            <Sparkles className="w-6 h-6 text-primary-dark" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#0A3D62] to-transparent" />
          </motion.div>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h1-unified text-primary-color mb-md"
            style={{ 
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              background: `linear-gradient(135deg, ${premiumColors.textDark} 0%, ${premiumColors.darkBlue} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Leadership Team
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="body-large-unified text-secondary-color max-w-2xl mx-auto"
          >
            Exceptional leaders driving innovation and excellence across all divisions
          </motion.p>
        </div>

        {/* Chairman - Single Row */}
        {chairman && (
          <div className="max-w-7xl mx-auto mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center"
            >
              <motion.div
                className="relative group w-full max-w-md"
                onHoverStart={() => setHoveredPerson(chairman.id)}
                onHoverEnd={() => setHoveredPerson(null)}
              >
                {(() => {
                  const isHovered = hoveredPerson === chairman.id;
                  return (
                    <motion.button
                      onClick={() => setSelectedPerson(chairman)}
                      className="w-full relative overflow-hidden rounded-xl text-left"
                      style={{
                        background: isHovered 
                          ? `linear-gradient(135deg, ${premiumColors.darkBlue} 0%, ${premiumColors.tealBlue} 100%)`
                          : 'white',
                        border: `1.5px solid ${isHovered ? premiumColors.darkBlue : premiumColors.borderGray}`,
                        padding: '18px 20px',
                        boxShadow: isHovered 
                          ? '0 8px 24px rgba(10, 61, 98, 0.12), 0 2px 8px rgba(10, 61, 98, 0.08)'
                          : '0 2px 6px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -3
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0"
                        style={{
                          background: isHovered 
                            ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)'
                            : 'linear-gradient(135deg, rgba(10, 61, 98, 0.02) 0%, transparent 100%)'
                        }}
                        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="relative z-10 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            {chairman.hasPhoto && chairman.photo ? (
                              <motion.div
                                className="w-14 h-14 rounded-xl overflow-hidden border-2 relative"
                                style={{ 
                                  borderColor: isHovered ? 'rgba(255,255,255,0.3)' : premiumColors.borderGray,
                                  boxShadow: isHovered 
                                    ? '0 4px 12px rgba(0, 0, 0, 0.15)'
                                    : '0 2px 6px rgba(0, 0, 0, 0.08)'
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              >
                                <img 
                                  src={chairman.photo} 
                                  alt={chairman.name}
                                  className="w-full h-full object-cover"
                                />
                              </motion.div>
                            ) : (
                              <motion.div
                                className="w-14 h-14 rounded-xl flex items-center justify-center border-2 text-lg font-bold"
                                style={{ 
                                  backgroundColor: chairman.gender === 'female' ? '#F3E8FF' : '#E0F2FE',
                                  borderColor: isHovered ? 'rgba(255,255,255,0.3)' : premiumColors.borderGray,
                                  color: chairman.gender === 'female' ? '#9333EA' : '#0284C7',
                                  boxShadow: isHovered 
                                    ? '0 4px 12px rgba(0, 0, 0, 0.15)'
                                    : '0 2px 6px rgba(0, 0, 0, 0.08)'
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              >
                                {chairman.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                              </motion.div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <motion.h3
                              className="font-bold text-base md:text-lg mb-0.5 truncate"
                              style={{ 
                                color: isHovered ? 'white' : premiumColors.textDark,
                                lineHeight: '1.3',
                                letterSpacing: '-0.01em'
                              }}
                            >
                              {chairman.name}
                            </motion.h3>
                            <motion.p
                              className="font-semibold text-xs md:text-sm truncate"
                              style={{ 
                                color: isHovered ? 'rgba(255,255,255,0.9)' : premiumColors.darkBlue,
                                lineHeight: '1.3'
                              }}
                            >
                              {chairman.title}
                            </motion.p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <motion.div
                            className="flex items-center gap-1.5 text-xs"
                            style={{ 
                              color: isHovered ? 'rgba(255,255,255,0.8)' : premiumColors.textLight
                            }}
                          >
                            <Briefcase className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{chairman.department}</span>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-1.5 text-xs"
                            style={{ 
                              color: isHovered ? 'rgba(255,255,255,0.8)' : premiumColors.textLight
                            }}
                          >
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{chairman.location}</span>
                          </motion.div>
                        </div>
                        <motion.div
                          className="flex items-center justify-end gap-1.5 pt-2 border-t"
                          style={{ 
                            borderColor: isHovered ? 'rgba(255,255,255,0.2)' : premiumColors.borderGray
                          }}
                          animate={{ 
                            opacity: isHovered ? 1 : 0.6
                          }}
                        >
                          <span 
                            className="text-xs font-medium"
                            style={{ 
                              color: isHovered ? 'white' : premiumColors.darkBlue
                            }}
                          >
                            View Details
                          </span>
                          <ArrowRight 
                            className="w-3.5 h-3.5" 
                            style={{ color: isHovered ? 'white' : premiumColors.darkBlue }}
                          />
                        </motion.div>
                      </div>
                    </motion.button>
                  );
                })()}
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* Other People - Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {otherPeople.map((person, idx) => {
              const isHovered = hoveredPerson === person.id;
              
              return (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.5 + idx * 0.04,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  onHoverStart={() => setHoveredPerson(person.id)}
                  onHoverEnd={() => setHoveredPerson(null)}
                  className="relative group"
                >
                  {/* Compact Card Design */}
                  <motion.button
                    onClick={() => setSelectedPerson(person)}
                    className="w-full h-full relative overflow-hidden rounded-xl text-left"
                    style={{
                      background: isHovered 
                        ? `linear-gradient(135deg, ${premiumColors.darkBlue} 0%, ${premiumColors.tealBlue} 100%)`
                        : 'white',
                      border: `1.5px solid ${isHovered ? premiumColors.darkBlue : premiumColors.borderGray}`,
                      padding: '18px 20px',
                      boxShadow: isHovered 
                        ? '0 8px 24px rgba(10, 61, 98, 0.12), 0 2px 8px rgba(10, 61, 98, 0.08)'
                        : '0 2px 6px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -3
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Subtle Background Pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-0"
                      style={{
                        background: isHovered 
                          ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)'
                          : 'linear-gradient(135deg, rgba(10, 61, 98, 0.02) 0%, transparent 100%)'
                      }}
                      animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Compact Content */}
                    <div className="relative z-10 flex flex-col gap-3">
                      {/* Avatar and Name Row */}
                      <div className="flex items-center gap-3">
                        {/* Compact Avatar */}
                        <div className="flex-shrink-0">
                          {person.hasPhoto && person.photo ? (
                            <motion.div
                              className="w-14 h-14 rounded-xl overflow-hidden border-2 relative"
                              style={{ 
                                borderColor: isHovered ? 'rgba(255,255,255,0.3)' : premiumColors.borderGray,
                                boxShadow: isHovered 
                                  ? '0 4px 12px rgba(0, 0, 0, 0.15)'
                                  : '0 2px 6px rgba(0, 0, 0, 0.08)'
                              }}
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                              <img 
                                src={person.photo} 
                                alt={person.name}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          ) : (
                            <motion.div
                              className="w-14 h-14 rounded-xl flex items-center justify-center border-2 text-lg font-bold"
                              style={{ 
                                backgroundColor: person.gender === 'female' ? '#F3E8FF' : '#E0F2FE',
                                borderColor: isHovered ? 'rgba(255,255,255,0.3)' : premiumColors.borderGray,
                                color: person.gender === 'female' ? '#9333EA' : '#0284C7',
                                boxShadow: isHovered 
                                  ? '0 4px 12px rgba(0, 0, 0, 0.15)'
                                  : '0 2px 6px rgba(0, 0, 0, 0.08)'
                              }}
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                              {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </motion.div>
                          )}
                        </div>

                        {/* Name and Title */}
                        <div className="flex-1 min-w-0">
                          <motion.h3
                            className="font-bold text-base md:text-lg mb-0.5 truncate"
                            style={{ 
                              color: isHovered ? 'white' : premiumColors.textDark,
                              lineHeight: '1.3',
                              letterSpacing: '-0.01em'
                            }}
                          >
                            {person.name}
                          </motion.h3>
                          <motion.p
                            className="font-semibold text-xs md:text-sm truncate"
                            style={{ 
                              color: isHovered ? 'rgba(255,255,255,0.9)' : premiumColors.darkBlue,
                              lineHeight: '1.3'
                            }}
                          >
                            {person.title}
                          </motion.p>
                        </div>
                      </div>

                      {/* Department and Location - Compact */}
                      <div className="flex flex-col gap-1.5">
                        <motion.div
                          className="flex items-center gap-1.5 text-xs"
                          style={{ 
                            color: isHovered ? 'rgba(255,255,255,0.8)' : premiumColors.textLight
                          }}
                        >
                          <Briefcase className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{person.department}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-1.5 text-xs"
                          style={{ 
                            color: isHovered ? 'rgba(255,255,255,0.8)' : premiumColors.textLight
                          }}
                        >
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{person.location}</span>
                        </motion.div>
                      </div>

                      {/* View Details Button - Compact */}
                      <motion.div
                        className="flex items-center justify-end gap-1.5 pt-2 border-t"
                        style={{ 
                          borderColor: isHovered ? 'rgba(255,255,255,0.2)' : premiumColors.borderGray
                        }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0.6
                        }}
                      >
                        <span 
                          className="text-xs font-medium"
                          style={{ 
                            color: isHovered ? 'white' : premiumColors.darkBlue
                          }}
                        >
                          View Details
                        </span>
                        <ArrowRight 
                          className="w-3.5 h-3.5" 
                          style={{ color: isHovered ? 'white' : premiumColors.darkBlue }}
                        />
                      </motion.div>
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
          
          {otherPeople.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style={{ 
                  backgroundColor: premiumColors.lightGray,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
              >
                <Search className="w-10 h-10" style={{ color: premiumColors.textLight }} />
              </div>
              <p 
                className="text-xl font-semibold mb-2"
                style={{ color: premiumColors.textDark }}
              >
                No results found
              </p>
              <p style={{ color: premiumColors.textGray }}>
                Try a different search term
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedPerson && (
          <ProfileModal
            person={selectedPerson}
            onClose={() => setSelectedPerson(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}


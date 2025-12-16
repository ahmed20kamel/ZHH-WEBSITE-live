'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, MapPin, Mail, Phone, Award, Target, UserCheck, MessageSquare } from 'lucide-react';
import ShowMoreButton from './ShowMoreButton';

import { Person, premiumColors } from '@/components/org-chart/types';

interface ProfileModalProps {
  person: Person;
  onClose: () => void;
}

// Avatar Component
const Avatar = ({ person, size = 'lg' }: { person: Person; size?: 'sm' | 'lg' | 'xl' }) => {
  const sizeClass = {
    sm: 'w-20 h-20',
    lg: 'w-24 h-24',
    xl: 'w-28 h-28'
  }[size];

  if (person.hasPhoto && person.photo) {
    return (
      <div 
        className={`relative ${sizeClass} rounded-full overflow-hidden border-4 border-white shadow-lg`}
        style={{ 
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
        }}
      >
        <img 
          src={person.photo} 
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Fallback: Initials
  const initials = person.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div 
      className={`${sizeClass} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}
      style={{ 
        backgroundColor: premiumColors.darkBlue,
        color: 'white',
        fontSize: size === 'xl' ? '32px' : size === 'lg' ? '28px' : '20px',
        fontWeight: 600,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
      }}
    >
      {initials}
    </div>
  );
};

export default function ProfileModal({ person, onClose }: ProfileModalProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['bio']));

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const getShortText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    const truncated = text.substring(0, maxLength).trim();
    const lastSpace = truncated.lastIndexOf(' ');
    const cutPoint = lastSpace > maxLength * 0.7 ? lastSpace : maxLength;
    return truncated.substring(0, cutPoint) + '...';
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        style={{ 
          padding: 'clamp(16px, 2vw, 24px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)'
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
        
        {/* Modal Container - Mobile-first, Responsive */}
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ 
            width: '100%',
            maxWidth: 'min(90vw, 520px)',
            maxHeight: '90vh',
            boxShadow: '0 32px 80px rgba(0, 0, 0, 0.25), 0 12px 32px rgba(0, 0, 0, 0.15)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Close Button */}
          <div 
            className="relative flex items-center justify-end"
            style={{ 
              padding: 'clamp(20px, 2.5vw, 24px)',
              paddingBottom: 'clamp(16px, 2vw, 20px)'
            }}
          >
            {/* Close Button - Large, Circular, Easy to Tap */}
            <motion.button
              onClick={onClose}
              className="flex items-center justify-center rounded-full transition-all"
              style={{ 
                width: 'clamp(36px, 4.5vw, 40px)',
                height: 'clamp(36px, 4.5vw, 40px)',
                minWidth: '36px',
                minHeight: '36px',
                backgroundColor: premiumColors.lightGray,
                color: premiumColors.textDark,
                border: `1px solid ${premiumColors.borderGray}`
              }}
              whileHover={{ 
                backgroundColor: premiumColors.darkBlue,
                color: 'white',
                scale: 1.1,
                borderColor: premiumColors.darkBlue
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close modal"
            >
              <X 
                className="w-5 h-5" 
                style={{ 
                  strokeWidth: 2.5
                }}
              />
            </motion.button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1" style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: `${premiumColors.borderGray} transparent`
          }}>
            <div style={{ 
              paddingLeft: 'clamp(24px, 3vw, 32px)',
              paddingRight: 'clamp(24px, 3vw, 32px)',
              paddingBottom: 'clamp(24px, 3vw, 32px)'
            }}>
              {/* Profile Header - Centered */}
              <div 
                className="flex flex-col items-center text-center"
                style={{ 
                  paddingTop: 'clamp(8px, 1vw, 12px)',
                  paddingBottom: 'clamp(24px, 3vw, 32px)'
                }}
              >
                {/* Profile Image - Circular, Centered */}
                <div style={{ marginBottom: 'clamp(20px, 2.5vw, 24px)' }}>
                  <Avatar person={person} size="xl" />
                </div>
                
                {/* Full Name - Bold, Clear Hierarchy */}
                <h3 
                  className="font-bold"
                  style={{ 
                    color: premiumColors.textDark,
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    lineHeight: 1.3,
                    marginBottom: 'clamp(8px, 1vw, 12px)',
                    fontWeight: 700
                  }}
                >
                  {person.name}
                </h3>
                
                {/* Job Title */}
                <p 
                  className="font-semibold"
                  style={{ 
                    color: premiumColors.darkBlue,
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    lineHeight: 1.5,
                    marginBottom: 'clamp(12px, 1.5vw, 16px)',
                    fontWeight: 600
                  }}
                >
                  {person.title}
                </p>
                
                {/* Location with Icon */}
                <div 
                  className="flex items-center justify-center gap-2"
                  style={{ 
                    color: premiumColors.textLight,
                    fontSize: 'clamp(14px, 1.75vw, 16px)',
                    lineHeight: 1.6
                  }}
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{person.location}</span>
                </div>
              </div>

              {/* Divider */}
              <div 
                style={{ 
                  height: '1px',
                  backgroundColor: premiumColors.borderGray,
                  marginBottom: 'clamp(24px, 3vw, 32px)'
                }}
              />

              {/* Bio / Description Section */}
              {person.bio && person.bio.trim() !== '' && (
                <div style={{ marginBottom: 'clamp(24px, 3vw, 32px)' }}>
                  <h4 
                    className="font-bold mb-4 flex items-center gap-3"
                    style={{ 
                      color: premiumColors.textDark,
                      fontSize: 'clamp(18px, 2.25vw, 22px)',
                      lineHeight: 1.4,
                      marginBottom: 'clamp(16px, 2vw, 20px)'
                    }}
                  >
                    <div 
                      className="flex items-center justify-center rounded-xl"
                      style={{ 
                        width: 'clamp(36px, 4.5vw, 40px)',
                        height: 'clamp(36px, 4.5vw, 40px)',
                        backgroundColor: premiumColors.darkBlue + '10'
                      }}
                    >
                      <UserCheck className="w-5 h-5" style={{ color: premiumColors.darkBlue }} />
                    </div>
                    Biography
                  </h4>
                  
                  <motion.p
                    initial={false}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      color: premiumColors.textGray,
                      lineHeight: 1.8,
                      fontSize: 'clamp(15px, 1.875vw, 17px)',
                      marginBottom: person.bio.length > 150 ? 'clamp(16px, 2vw, 20px)' : '0'
                    }}
                  >
                    {expandedSections.has('bio') ? person.bio : getShortText(person.bio)}
                  </motion.p>

                  {person.bio.length > 150 && (
                    <div className="mt-4">
                      <ShowMoreButton
                        isExpanded={expandedSections.has('bio')}
                        onClick={() => toggleSection('bio')}
                        size="md"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Key Achievements */}
              {person.achievements && person.achievements.length > 0 && (
                <div style={{ marginBottom: 'clamp(24px, 3vw, 32px)' }}>
                  <h4 
                    className="font-bold mb-4 flex items-center gap-3"
                    style={{ 
                      color: premiumColors.textDark,
                      fontSize: 'clamp(18px, 2.25vw, 22px)',
                      lineHeight: 1.4,
                      marginBottom: 'clamp(16px, 2vw, 20px)'
                    }}
                  >
                    <div 
                      className="flex items-center justify-center rounded-xl"
                      style={{ 
                        width: 'clamp(36px, 4.5vw, 40px)',
                        height: 'clamp(36px, 4.5vw, 40px)',
                        backgroundColor: premiumColors.darkBlue + '10'
                      }}
                    >
                      <Award className="w-5 h-5" style={{ color: premiumColors.darkBlue }} />
                    </div>
                    Key Achievements
                  </h4>
                  <ul style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(12px, 1.5vw, 16px)',
                    paddingLeft: 0,
                    listStyle: 'none'
                  }}>
                    {person.achievements.map((achievement, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3"
                      >
                        <div 
                          className="rounded-full flex-shrink-0 mt-1.5"
                          style={{ 
                            width: '8px',
                            height: '8px',
                            backgroundColor: premiumColors.darkBlue,
                            boxShadow: `0 0 0 4px ${premiumColors.darkBlue}15`
                          }}
                        />
                        <span 
                          style={{ 
                            color: premiumColors.textGray,
                            lineHeight: 1.8,
                            fontSize: 'clamp(15px, 1.875vw, 17px)',
                            flex: 1
                          }}
                        >
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Areas of Expertise */}
              {person.expertise && person.expertise.length > 0 && (
                <div style={{ marginBottom: 'clamp(24px, 3vw, 32px)' }}>
                  <h4 
                    className="font-bold mb-4 flex items-center gap-3"
                    style={{ 
                      color: premiumColors.textDark,
                      fontSize: 'clamp(18px, 2.25vw, 22px)',
                      lineHeight: 1.4,
                      marginBottom: 'clamp(16px, 2vw, 20px)'
                    }}
                  >
                    <div 
                      className="flex items-center justify-center rounded-xl"
                      style={{ 
                        width: 'clamp(36px, 4.5vw, 40px)',
                        height: 'clamp(36px, 4.5vw, 40px)',
                        backgroundColor: premiumColors.darkBlue + '10'
                      }}
                    >
                      <Target className="w-5 h-5" style={{ color: premiumColors.darkBlue }} />
                    </div>
                    Areas of Expertise
                  </h4>
                  <div 
                    className="flex flex-wrap"
                    style={{ 
                      gap: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    {person.expertise.map((skill, idx) => (
                      <motion.span 
                        key={idx}
                        className="px-4 py-2 rounded-xl font-semibold border"
                        style={{ 
                          backgroundColor: premiumColors.lightGray,
                          borderColor: premiumColors.borderGray,
                          color: premiumColors.textDark,
                          fontSize: 'clamp(13px, 1.625vw, 15px)'
                        }}
                        whileHover={{
                          backgroundColor: premiumColors.darkBlue,
                          color: 'white',
                          borderColor: premiumColors.darkBlue,
                          scale: 1.05
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              {(person.email || person.phone) && (
                <div>
                  <h4 
                    className="font-bold mb-4 flex items-center gap-3"
                    style={{ 
                      color: premiumColors.textDark,
                      fontSize: 'clamp(18px, 2.25vw, 22px)',
                      lineHeight: 1.4,
                      marginBottom: 'clamp(16px, 2vw, 20px)'
                    }}
                  >
                    <div 
                      className="flex items-center justify-center rounded-xl"
                      style={{ 
                        width: 'clamp(36px, 4.5vw, 40px)',
                        height: 'clamp(36px, 4.5vw, 40px)',
                        backgroundColor: premiumColors.darkBlue + '10'
                      }}
                    >
                      <MessageSquare className="w-5 h-5" style={{ color: premiumColors.darkBlue }} />
                    </div>
                    Contact Information
                  </h4>
                  <div 
                    className="flex flex-col"
                    style={{ 
                      gap: 'clamp(12px, 1.5vw, 16px)'
                    }}
                  >
                    {person.email && (
                      <motion.a 
                        href={`mailto:${person.email}`}
                        className="flex items-center gap-4 p-4 rounded-xl border-2 transition-all"
                        style={{ 
                          backgroundColor: premiumColors.bgGray,
                          borderColor: premiumColors.borderGray,
                          textDecoration: 'none'
                        }}
                        whileHover={{
                          borderColor: premiumColors.darkBlue,
                          backgroundColor: premiumColors.lightGray,
                          scale: 1.02
                        }}
                      >
                        <div 
                          className="flex items-center justify-center rounded-xl flex-shrink-0"
                          style={{ 
                            width: 'clamp(44px, 5.5vw, 48px)',
                            height: 'clamp(44px, 5.5vw, 48px)',
                            backgroundColor: premiumColors.darkBlue + '15'
                          }}
                        >
                          <Mail className="w-5 h-5" style={{ color: premiumColors.darkBlue }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div 
                            className="text-xs font-bold uppercase tracking-wide mb-1"
                            style={{ color: premiumColors.textLight }}
                          >
                            Email
                          </div>
                          <div 
                            className="font-semibold truncate"
                            style={{ 
                              color: premiumColors.textDark,
                              fontSize: 'clamp(14px, 1.75vw, 16px)'
                            }}
                          >
                            {person.email}
                          </div>
                        </div>
                      </motion.a>
                    )}
                    {person.phone && (
                      <motion.a 
                        href={`tel:${person.phone}`}
                        className="flex items-center gap-4 p-4 rounded-xl border-2 transition-all"
                        style={{ 
                          backgroundColor: premiumColors.bgGray,
                          borderColor: premiumColors.borderGray,
                          textDecoration: 'none'
                        }}
                        whileHover={{
                          borderColor: premiumColors.darkBlue,
                          backgroundColor: premiumColors.lightGray,
                          scale: 1.02
                        }}
                      >
                        <div 
                          className="flex items-center justify-center rounded-xl flex-shrink-0"
                          style={{ 
                            width: 'clamp(44px, 5.5vw, 48px)',
                            height: 'clamp(44px, 5.5vw, 48px)',
                            backgroundColor: premiumColors.darkBlue + '15'
                          }}
                        >
                          <Phone className="w-5 h-5" style={{ color: premiumColors.darkBlue }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div 
                            className="text-xs font-bold uppercase tracking-wide mb-1"
                            style={{ color: premiumColors.textLight }}
                          >
                            Phone
                          </div>
                          <div 
                            className="font-semibold"
                            style={{ 
                              color: premiumColors.textDark,
                              fontSize: 'clamp(14px, 1.75vw, 16px)'
                            }}
                          >
                            {person.phone}
                          </div>
                        </div>
                      </motion.a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


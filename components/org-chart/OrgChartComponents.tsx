'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ChevronRight, Building, MapPin, Users2,
  Mail, Phone, UserCheck, Award, Target, MessageSquare,
  Briefcase
} from 'lucide-react';
import { Person, OrgLevel, premiumColors } from './types';
import ShowMoreButton from '@/components/ui/ShowMoreButton';

// Clean Avatar Component - Soft & Minimal Design
export const Avatar = ({ person, size = 'lg' }: { person: Person; size?: 'sm' | 'lg' | 'xl' }) => {
  const sizeClass = {
    sm: 'w-20 h-20',
    lg: 'w-24 h-24',
    xl: 'w-28 h-28'
  }[size];

  if (person.hasPhoto && person.photo) {
    return (
      <div 
        className={`relative ${sizeClass} rounded-xl overflow-hidden border`} 
        style={{ 
          borderColor: premiumColors.borderGray,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
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

  const bgColor = person.gender === 'female' 
    ? '#F3E8FF' 
    : '#E0F2FE';
  const textColor = person.gender === 'female'
    ? '#9333EA'
    : '#0284C7';
  const initials = person.name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div 
      className={`relative ${sizeClass} rounded-xl flex items-center justify-center border`}
      style={{ 
        backgroundColor: bgColor,
        borderColor: premiumColors.borderGray,
        color: textColor,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}
    >
      <span className={`${
        size === 'sm' ? 'text-lg' :
        size === 'lg' ? 'text-xl' : 'text-2xl'
      } font-semibold`}>
        {initials}
      </span>
    </div>
  );
};

// Premium Org Node Component - Clean & Professional with Perfect Alignment
export const OrgNode = ({ person, level, onSelect, isExpanded }: { 
  person: Person; 
  level: OrgLevel | null;
  onSelect: (person: Person) => void;
  isExpanded?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  // Helper function to get short bio (~80 chars)
  const getShortBio = (bio: string) => {
    if (bio.length <= 80) return bio;
    const truncated = bio.substring(0, 80).trim();
    const lastSpace = truncated.lastIndexOf(' ');
    const cutPoint = lastSpace > 60 ? lastSpace : 80;
    return truncated.substring(0, cutPoint) + '...';
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCardExpanded(!isCardExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group h-full flex"
    >
      {/* Enhanced Main Card - Professional Design */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        className="relative bg-white rounded-2xl border transition-all duration-400 w-full flex flex-col"
        style={{ 
          borderColor: isHovered ? premiumColors.darkBlue : premiumColors.borderGray,
          boxShadow: isHovered 
            ? '0 16px 40px rgba(10, 61, 98, 0.15), 0 6px 16px rgba(10, 61, 98, 0.1)'
            : '0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)'
        }}
      >
        {/* Enhanced Padding - Professional Spacing */}
        <div 
          className="flex flex-col items-center text-center"
          style={{ 
            padding: 'clamp(28px, 3.5vw, 36px)',
            justifyContent: 'flex-start',
            minHeight: '300px',
            height: '100%'
          }}
        >
          {/* Top Section - Avatar, Name, Title */}
          <div className="flex flex-col items-center w-full" style={{ gap: 'clamp(12px, 1.5vw, 16px)' }}>
            {/* Avatar - Centered with Consistent Size */}
            <div className="flex justify-center" style={{ marginBottom: 'clamp(8px, 1vw, 12px)' }}>
              <Avatar person={person} size="sm" />
            </div>

            {/* Enhanced Name & Title */}
            <div className="w-full">
              <h4 
                className="font-bold"
                style={{ 
                  color: premiumColors.textDark,
                  fontSize: 'clamp(15px, 1.7vw, 18px)',
                  lineHeight: '1.4',
                  letterSpacing: '-0.01em',
                  marginBottom: 'clamp(8px, 1vw, 12px)'
                }}
              >
                {person.name}
              </h4>
              <p 
                className="font-semibold"
                style={{ 
                  color: premiumColors.darkBlue,
                  fontSize: 'clamp(13px, 1.5vw, 15px)',
                  lineHeight: '1.5',
                  marginBottom: 'clamp(12px, 1.5vw, 16px)'
                }}
              >
                {person.title}
              </p>
            </div>

            {/* Department & Location - Centered */}
            <div className="w-full flex flex-col" style={{ gap: 'clamp(6px, 0.8vw, 8px)', marginBottom: 'clamp(12px, 1.5vw, 16px)' }}>
              <div 
                className="flex items-center justify-center gap-2"
                style={{ 
                  color: premiumColors.textLight, 
                  fontSize: 'clamp(11px, 1.2vw, 13px)', 
                  lineHeight: '1.5' 
                }}
              >
                <Building className="w-3 h-3 flex-shrink-0" />
                <span className="truncate max-w-full">{person.department}</span>
              </div>
              <div 
                className="flex items-center justify-center gap-2"
                style={{ 
                  color: premiumColors.textLight, 
                  fontSize: 'clamp(11px, 1.2vw, 13px)', 
                  lineHeight: '1.5' 
                }}
              >
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span>{person.location}</span>
              </div>
            </div>

            {/* Bio - Short by default, expandable - Only show if bio exists */}
            {person.bio && person.bio.trim() !== '' && (
              <div className="w-full" style={{ marginTop: 'clamp(8px, 1vw, 12px)' }}>
                <motion.div
                  initial={false}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-left"
                >
                  <p 
                    style={{ 
                      color: premiumColors.textGray,
                      fontSize: 'clamp(12px, 1.3vw, 14px)',
                      lineHeight: '1.6',
                      marginBottom: person.bio.length > 80 ? (isCardExpanded ? 'clamp(12px, 1.5vw, 16px)' : '0') : '0'
                    }}
                  >
                    {isCardExpanded ? person.bio : getShortBio(person.bio)}
                  </p>
                </motion.div>

                {/* Show More/Less Button */}
                {person.bio.length > 80 && (
                  <div className="mt-4 mb-1">
                    <ShowMoreButton
                      isExpanded={isCardExpanded}
                      onClick={handleCardClick}
                      size="sm"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Section - Reports Count & Hover Effect */}
          <div className="w-full mt-auto" style={{ marginTop: '16px' }}>
            {/* Reports Count - Centered */}
            {person.reportsCount > 0 && (
              <div 
                className="flex items-center justify-center gap-2 pt-3 border-t"
                style={{ 
                  borderColor: premiumColors.borderGray,
                  paddingTop: '12px'
                }}
              >
                <Users2 className="w-3 h-3 flex-shrink-0" style={{ color: premiumColors.slateGray }} />
                <span 
                  style={{ 
                    color: premiumColors.textLight,
                    fontSize: '11px',
                    lineHeight: '1.4'
                  }}
                >
                  {person.reportsCount} Reports
                </span>
              </div>
            )}

            {/* Enhanced View Details Button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(person);
              }}
              className="pt-3 border-t w-full flex items-center justify-center cursor-pointer transition-all rounded-b-2xl"
              style={{ 
                borderColor: premiumColors.borderGray,
                paddingTop: person.reportsCount > 0 ? '12px' : '16px',
                marginTop: person.reportsCount > 0 ? '0' : '6px',
                backgroundColor: 'transparent',
                border: 'none',
                borderTop: `1.5px solid ${premiumColors.borderGray}`
              }}
              whileHover={{ 
                backgroundColor: premiumColors.lightGray,
                borderTopColor: premiumColors.darkBlue
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div 
                className="flex items-center gap-2.5 font-semibold"
                style={{ 
                  color: premiumColors.darkBlue,
                  fontSize: '13px',
                  lineHeight: '1.4'
                }}
              >
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Level Header Component - Professional Design
export const LevelHeader = ({ level, isExpanded, onToggle }: { 
  level: OrgLevel; 
  isExpanded?: boolean;
  onToggle?: () => void;
}) => {
  const Icon = level.icon;
  
  return (
    <motion.div 
      className="relative rounded-2xl border transition-all duration-400"
      style={{ 
        backgroundColor: premiumColors.bgGray,
        borderColor: premiumColors.borderGray,
        padding: '32px 40px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-center gap-6 flex-1">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ 
              backgroundColor: premiumColors.darkBlue + '10',
              boxShadow: '0 4px 12px rgba(10, 61, 98, 0.1)'
            }}
          >
            <Icon className="w-8 h-8" style={{ color: premiumColors.darkBlue }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <h3 
                className="text-3xl md:text-4xl font-bold"
                style={{ 
                  color: premiumColors.textDark,
                  lineHeight: '1.2',
                  letterSpacing: '-0.03em'
                }}
              >
                {level.title}
              </h3>
              <div 
                className="px-4 py-1.5 rounded-full text-xs font-bold"
                style={{ 
                  backgroundColor: premiumColors.darkBlue,
                  color: 'white',
                  boxShadow: '0 2px 6px rgba(10, 61, 98, 0.2)'
                }}
              >
                Level {level.level}
              </div>
            </div>
            <p 
              className="text-base md:text-lg mb-3"
              style={{ 
                color: premiumColors.textGray,
                lineHeight: '1.6'
              }}
            >
              {level.subtitle}
            </p>
            <div className="flex items-center gap-5">
              <div 
                className="flex items-center gap-2"
                style={{ color: premiumColors.textLight, fontSize: '13px', lineHeight: '1.5' }}
              >
                <Users2 className="w-4 h-4 flex-shrink-0" />
                <span>{level.people.length} Leaders</span>
              </div>
              <div 
                className="w-px h-4"
                style={{ backgroundColor: premiumColors.borderGray }}
              />
              <div 
                className="flex items-center gap-2"
                style={{ color: premiumColors.textLight, fontSize: '13px', lineHeight: '1.5' }}
              >
                <Briefcase className="w-4 h-4 flex-shrink-0" />
                <span>{level.people.reduce((acc, p) => acc + p.reportsCount, 0)} Reports</span>
              </div>
            </div>
          </div>
        </div>
        
        {onToggle && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggle}
            className="p-3 rounded-xl transition-all flex-shrink-0"
            style={{ 
              backgroundColor: isExpanded ? premiumColors.darkBlue : premiumColors.lightGray,
              color: isExpanded ? 'white' : premiumColors.darkBlue,
              border: `1.5px solid ${isExpanded ? premiumColors.darkBlue : premiumColors.borderGray}`,
              boxShadow: isExpanded 
                ? '0 4px 12px rgba(10, 61, 98, 0.2)'
                : '0 2px 6px rgba(0, 0, 0, 0.06)'
            }}
          >
            <ChevronRight 
              className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
            />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

// ProfileModal has been moved to components/ui/ProfileModal.tsx
// This ensures a single source of truth for the modal component


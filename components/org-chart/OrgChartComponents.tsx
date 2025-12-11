'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ChevronRight, Building, MapPin, Users2,
  Mail, Phone, UserCheck, Award, Target, MessageSquare,
  Briefcase, ChevronDown
} from 'lucide-react';
import { Person, OrgLevel, premiumColors } from './types';

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
            padding: '32px 28px',
            justifyContent: 'flex-start',
            minHeight: '300px',
            height: '100%'
          }}
        >
          {/* Top Section - Avatar, Name, Title */}
          <div className="flex flex-col items-center w-full" style={{ gap: '14px' }}>
            {/* Avatar - Centered with Consistent Size */}
            <div className="flex justify-center">
              <Avatar person={person} size="sm" />
            </div>

            {/* Enhanced Name & Title */}
            <div className="w-full">
              <h4 
                className="font-bold"
                style={{ 
                  color: premiumColors.textDark,
                  fontSize: '16px',
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em',
                  marginBottom: '6px'
                }}
              >
                {person.name}
              </h4>
              <p 
                className="font-semibold"
                style={{ 
                  color: premiumColors.darkBlue,
                  fontSize: '14px',
                  lineHeight: '1.4',
                  marginBottom: '12px'
                }}
              >
                {person.title}
              </p>
            </div>

            {/* Department & Location - Centered */}
            <div className="w-full flex flex-col" style={{ gap: '6px' }}>
              <div 
                className="flex items-center justify-center gap-2"
                style={{ color: premiumColors.textLight, fontSize: '12px', lineHeight: '1.4' }}
              >
                <Building className="w-3 h-3 flex-shrink-0" />
                <span className="truncate max-w-full">{person.department}</span>
              </div>
              <div 
                className="flex items-center justify-center gap-2"
                style={{ color: premiumColors.textLight, fontSize: '12px', lineHeight: '1.4' }}
              >
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span>{person.location}</span>
              </div>
            </div>

            {/* Bio - Short by default, expandable - Only show if bio exists */}
            {person.bio && person.bio.trim() !== '' && (
              <div className="w-full mt-2">
                <motion.div
                  initial={false}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-left"
                >
                  <p 
                    style={{ 
                      color: premiumColors.textGray,
                      fontSize: '12px',
                      lineHeight: '1.5',
                      marginBottom: person.bio.length > 80 ? (isCardExpanded ? '8px' : '0') : '0'
                    }}
                  >
                    {isCardExpanded ? person.bio : getShortBio(person.bio)}
                  </p>
                </motion.div>

                {/* Show More/Less Button */}
                {person.bio.length > 80 && (
                  <motion.button
                    onClick={handleCardClick}
                    className="flex items-center gap-1.5 mt-2 mx-auto"
                    style={{
                      color: premiumColors.darkBlue,
                      fontSize: '11px',
                      fontWeight: 500
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{isCardExpanded ? 'Show less' : 'Show more'}</span>
                    <motion.div
                      animate={{ rotate: isCardExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-3 h-3" />
                    </motion.div>
                  </motion.button>
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

// Detailed Profile Modal - Improved & Professional
export const ProfileModal = ({ person, onClose }: { person: Person; onClose: () => void }) => {
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
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
        
        {/* Premium Modal Design */}
        <motion.div
          initial={{ scale: 0.95, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 30, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          style={{ 
            boxShadow: '0 32px 80px rgba(0, 0, 0, 0.25), 0 12px 32px rgba(0, 0, 0, 0.15)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Clean & Minimal Header */}
          <div 
            className="relative px-6 md:px-8 pt-6 pb-5 flex items-center justify-between"
            style={{ 
              backgroundColor: 'white',
              borderBottom: `1px solid ${premiumColors.borderGray}`
            }}
          >
            <h2 
              className="text-lg md:text-xl font-medium"
              style={{ 
                color: premiumColors.textGray,
                lineHeight: '1.4',
                letterSpacing: '-0.01em',
                fontWeight: 500
              }}
            >
              Profile Details
            </h2>
            <motion.button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{ 
                backgroundColor: 'transparent',
                color: premiumColors.textLight
              }}
              whileHover={{ 
                backgroundColor: premiumColors.lightGray,
                scale: 1.1
              }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-lg leading-none">×</span>
            </motion.button>
          </div>
          
          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1">
            <div className="px-6 md:px-8 pb-8">
              {/* Profile Header - Clean & Balanced Design */}
              <div className="flex flex-col items-center text-center pt-8 pb-8">
                {/* Avatar - Smaller & Softer */}
                <div className="mb-5">
                  <Avatar person={person} size="lg" />
                </div>
                
                {/* Name - Clean Typography */}
                <h3 
                  className="text-2xl md:text-3xl font-semibold mb-2"
                  style={{ 
                    color: premiumColors.textDark,
                    lineHeight: '1.3',
                    letterSpacing: '-0.01em',
                    fontWeight: 600
                  }}
                >
                  {person.name}
                </h3>
                
                {/* Title - Light & Elegant */}
                <p 
                  className="text-base md:text-lg mb-4"
                  style={{ 
                    color: premiumColors.darkBlue,
                    lineHeight: '1.5',
                    fontWeight: 400
                  }}
                >
                  {person.title}
                </p>
                
                {/* Department & Location - Subtle & Clean */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm" style={{ color: premiumColors.textLight }}>
                  <span className="font-normal">{person.department}</span>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-normal">{person.location}</span>
                  </div>
                </div>
              </div>
            
              {/* Additional Details - Only show if they exist */}
              {(person.bio && person.bio.trim() !== '') || 
               (person.achievements && person.achievements.length > 0) || 
               (person.expertise && person.expertise.length > 0) || 
               (person.email || person.phone) ? (
                <div 
                  className="border-t pt-10"
                  style={{ 
                    borderColor: premiumColors.borderGray,
                    borderTopWidth: '2px'
                  }}
                >
                  <div className="space-y-10">
                    {/* Biography - Premium Section */}
                    {person.bio && person.bio.trim() !== '' && (
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <h4 
                            className="text-xl font-bold flex items-center gap-3"
                            style={{ color: premiumColors.textDark }}
                          >
                            <div 
                              className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ 
                                backgroundColor: premiumColors.darkBlue + '10'
                              }}
                            >
                              <UserCheck className="w-5 h-5" style={{ color: premiumColors.darkBlue }} />
                            </div>
                            Biography
                          </h4>
                          {person.bio.length > 150 && (
                            <motion.button
                              onClick={() => toggleSection('bio')}
                              className="flex items-center gap-2 px-4 py-2 rounded-lg"
                              style={{
                                color: premiumColors.darkBlue,
                                fontSize: '13px',
                                fontWeight: 600,
                                backgroundColor: premiumColors.lightGray,
                                border: `1px solid ${premiumColors.borderGray}`
                              }}
                              whileHover={{ 
                                scale: 1.05, 
                                backgroundColor: premiumColors.darkBlue,
                                color: 'white',
                                borderColor: premiumColors.darkBlue
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>{expandedSections.has('bio') ? 'Show less' : 'Show more'}</span>
                              <motion.div
                                animate={{ rotate: expandedSections.has('bio') ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </motion.div>
                            </motion.button>
                          )}
                        </div>
                        <motion.p
                          initial={false}
                          animate={{ height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="leading-relaxed pl-1"
                          style={{ 
                            color: premiumColors.textGray, 
                            lineHeight: '1.8',
                            fontSize: '15px'
                          }}
                        >
                          {expandedSections.has('bio') ? person.bio : getShortText(person.bio)}
                        </motion.p>
                      </div>
                    )}
                  
                    {/* Key Achievements - Premium Section */}
                    {person.achievements && person.achievements.length > 0 && (
                      <div>
                        <h4 
                          className="text-xl font-bold mb-5 flex items-center gap-3"
                          style={{ color: premiumColors.textDark }}
                        >
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ 
                              backgroundColor: premiumColors.darkBlue + '10'
                            }}
                          >
                            <Award className="w-5 h-5" style={{ color: premiumColors.darkBlue }} />
                          </div>
                          Key Achievements
                        </h4>
                        <ul className="space-y-4">
                          {person.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                              <div 
                                className="w-2.5 h-2.5 rounded-full mt-2.5 flex-shrink-0"
                                style={{ 
                                  backgroundColor: premiumColors.darkBlue,
                                  boxShadow: `0 0 0 4px ${premiumColors.darkBlue}15`
                                }}
                              />
                              <span 
                                className="leading-relaxed flex-1"
                                style={{ 
                                  color: premiumColors.textGray, 
                                  lineHeight: '1.8',
                                  fontSize: '15px'
                                }}
                              >
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Areas of Expertise - Premium Section */}
                    {person.expertise && person.expertise.length > 0 && (
                      <div>
                        <h4 
                          className="text-xl font-bold mb-5 flex items-center gap-3"
                          style={{ color: premiumColors.textDark }}
                        >
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ 
                              backgroundColor: premiumColors.darkBlue + '10'
                            }}
                          >
                            <Target className="w-5 h-5" style={{ color: premiumColors.darkBlue }} />
                          </div>
                          Areas of Expertise
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {person.expertise.map((skill, idx) => (
                            <motion.span 
                              key={idx}
                              className="px-5 py-2.5 rounded-xl font-bold border text-sm"
                              style={{ 
                                backgroundColor: premiumColors.lightGray,
                                borderColor: premiumColors.borderGray,
                                color: premiumColors.textDark
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
                  
                    {/* Contact Information - Premium Section */}
                    {(person.email || person.phone) && (
                      <div>
                        <h4 
                          className="text-xl font-bold mb-5 flex items-center gap-3"
                          style={{ color: premiumColors.textDark }}
                        >
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ 
                              backgroundColor: premiumColors.darkBlue + '10'
                            }}
                          >
                            <MessageSquare className="w-5 h-5" style={{ color: premiumColors.darkBlue }} />
                          </div>
                          Contact Information
                        </h4>
                        <div className="flex flex-col gap-4">
                          {person.email && (
                            <motion.a 
                              href={`mailto:${person.email}`}
                              className="flex items-center gap-4 p-5 rounded-2xl transition-all border-2"
                              style={{ 
                                backgroundColor: premiumColors.bgGray,
                                borderColor: premiumColors.borderGray
                              }}
                              whileHover={{
                                borderColor: premiumColors.darkBlue,
                                backgroundColor: premiumColors.lightGray,
                                scale: 1.02
                              }}
                            >
                              <div 
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                                style={{ backgroundColor: premiumColors.darkBlue + '15' }}
                              >
                                <Mail className="w-6 h-6" style={{ color: premiumColors.darkBlue }} />
                              </div>
                              <div className="flex-1">
                                <div 
                                  className="text-xs mb-1.5 font-bold uppercase tracking-wide"
                                  style={{ color: premiumColors.textLight }}
                                >
                                  Email
                                </div>
                                <div 
                                  className="font-bold text-base"
                                  style={{ color: premiumColors.textDark }}
                                >
                                  {person.email}
                                </div>
                              </div>
                            </motion.a>
                          )}
                          {person.phone && (
                            <motion.a 
                              href={`tel:${person.phone}`}
                              className="flex items-center gap-4 p-5 rounded-2xl transition-all border-2"
                              style={{ 
                                backgroundColor: premiumColors.bgGray,
                                borderColor: premiumColors.borderGray
                              }}
                              whileHover={{
                                borderColor: premiumColors.darkBlue,
                                backgroundColor: premiumColors.lightGray,
                                scale: 1.02
                              }}
                            >
                              <div 
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                                style={{ backgroundColor: premiumColors.darkBlue + '15' }}
                              >
                                <Phone className="w-6 h-6" style={{ color: premiumColors.darkBlue }} />
                              </div>
                              <div className="flex-1">
                                <div 
                                  className="text-xs mb-1.5 font-bold uppercase tracking-wide"
                                  style={{ color: premiumColors.textLight }}
                                >
                                  Phone
                                </div>
                                <div 
                                  className="font-bold text-base"
                                  style={{ color: premiumColors.textDark }}
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
              ) : null}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


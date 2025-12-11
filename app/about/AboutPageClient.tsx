'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { teamMembers } from '@/data/team';
import OrgChart from '@/components/OrgChart';
import { 
  Building2, Users, Globe, Gem, 
  TrendingUp, Award, Target, Shield,
  ChevronRight, Sparkles, MapPin, BarChart3,
  Linkedin, Twitter, ExternalLink, PlayCircle,
  Briefcase, Eye, Zap, Crown,
  Coffee, Cpu, Package, Home,
  Flag, ChevronDown
} from 'lucide-react';

// Premium Color Palette
const premiumColors = {
  darkBlue: '#0A3D62',
  tealBlue: '#1B5E73',
  slateGray: '#5A6A75',
  gold: '#D4A056',
  lightGray: '#F6F7F9',
  textDark: '#111111',
  textGray: '#555555',
  textLight: '#666666',
  borderGray: '#E5E7EB',
};

// بيانات Timeline الحقيقية المطلوبة
const timelineData = [
  {
    year: '2003',
    title: 'Foundations in Abu Dhabi',
    description: 'Launched as a construction & building maintenance company supporting the UAE\'s growth and infrastructure ambitions.',
    icon: Building2,
  },
  {
    year: '2007',
    title: 'Expansion into Hospitality',
    description: 'Diversified operations with the launch of F&B ventures, demonstrating agility and entrepreneurial growth.',
    icon: Coffee,
  },
  {
    year: '2010',
    title: 'IT & Technology Services',
    description: 'Entered the technology sector, providing equipment, maintenance, and digital services to support modernization needs.',
    icon: Cpu,
  },
  {
    year: '2020',
    title: 'ZHH General Trading Established — Abu Dhabi',
    description: 'Began global sourcing and commodities trading, supplying diverse products to UAE and international markets.',
    icon: Package,
  },
  {
    year: '2021',
    title: 'Strategic Diversification & Real Estate Division',
    description: 'Launched ZHH Real Estate, strengthening investments across key UAE cities. Formally established ZHH Group Holding, unifying operations under a vision for long-term growth.',
    icon: Home,
  },
  {
    year: '2022',
    title: 'International Expansion — Africa',
    description: 'Opened trading branches across Uganda, Mali, Guinea, Kenya, Burkina Faso, and Sierra Leone — building secure logistics and sourcing networks.',
    icon: Globe,
  },
  {
    year: '2024',
    title: 'Group Consolidation & Corporate Governance Excellence',
    description: 'Centralized construction, real estate, and trading under one Holding structure; ensured compliance, governance, and brand unity.',
    icon: Shield,
  },
  {
    year: '2025',
    title: 'Launch of Jewelust — Dubai',
    description: 'Established Jewelust as the Group\'s flagship in ethical gold sourcing, jewelry, and global bullion trading — reinforcing Dubai\'s role as the world\'s premier gold hub.',
    icon: Gem,
  },
  {
    year: 'Today',
    title: 'Global Emirati Conglomerate',
    description: 'ZHH Group stands as a proud Emirati-built conglomerate with expanding international footprint across construction, real estate, global trade, and precious metals — driven by integrity, innovation, and a commitment to shaping a prosperous future for the UAE and beyond.',
    icon: Flag,
  }
];

// إحصائيات الشركة
const companyStats = [
  { value: '100+', label: 'Assets Under Management', suffix: 'M AED', icon: BarChart3, color: 'text-blue-500' },
  { value: '20+', label: 'Years of Excellence', icon: Award, color: 'text-emerald-500' },
  { value: '10+', label: 'Countries of Operations', icon: Globe, color: 'text-amber-500' },
  { value: '500+', label: 'Professional Team', icon: Users, color: 'text-violet-500' },
];

export default function AboutPageClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeYear, setActiveYear] = useState('2003');
  const [expandedBios, setExpandedBios] = useState<Set<string>>(new Set());

  // Helper function to get short bio snippet (~100-120 chars)
  const getShortBio = (bio: string) => {
    if (bio.length <= 120) return bio;
    const truncated = bio.substring(0, 120).trim();
    // Try to cut at a sentence end or word boundary
    const lastPeriod = truncated.lastIndexOf('.');
    const lastSpace = truncated.lastIndexOf(' ');
    const cutPoint = lastPeriod > 80 ? lastPeriod + 1 : (lastSpace > 80 ? lastSpace : 120);
    return truncated.substring(0, cutPoint) + '...';
  };

  const toggleBio = (memberId: string) => {
    setExpandedBios(prev => {
      const newSet = new Set(prev);
      if (newSet.has(memberId)) {
        newSet.delete(memberId);
      } else {
        newSet.add(memberId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [pathname, searchParams]);

  // Auto-play video on mount
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPlaying(true);
          })
          .catch(() => {
            // Autoplay was prevented, user interaction required
            setIsVideoPlaying(false);
          });
      }
    }
  }, []);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsVideoPlaying(true);
            })
            .catch(() => {
              setIsVideoPlaying(false);
            });
        }
      }
    }
  };

  const activeItem = timelineData.find(item => item.year === activeYear) || timelineData[0];

  return (
    <div className="pt-20">
      {/* Hero Section مع فيديو */}
      <section className="hero-section relative">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/assets/media/hero.mp4" type="video/mp4" />
            <source src="/hero.mp4" type="video/mp4" />
            {/* Fallback gradient if video doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/70" />
          </video>
          <div className="video-overlay absolute inset-0 z-1" />
        </div>

        {/* Video Play/Pause Button */}
        <button
          onClick={handleVideoPlay}
          className="absolute top-8 right-8 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
          aria-label={isVideoPlaying ? "Pause video" : "Play video"}
        >
          {isVideoPlaying ? (
            <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6">
              <div className="w-1.5 h-4 md:h-6 bg-white mx-0.5" />
              <div className="w-1.5 h-4 md:h-6 bg-white mx-0.5" />
            </div>
          ) : (
            <PlayCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
          )}
        </button>

        {/* Hero Content */}
        <div className="container-unified relative z-20 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-content w-full"
          >
            {/* Company Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-lg"
            >
              <div className="logo-container">
                <img 
                  src="/assets/logos/zhh-group-holding-logo.svg" 
                  alt="ZHH Group Holding"
                />
              </div>
            </motion.div>


            {/* Company Stats */}
            <div className="stats-grid max-w-4xl mx-auto">
              {companyStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform mb-sm">
                      <Icon className={`w-7 h-7 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-white mb-xs">
                      {stat.value}
                      {stat.suffix && <span className="text-lg">{stat.suffix}</span>}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="text-center">
            <div className="text-sm text-gray-300 mb-2">Scroll to Explore</div>
            <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-1 mx-auto">
              <div className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-teal-400 rounded-full" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section - Vertical Timeline */}
      <section className="section-unified bg-white scroll-margin-top" id="journey">
        <div className="container-unified">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center w-full mb-xl"
          >
            <div className="inline-flex items-center gap-4 mb-md">
              <div className="w-12 h-px" style={{ background: `linear-gradient(to right, transparent, ${premiumColors.slateGray}40, transparent)` }} />
              <span 
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: premiumColors.slateGray }}
              >
                Our Timeline
              </span>
              <div className="w-12 h-px" style={{ background: `linear-gradient(to right, transparent, ${premiumColors.slateGray}40, transparent)` }} />
            </div>
            
            <h2 
              className="h2-unified text-center-unified text-primary-color mb-md" 
            >
              Journey of Growth
            </h2>
            
            <p 
              className="body-large-unified text-center-unified text-secondary-color"
            >
              From local beginnings to global presence — our story of strategic expansion
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="relative">
              {/* Timeline Items */}
              <div 
                ref={timelineRef}
                style={{ 
                  gap: '0px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {timelineData.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeYear === item.year;
                  const isLast = index === timelineData.length - 1;
                  
                  return (
                    <div key={item.year} style={{ position: 'relative' }}>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative flex items-start gap-content-lg ${
                          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        } ${isLast ? '' : 'mb-lg'}`}
                        onClick={() => setActiveYear(item.year)}
                      >
                        {/* Year Circle */}
                        <div className="relative z-10 flex-shrink-0">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-16 h-16 rounded-full bg-white flex items-center justify-center font-semibold shadow-sm border border-gray-300 cursor-pointer transition-all text-primary-dark"
                            style={{
                              borderColor: premiumColors.slateGray + '40',
                            }}
                          >
                            <div className="text-center">
                              <div className="text-base font-bold text-primary-dark">
                                {item.year}
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Content Card */}
                        <motion.div
                          className="flex-1 bg-light rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all cursor-pointer p-lg"
                          whileHover={{ y: -2 }}
                        >
                          <div className="flex items-center gap-content-md mb-sm">
                            <div 
                              className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-dark/8"
                              style={{
                                border: `1px solid ${premiumColors.darkBlue}20`,
                              }}
                            >
                              <Icon 
                                className="w-5 h-5 text-primary-dark" 
                                style={{ 
                                  strokeWidth: 1.5
                                }} 
                              />
                            </div>
                            <h3 
                              className="text-xl font-bold text-primary-color"
                              style={{ 
                                lineHeight: '1.4'
                              }}
                            >
                              {item.title}
                            </h3>
                          </div>
                          <p 
                            className="leading-relaxed body-regular-unified text-secondary-color"
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      </motion.div>

                      {/* Dashed Line Separator - Only between items, not after last */}
                      {!isLast && (
                        <div 
                          className="absolute left-8 md:left-1/2 md:-translate-x-1/2"
                          style={{
                            top: '64px', // Start from bottom of circle (64px = w-16 h-16)
                            width: '2px',
                            height: '40px', // Match the marginBottom gap
                            borderLeft: '2px dashed #D1D5DB', // Light gray, elegant
                            zIndex: 0,
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="section-unified bg-gradient-to-b from-gray-50 to-white scroll-margin-top" id="board">
        <div className="container-unified">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center w-full mb-xl"
          >
            <div className="inline-flex items-center gap-4 mb-md">
              <div className="w-12 h-px" style={{ background: `linear-gradient(to right, transparent, ${premiumColors.slateGray}40, transparent)` }} />
              <span 
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: premiumColors.slateGray }}
              >
                Leadership Team
              </span>
              <div className="w-12 h-px" style={{ background: `linear-gradient(to right, transparent, ${premiumColors.slateGray}40, transparent)` }} />
            </div>
            
            <h2 
              className="h2-unified text-center-unified text-primary-color mb-md" 
            >
              Board of Directors
            </h2>
            
            <p 
              className="body-large-unified text-center-unified text-secondary-color"
            >
              Visionary leaders driving strategic growth and sustainable value creation
            </p>
          </motion.div>

          {/* Board Members Layout: 1 + 3 + 3 */}
          <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
            {/* Row 1: Single Card - Mohamed Al Hammadi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md">
                {(() => {
                  const member = teamMembers.find(m => m.name === 'Mohamed Al Hammadi');
                  if (!member) return null;
                  const imagePath = '/assets/board img/Mohamed Al Hammadi.jpg';
                  
                  return (
                    <motion.div 
                      className="h-full bg-white rounded-2xl border border-gray-200/60 overflow-hidden transition-all duration-300"
                      whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Member Image */}
                      <div className="h-48 bg-gray-50 relative overflow-hidden flex items-center justify-center" style={{ padding: '20px' }}>
                        <motion.div 
                          className="relative z-10 flex items-center justify-center h-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <motion.div 
                            className="rounded-full overflow-hidden"
                            style={{
                              width: 'clamp(140px, 18vw, 160px)',
                              height: 'clamp(140px, 18vw, 160px)',
                              border: '4px solid white',
                              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img 
                              src={imagePath}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                              }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center"><div class="text-4xl">👔</div></div>';
                                }
                              }}
                            />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Member Info */}
                      <div style={{ padding: '20px' }}>
                        <div className="text-center">
                          <motion.h3 
                            className="text-2xl font-bold mb-1.5"
                            style={{ color: premiumColors.textDark }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            {member.name}
                          </motion.h3>
                          <motion.div 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2.5"
                            style={{ 
                              backgroundColor: premiumColors.lightGray,
                              border: `1px solid ${premiumColors.slateGray}20`
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                          >
                            <Crown className="w-4 h-4" style={{ color: premiumColors.darkBlue }} />
                            <span 
                              className="font-semibold text-sm"
                              style={{ color: premiumColors.darkBlue }}
                            >
                              {member.position}
                            </span>
                          </motion.div>
                          
                          {/* Bio - Short by default, expandable */}
                          <motion.div
                            initial={false}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 0.3 }}
                          >
                            <p 
                              className="leading-relaxed"
                              style={{ 
                                color: premiumColors.textGray,
                                lineHeight: '1.6',
                                fontSize: '15px',
                                marginBottom: expandedBios.has(member.id) ? '10px' : '0'
                              }}
                            >
                              {expandedBios.has(member.id) ? member.bio : getShortBio(member.bio)}
                            </p>
                          </motion.div>

                          {/* Show More/Less Button */}
                          {member.bio.length > 120 && (
                            <motion.button
                              onClick={() => toggleBio(member.id)}
                              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all mx-auto mt-1.5"
                              style={{
                                backgroundColor: premiumColors.lightGray,
                                border: `1px solid ${premiumColors.borderGray}`,
                                color: premiumColors.darkBlue,
                              }}
                              whileHover={{ backgroundColor: premiumColors.borderGray, scale: 1.02 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="text-sm">
                                {expandedBios.has(member.id) ? 'Show less' : 'Show more'}
                              </span>
                              <motion.div
                                animate={{ rotate: expandedBios.has(member.id) ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </motion.div>
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            </motion.div>

            {/* Row 2: Three Cards - Najeeb PK, Shamma Al Amri, Mohamed Rafeeq */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {[
                { name: 'Najeeb PK', image: '/assets/board img/Najeeb PK.jpg', member: teamMembers.find(m => m.name === 'Najeeb PK') },
                { name: 'Shamma Al Amri', image: '/assets/board img/Shamma Al Amri.jpg', member: teamMembers.find(m => m.name === 'Shamma Al Amri') },
                { name: 'Mohamed Rafeeq', image: '/assets/board img/1.jpeg', member: teamMembers.find(m => m.name === 'Mohamed Rafeeq') },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <motion.div 
                    className="h-full bg-white rounded-2xl border border-gray-200/60 overflow-hidden transition-all duration-300"
                    whileHover={{ y: -3, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)' }}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Member Image */}
                    <div className="h-44 bg-gray-50 relative overflow-hidden flex items-center justify-center" style={{ padding: '18px' }}>
                      <motion.div 
                        className="relative z-10 flex items-center justify-center h-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      >
                        <motion.div 
                          className="rounded-full overflow-hidden"
                          style={{
                            width: 'clamp(110px, 14vw, 130px)',
                            height: 'clamp(110px, 14vw, 130px)',
                            border: '4px solid white',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            style={{
                              objectFit: 'cover',
                              objectPosition: 'center'
                            }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center"><div class="text-4xl">👔</div></div>';
                              }
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Member Info */}
                    <div style={{ padding: '18px' }}>
                      <div className="text-center">
                        <motion.h3 
                          className="text-xl font-bold mb-1.5"
                          style={{ color: premiumColors.textDark }}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                        >
                          {item.member?.name || item.name}
                        </motion.h3>
                        {item.member && (
                          <>
                            <motion.div 
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2.5"
                              style={{ 
                                backgroundColor: premiumColors.lightGray,
                                border: `1px solid ${premiumColors.slateGray}20`
                              }}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                            >
                              <Crown className="w-3.5 h-3.5" style={{ color: premiumColors.darkBlue }} />
                              <span 
                                className="font-semibold text-xs"
                                style={{ color: premiumColors.darkBlue }}
                              >
                                {item.member.position}
                              </span>
                            </motion.div>
                            
                            {/* Bio - Short by default, expandable */}
                            <motion.div
                              initial={false}
                              animate={{ height: 'auto' }}
                              transition={{ duration: 0.3 }}
                            >
                              <p 
                                className="leading-relaxed text-sm"
                                style={{ 
                                  color: premiumColors.textGray,
                                  lineHeight: '1.6',
                                  marginBottom: expandedBios.has(item.member.id) ? '8px' : '0'
                                }}
                              >
                                {expandedBios.has(item.member.id) ? item.member.bio : getShortBio(item.member.bio)}
                              </p>
                            </motion.div>

                            {/* Show More/Less Button */}
                            {item.member.bio.length > 120 && (
                              <motion.button
                                onClick={() => toggleBio(item.member!.id)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium transition-all mx-auto mt-1.5"
                                style={{
                                  backgroundColor: premiumColors.lightGray,
                                  border: `1px solid ${premiumColors.borderGray}`,
                                  color: premiumColors.darkBlue,
                                  fontSize: '12px'
                                }}
                                whileHover={{ backgroundColor: premiumColors.borderGray, scale: 1.02 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span className="text-xs">
                                  {expandedBios.has(item.member.id) ? 'Show less' : 'Show more'}
                                </span>
                                <motion.div
                                  animate={{ rotate: expandedBios.has(item.member.id) ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="w-3.5 h-3.5" />
                                </motion.div>
                              </motion.button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Row 3: Three Cards - Ahmed Ali, Shadi, Mohamed Al Hammadi (Jewelust) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {[
                { image: '/assets/board img/2.jpg', name: 'Ahmed Ali', member: teamMembers.find(m => m.name === 'Ahmed Ali') },
                { image: '/assets/board img/3.jpg', name: 'Shadi', member: teamMembers.find(m => m.name === 'Shadi') },
                { image: '/assets/board img/4.jpg', name: 'Mohamed Al Hammadi', member: teamMembers.find(m => m.name === 'Mohamed Al Hammadi' && m.position === 'Founder & CEO – Jewelust') },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  className="group h-full"
                >
                  <div className="h-full bg-white rounded-2xl border border-gray-200/60 overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Member Image */}
                    <div className="h-52 bg-gray-50 relative overflow-hidden flex items-center justify-center" style={{ padding: '24px' }}>
                      <div className="relative z-10 flex items-center justify-center h-full">
                        <div 
                          className="rounded-full overflow-hidden"
                          style={{
                            width: 'clamp(100px, 12vw, 120px)',
                            height: 'clamp(100px, 12vw, 120px)',
                            border: '4px solid white',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            style={{
                              objectFit: 'cover',
                              objectPosition: 'center'
                            }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center"><div class="text-4xl">👔</div></div>';
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div style={{ padding: '20px' }}>
                      <div className="text-center">
                        <h3 
                          className="text-xl font-bold mb-2"
                          style={{ color: premiumColors.textDark }}
                        >
                          {item.member?.name || item.name}
                        </h3>
                        {item.member && (
                          <>
                            <div 
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
                              style={{ 
                                backgroundColor: premiumColors.lightGray,
                                border: `1px solid ${premiumColors.slateGray}20`
                              }}
                            >
                              <Crown className="w-3.5 h-3.5" style={{ color: premiumColors.darkBlue }} />
                              <span 
                                className="font-semibold text-xs"
                                style={{ color: premiumColors.darkBlue }}
                              >
                                {item.member.position}
                              </span>
                            </div>
                            
                            {/* Bio - Short by default, expandable */}
                            <motion.div
                              initial={false}
                              animate={{ height: 'auto' }}
                              transition={{ duration: 0.3 }}
                            >
                              <p 
                                className="leading-relaxed text-sm"
                                style={{ 
                                  color: premiumColors.textGray,
                                  lineHeight: '1.6',
                                  marginBottom: expandedBios.has(item.member.id) ? '8px' : '0'
                                }}
                              >
                                {expandedBios.has(item.member.id) ? item.member.bio : getShortBio(item.member.bio)}
                              </p>
                            </motion.div>

                            {/* Show More/Less Button */}
                            {item.member.bio.length > 120 && (
                              <motion.button
                                onClick={() => toggleBio(item.member!.id)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium transition-all mx-auto mt-2"
                                style={{
                                  backgroundColor: premiumColors.lightGray,
                                  border: `1px solid ${premiumColors.borderGray}`,
                                  color: premiumColors.darkBlue,
                                  fontSize: '12px'
                                }}
                                whileHover={{ backgroundColor: premiumColors.borderGray }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span className="text-xs">
                                  {expandedBios.has(item.member.id) ? 'Show less' : 'Show more'}
                                </span>
                                <motion.div
                                  animate={{ rotate: expandedBios.has(item.member.id) ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="w-3.5 h-3.5" />
                                </motion.div>
                              </motion.button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure Section */}
      <section className="section-unified bg-white scroll-margin-top" id="structure">
        <div className="container-unified">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center w-full mb-xl"
          >
            <h2 className="h2-unified text-primary text-center-unified mb-md">
              Organizational Structure
            </h2>
            <p className="body-large-unified text-secondary text-center-unified">
              Streamlined framework for optimal governance and performance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl border border-blue-100 w-full"
            style={{ padding: 'clamp(24px, 3vw, 32px)' }}
          >
            <OrgChart />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
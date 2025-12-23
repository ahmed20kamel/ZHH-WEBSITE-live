'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { teamMembers } from '@/data/team';
import OrgChart from '@/components/OrgChart';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { 
  Building2, Users, Globe, Gem, 
  TrendingUp, Award, Target, Shield,
  ChevronRight, Sparkles, MapPin,
  Linkedin, Twitter, ExternalLink,
  Briefcase, Eye, Zap,
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

export default function AboutPageClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const timelineRef = useRef<HTMLDivElement>(null);
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

  const activeItem = timelineData.find(item => item.year === activeYear) || timelineData[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ height: '100vh', minHeight: '600px', maxHeight: '1200px' }}>
        {/* Background Image - Desktop Only */}
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
          <Image
            src="/assets/hero/hero-About ZHH Group.jpg"
            alt="About ZHH Group Holding"
            fill
            priority
            className="object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'grayscale(100%)',
            }}
          />
        </div>
        {/* Mobile Static Background - Shows bottom portion */}
        <div className="absolute inset-0 w-full h-full z-0 md:hidden">
          <Image
            src="/assets/hero/hero-About ZHH Group.jpg"
            alt="About ZHH Group Holding"
            fill
            priority
            className="object-cover"
            style={{ 
              pointerEvents: 'none',
              objectFit: 'cover',
              objectPosition: 'bottom',
              filter: 'grayscale(100%)',
            }}
          />
        </div>
        
        {/* Dark Overlay for better text readability */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
          }}
        />

        {/* Text Content - Direct on Image */}
        <div className="container-unified relative z-10 flex items-center justify-center" style={{ height: '100%', paddingTop: 'clamp(40px, 8vh, 80px)' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="text-center max-w-4xl mx-auto space-y-6 px-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
              style={{ 
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(42px, 6vw, 80px)',
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: 'clamp(24px, 3vw, 32px)',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              About ZHH Group Holding
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-200"
              style={{ 
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(18px, 2.2vw, 24px)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Building Value Across Construction, Real Estate, Trading & Precious Metals
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - Vertical Timeline */}
      <section 
        className="section-unified relative overflow-hidden scroll-margin-top" 
        id="journey"
        style={{
          paddingTop: 'clamp(60px, 7vw, 80px)',
          paddingBottom: 'clamp(60px, 7vw, 80px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 50%, #FFFFFF 100%)'
        }}
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.015) 0%, rgba(212, 175, 55, 0.008) 100%)',
            }}
          />
        </div>
        
        <div className="container-unified relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center w-full mb-xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
              <span className="body-small-unified text-tertiary uppercase tracking-wider">
                Our Timeline
              </span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
            </motion.div>
            
            <h2 
              className="h2-unified text-primary text-center"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 'clamp(16px, 2vw, 24px)'
              }}
            >
              Journey of Growth
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section 
        className="section-unified relative overflow-hidden scroll-margin-top" 
        id="board"
        style={{
          paddingTop: 'clamp(60px, 7vw, 80px)',
          paddingBottom: 'clamp(60px, 7vw, 80px)',
          background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 50%, #FAFAFA 100%)'
        }}
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.02) 0%, rgba(212, 175, 55, 0.01) 100%)',
            }}
          />
        </div>
        
        {/* Professional Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            maxWidth: '400px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(1, 178, 178, 0.3), transparent)',
            transformOrigin: 'center'
          }}
        />
        
        <div className="container-unified relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center w-full mb-xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
              <span className="body-small-unified text-tertiary uppercase tracking-wider">
                Leadership Team
              </span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
            </motion.div>
            
            <h2 
              className="h2-unified text-primary text-center"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 'clamp(16px, 2vw, 24px)'
              }}
            >
              Board of Directors
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
              Visionary leaders driving strategic growth and sustainable value creation
            </p>
          </motion.div>

          {/* Board Members Layout: 1 + 3 + 3 */}
          <div 
            className="max-w-7xl mx-auto"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(32px, 4vw, 48px)'
            }}
          >
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
                  const imagePath = '/assets/board/board-mohamed-al-hammadi.jpg';
                  
                  return (
                    <motion.div 
                      className="h-full bg-white rounded-2xl border border-gray-200/60 overflow-hidden transition-all duration-300"
                      whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Member Image */}
                      <div className="h-48 bg-gray-50 relative overflow-hidden flex items-center justify-center" style={{ padding: 'clamp(20px, 2.5vw, 28px)' }}>
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
                      <div style={{ padding: 'clamp(24px, 3vw, 32px)' }}>
                        <div className="text-center">
                          <motion.h3 
                            className="text-2xl font-bold"
                            style={{ 
                              color: premiumColors.textDark,
                              marginBottom: 'clamp(12px, 1.5vw, 16px)',
                              lineHeight: '1.3',
                              fontSize: 'clamp(20px, 2.2vw, 24px)'
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            {member.name}
                          </motion.h3>
                          <motion.div 
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg"
                            style={{ 
                              backgroundColor: premiumColors.lightGray,
                              marginBottom: 'clamp(16px, 2vw, 20px)'
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                          >
                            <span 
                              className="font-semibold"
                              style={{ 
                                color: premiumColors.darkBlue,
                                fontSize: 'clamp(13px, 1.4vw, 15px)',
                                lineHeight: 1.5
                              }}
                            >
                              {member.position}
                            </span>
                          </motion.div>
                          
                          {/* Bio - Short by default, expandable */}
                          <motion.div
                            initial={false}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 0.3 }}
                            style={{ marginBottom: expandedBios.has(member.id) ? 'clamp(16px, 2vw, 20px)' : '0' }}
                          >
                            <p 
                              className="leading-relaxed"
                              style={{ 
                                color: premiumColors.textGray,
                                lineHeight: '1.7',
                                fontSize: 'clamp(14px, 1.5vw, 16px)',
                                marginBottom: '0'
                              }}
                            >
                              {expandedBios.has(member.id) ? member.bio : getShortBio(member.bio)}
                            </p>
                          </motion.div>

                          {/* Show More/Less Button */}
                          {member.bio.length > 120 && (
                            <div className="mt-6 mb-2 flex justify-center">
                              <Button
                                variant={expandedBios.has(member.id) ? 'primary' : 'secondary'}
                                size="md"
                                onClick={() => toggleBio(member.id)}
                                className="gap-2"
                              >
                                <span>{expandedBios.has(member.id) ? 'Show less' : 'Show more'}</span>
                                <motion.div
                                  animate={{ rotate: expandedBios.has(member.id) ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="w-4 h-4" />
                                </motion.div>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            </motion.div>

            {/* Row 2: Three Cards - Najeeb PK, Shamma Al Amri, Mohamed Rafeeq */}
            <div 
              className="grid grid-cols-1 md:grid-cols-3"
              style={{
                gap: 'clamp(20px, 2.5vw, 28px)'
              }}
            >
              {[
                { name: 'Najeeb PK', image: '/assets/board/board-najeeb-pk.jpg', member: teamMembers.find(m => m.name === 'Najeeb PK') },
                { name: 'Shamma Al Amri', image: '/assets/board/board-shamma-al-amri.jpg', member: teamMembers.find(m => m.name === 'Shamma Al Amri') },
                { name: 'Mohamed Rafeeq', image: '/assets/board/board-mohamed-rafeeq.jpg', member: teamMembers.find(m => m.name === 'Mohamed Rafeeq') },
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
                    <div className="h-44 bg-gray-50 relative overflow-hidden flex items-center justify-center" style={{ padding: 'clamp(20px, 2.5vw, 28px)' }}>
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
                    <div style={{ padding: 'clamp(24px, 3vw, 32px)' }}>
                      <div className="text-center">
                        <motion.h3 
                          className="font-bold"
                          style={{ 
                            color: premiumColors.textDark,
                            marginBottom: 'clamp(12px, 1.5vw, 16px)',
                            lineHeight: '1.3',
                            fontSize: 'clamp(18px, 2vw, 22px)'
                          }}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                        >
                          {item.member?.name || item.name}
                        </motion.h3>
                        {item.member && (
                          <>
                            <motion.div 
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg"
                              style={{ 
                                backgroundColor: premiumColors.lightGray,
                                marginBottom: 'clamp(16px, 2vw, 20px)'
                              }}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                            >
                              <span 
                                className="font-semibold"
                                style={{ 
                                  color: premiumColors.darkBlue,
                                  fontSize: 'clamp(12px, 1.3vw, 14px)',
                                  lineHeight: 1.5
                                }}
                              >
                                {item.member.position}
                              </span>
                            </motion.div>
                            
                            {/* Bio - Short by default, expandable */}
                            <motion.div
                              initial={false}
                              animate={{ height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              style={{ marginBottom: expandedBios.has(item.member.id) ? 'clamp(16px, 2vw, 20px)' : '0' }}
                            >
                              <p 
                                className="leading-relaxed"
                                style={{ 
                                  color: premiumColors.textGray,
                                  lineHeight: '1.7',
                                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                                  marginBottom: '0'
                                }}
                              >
                                {expandedBios.has(item.member.id) ? item.member.bio : getShortBio(item.member.bio)}
                              </p>
                            </motion.div>

                            {/* Show More/Less Button */}
                            {item.member.bio.length > 120 && (
                              <div className="mt-6 mb-2 flex justify-center">
                                <Button
                                  variant={expandedBios.has(item.member.id) ? 'primary' : 'secondary'}
                                  size="md"
                                  onClick={() => toggleBio(item.member!.id)}
                                  className="gap-2"
                                >
                                  <span>{expandedBios.has(item.member.id) ? 'Show less' : 'Show more'}</span>
                                  <motion.div
                                    animate={{ rotate: expandedBios.has(item.member.id) ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <ChevronDown className="w-4 h-4" />
                                  </motion.div>
                                </Button>
                              </div>
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
            <div 
              className="grid grid-cols-1 md:grid-cols-3"
              style={{
                gap: 'clamp(20px, 2.5vw, 28px)'
              }}
            >
              {[
                { image: '/assets/board/board-ahmed-ali.jpg', name: 'Ahmed Ali', member: teamMembers.find(m => m.name === 'Ahmed Ali') },
                { image: '/assets/board/board-shadi.jpg', name: 'Shadi', member: teamMembers.find(m => m.name === 'Shadi') },
                { image: '/assets/board/board-mohamed-al-hammadi-jewelust.jpg', name: 'Mohamed Al Hammadi', member: teamMembers.find(m => m.name === 'Mohamed Al Hammadi' && m.position === 'Founder & CEO – Jewelust') },
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
                    <div style={{ padding: 'clamp(24px, 3vw, 32px)' }}>
                      <div className="text-center">
                        <h3 
                          className="font-bold"
                          style={{ 
                            color: premiumColors.textDark,
                            marginBottom: 'clamp(12px, 1.5vw, 16px)',
                            lineHeight: '1.3',
                            fontSize: 'clamp(18px, 2vw, 22px)'
                          }}
                        >
                          {item.member?.name || item.name}
                        </h3>
                        {item.member && (
                          <>
                            <div 
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg"
                              style={{ 
                                backgroundColor: premiumColors.lightGray,
                                marginBottom: 'clamp(16px, 2vw, 20px)'
                              }}
                            >
                              <span 
                                className="font-semibold"
                                style={{ 
                                  color: premiumColors.darkBlue,
                                  fontSize: 'clamp(12px, 1.3vw, 14px)',
                                  lineHeight: 1.5
                                }}
                              >
                                {item.member.position}
                              </span>
                            </div>
                            
                            {/* Bio - Short by default, expandable */}
                            <motion.div
                              initial={false}
                              animate={{ height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              style={{ marginBottom: expandedBios.has(item.member.id) ? 'clamp(16px, 2vw, 20px)' : '0' }}
                            >
                              <p 
                                className="leading-relaxed"
                                style={{ 
                                  color: premiumColors.textGray,
                                  lineHeight: '1.7',
                                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                                  marginBottom: '0'
                                }}
                              >
                                {expandedBios.has(item.member.id) ? item.member.bio : getShortBio(item.member.bio)}
                              </p>
                            </motion.div>

                            {/* Show More/Less Button */}
                            {item.member.bio.length > 120 && (
                              <div className="mt-6 mb-2 flex justify-center">
                                <Button
                                  variant={expandedBios.has(item.member.id) ? 'primary' : 'secondary'}
                                  size="md"
                                  onClick={() => toggleBio(item.member!.id)}
                                  className="gap-2"
                                >
                                  <span>{expandedBios.has(item.member.id) ? 'Show less' : 'Show more'}</span>
                                  <motion.div
                                    animate={{ rotate: expandedBios.has(item.member.id) ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <ChevronDown className="w-4 h-4" />
                                  </motion.div>
                                </Button>
                              </div>
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
      <section 
        className="section-unified relative overflow-hidden scroll-margin-top" 
        id="structure"
        style={{
          paddingTop: 'clamp(60px, 7vw, 80px)',
          paddingBottom: 'clamp(60px, 7vw, 80px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 50%, #FFFFFF 100%)'
        }}
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.015) 0%, rgba(212, 175, 55, 0.008) 100%)',
            }}
          />
        </div>
        
        {/* Professional Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            maxWidth: '400px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(1, 178, 178, 0.3), transparent)',
            transformOrigin: 'center'
          }}
        />
        
        <div className="container-unified relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="w-full"
            style={{ 
              padding: 0,
              marginTop: 'clamp(20px, 2.5vw, 30px)'
            }}
          >
            <OrgChart />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
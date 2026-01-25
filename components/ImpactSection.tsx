'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { 
  Leaf, Users, Gem, Target, 
  Shield, TrendingUp, Heart, CheckCircle
} from 'lucide-react';
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations';
import Counter from './Counter';
import Card from '@/components/ui/Card';
import CardBody from '@/components/ui/CardBody';
import BulletList from '@/components/ui/BulletList';
import Button from '@/components/ui/Button';

const impactPillars = [
  {
    title: 'Environmental Stewardship',
    icon: Leaf,
    items: [
      { text: 'Ethical gold sourcing & sustainable practices', value: '100%' },
      { text: 'ESG-aligned refinery partnerships worldwide', value: '15+' },
      { text: 'Energy-efficient construction projects', value: '85%' },
      { text: 'Carbon footprint reduction initiatives', value: '-30%' }
    ],
    gradient: 'from-blue-50 to-cyan-50',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    color: '#0d9488',
    delay: 0.1,
    stats: [
      { label: 'Green Projects', value: '24', suffix: '' },
      { label: 'Energy Saved', value: '1.2', suffix: 'M kWh' },
      { label: 'ESG Score', value: '92', suffix: '/100' }
    ]
  },
  {
    title: 'Community Development',
    icon: Users,
    items: [
      { text: 'Direct employment opportunities created', value: '300+' },
      { text: 'Indirect jobs supported across value chain', value: '1,200+' },
      { text: 'Skill development programs launched', value: '12' },
      { text: 'Local community partnerships established', value: '45' }
    ],
    gradient: 'from-blue-50 to-cyan-50',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    color: '#0d9488',
    delay: 0.2,
    stats: [
      { label: 'Jobs Created', value: '1,500', suffix: '+' },
      { label: 'Training Hours', value: '25', suffix: 'K' },
      { label: 'Communities', value: '50', suffix: '+' }
    ]
  },
  {
    title: 'Responsible Gold',
    icon: Gem,
    items: [
      { text: 'Licensed African mines under development', value: '3' },
      { text: 'Fully traceable & transparent supply chain', value: '100%' },
      { text: 'Community safeguards implemented', value: '25' },
      { text: 'Ethical sourcing certifications obtained', value: '5' }
    ],
    gradient: 'from-blue-50 to-cyan-50',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    color: '#0d9488',
    delay: 0.3,
    stats: [
      { label: 'Gold Traded', value: '165', suffix: '' },
      { label: 'Traceability', value: '100', suffix: '%' },
      { label: 'Compliance', value: '100', suffix: '%' }
    ]
  },
];

export default function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section 
      ref={sectionRef}
      className="section-unified relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 50%, #FAFAFA 100%)',
        position: 'relative'
      }}
    >
      {/* Professional Divider Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(1, 178, 178, 0.3), transparent)',
          transformOrigin: 'left'
        }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(1, 178, 178, 0.3), transparent)',
          transformOrigin: 'left'
        }}
      />

      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.02) 0%, rgba(212, 175, 55, 0.01) 100%)',
            pointerEvents: 'none'
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.06 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-1/4 -right-48 w-[600px] h-[600px] bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(1, 178, 178, 0.015) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(1, 178, 178, 0.015) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            opacity: 0.5
          }}
        />
      </div>

      <div className="container-unified" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="section-title-wrapper"
          style={{
            paddingLeft: 'clamp(16px, 4vw, 0px)',
            paddingRight: 'clamp(16px, 4vw, 0px)',
            marginBottom: 'clamp(40px, 6vw, 56px)'
          }}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 mb-6"
            style={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <div className="w-2 h-2 rounded-full bg-teal-600" />
            <span className="body-small-unified text-tertiary uppercase tracking-wider" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
              Sustainability & Impact
            </span>
            <div className="w-2 h-2 rounded-full bg-teal-600" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="h2-unified text-primary text-center"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              fontSize: 'clamp(20px, 4.5vw, 28px)',
              lineHeight: 1.3,
              marginBottom: 'clamp(16px, 3vw, 24px)',
              paddingLeft: 'clamp(8px, 2vw, 0px)',
              paddingRight: 'clamp(8px, 2vw, 0px)',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            Our Impact
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="body-large-unified text-secondary"
            style={{ 
              maxWidth: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 'clamp(12px, 2vw, 20px)',
              paddingLeft: 'clamp(16px, 4vw, 0px)',
              paddingRight: 'clamp(16px, 4vw, 0px)',
              fontSize: 'clamp(14px, 3vw, 18px)',
              lineHeight: 1.7,
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            Creating sustainable economic, social, and environmental value through responsible business practices and strategic community engagement.
          </motion.p>
        </motion.div>

        {/* Impact Pillars - Using Unified System */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: 'clamp(24px, 4vw, 32px)',
            paddingLeft: 'clamp(16px, 4vw, 0px)',
            paddingRight: 'clamp(16px, 4vw, 0px)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          {impactPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            // Convert items to BulletList format
            const bulletItems = pillar.items.map(item => ({
              title: item.text,
              description: (
                  <div className="inline-flex items-center gap-1 mt-1">
                   <span className="body-small-unified text-teal-600" style={{ fontWeight: 600 }}>
                      {item.value}
                    </span>
                   <TrendingUp className="w-3 h-3 text-teal-600" />
                </div>
              )
            }));

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card className="h-full flex flex-col relative overflow-hidden group" style={{ padding: 0, position: 'relative', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(229, 231, 235, 0.5)', transition: 'all 0.3s ease' }}>
                  {/* Hover Border Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
                    style={{ zIndex: 3 }}
                    whileHover={{
                      borderColor: 'rgba(13, 148, 136, 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Background Image with Blur and Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 0,
                      overflow: 'hidden',
                      borderRadius: '16px'
                    }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  >
                    <Image
                      src={`/assets/Our Impact/${pillar.title}.jpg`}
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
                    {/* White Overlay - Reduced for better image visibility */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        zIndex: 1
                      }}
                    />
                  </div>

                  <div style={{ padding: 'clamp(28px, 3.5vw, 36px)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 2 }}>
                  <CardBody maxWidth="max-w-none" className="flex flex-col h-full relative z-10">
                    {/* Icon Container with Visual Anchor - Enhanced Style */}
                    <motion.div 
                      className="mb-8 flex flex-col items-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <motion.div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 relative z-10 mobile-center-icon"
                        style={{ 
                          backgroundColor: 'rgba(224, 242, 241, 0.95)',
                          backdropFilter: 'blur(12px)',
                          border: '1px solid rgba(13, 148, 136, 0.2)'
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: '0 8px 24px rgba(13, 148, 136, 0.3)'
                        }}
                      >
                        <Icon 
                          className="w-8 h-8"
                          style={{ color: '#0D9488' }}
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      {/* Visual anchor line under icon */}
                      <motion.div 
                        className="mt-4 h-0.5 w-12 bg-teal-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: '48px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </motion.div>
                    
                    {/* Title */}
                    <motion.div 
                      className="mb-8 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 
                        className="text-xl lg:text-2xl font-semibold"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          letterSpacing: '-0.01em',
                          lineHeight: '1.3',
                          color: '#000000',
                          fontWeight: 700,
                          fontSize: 'clamp(20px, 2.5vw, 24px)'
                        }}
                      >
                        {pillar.title}
                      </h3>
                    </motion.div>
                    
                    {/* Divider */}
                    <motion.div 
                      className="h-px mb-8 bg-teal-600"
                      style={{ opacity: 0.2 }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                    
                    {/* Content - Bullet List */}
                    <motion.div 
                      className="flex-1 mb-8"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div style={{ color: '#000000', fontWeight: 600 }}>
                          <BulletList
                            bulletColor="#0d9488"
                            className="text-left [&_li_div]:text-black [&_li_div]:font-semibold [&_li_div_div]:text-black [&_li_div_div]:font-medium"
                            maxWidth="max-w-none"
                            items={bulletItems}
                            titleGap="sm"
                          />
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div 
                      className="grid grid-cols-3 gap-3 pt-6 border-t mb-8"
                      style={{ borderColor: 'rgba(229, 231, 235, 0.5)' }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {pillar.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="text-center"
                        >
                          <div className="mb-1" style={{ 
                            color: '#000000',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'center',
                            gap: '4px',
                            flexWrap: 'wrap',
                            fontSize: 'clamp(20px, 2.5vw, 24px)'
                          }}>
                            <span className="text-stats-number">
                              <Counter value={stat.value} />
                            </span>
                            {stat.suffix && (
                              <span className="body-small-unified" style={{ lineHeight: '1.2', color: '#000000', fontWeight: 600, fontSize: 'clamp(14px, 1.7vw, 16px)' }}>
                                {stat.suffix}
                              </span>
                            )}
                          </div>
                          <div className="body-small-unified" style={{ color: '#000000', fontWeight: 600 }}>{stat.label}</div>
                        </div>
                      ))}
                    </motion.div>
                  </CardBody>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact Summary Banner - Using Card + CardBody */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: 'var(--rhythm-card-gap)' }}
        >
          <Card style={{ 
            background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.05) 0%, rgba(212, 175, 55, 0.03) 100%)',
            border: '1px solid var(--color-border-light)'
          }}>
            <CardBody maxWidth="max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-4 rhythm-card-gap">
                {/* Total Impact */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Target className="w-5 h-5" style={{ color: '#0D9488' }} />
                    <span className="body-small-unified text-secondary">Total Impact</span>
                  </div>
                  <div className="mb-1" style={{ 
                    color: 'var(--emirati-blue)',
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '4px',
                    flexWrap: 'wrap'
                  }}>
                    <span className="text-stats-number">
                      <Counter value="1.5" />
                    </span>
                    <span className="body-small-unified text-secondary" style={{ lineHeight: '1.2' }}>K+</span>
                  </div>
                  <div className="body-small-unified text-tertiary">Lives Touched</div>
                </div>

                {/* Sustainable Projects */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Leaf className="w-5 h-5" style={{ color: '#0D9488' }} />
                    <span className="body-small-unified text-secondary">Green Projects</span>
                  </div>
                  <div className="mb-1" style={{ 
                    color: 'var(--emirati-blue)',
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '4px',
                    flexWrap: 'wrap'
                  }}>
                    <span className="text-stats-number">
                      <Counter value="85" />
                    </span>
                    <span className="body-small-unified text-secondary" style={{ lineHeight: '1.2' }}>%</span>
                  </div>
                  <div className="body-small-unified text-tertiary">Sustainable Operations</div>
                </div>

                {/* Community Investment */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Heart className="w-5 h-5" style={{ color: '#0D9488' }} />
                    <span className="body-small-unified text-secondary">Community</span>
                  </div>
                  <div className="mb-1" style={{ 
                    color: 'var(--emirati-blue)',
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '4px',
                    flexWrap: 'wrap'
                  }}>
                    <span className="body-small-unified text-secondary" style={{ lineHeight: '1.2' }}>AED</span>
                    <span className="text-stats-number">
                      <Counter value="25" />
                    </span>
                    <span className="body-small-unified text-secondary" style={{ lineHeight: '1.2' }}>M</span>
                  </div>
                  <div className="body-small-unified text-tertiary">Investment</div>
                </div>

                {/* Compliance Excellence */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Shield className="w-5 h-5" style={{ color: '#0D9488' }} />
                    <span className="body-small-unified text-secondary">Compliance</span>
                  </div>
                  <div className="mb-1" style={{ 
                    color: 'var(--emirati-blue)',
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '4px',
                    flexWrap: 'wrap'
                  }}>
                    <span className="text-stats-number">
                      <Counter value="100" />
                    </span>
                    <span className="body-small-unified text-secondary" style={{ lineHeight: '1.2' }}>%</span>
                  </div>
                  <div className="body-small-unified text-tertiary">Perfect Record</div>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 2, delay: 0.8 }}
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--color-primary-teal), var(--color-gold))',
                  borderRadius: '1px',
                  marginTop: 'var(--rhythm-content-cta)'
                }}
              />
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

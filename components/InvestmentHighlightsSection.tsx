'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { 
  TrendingUp, Building2, Gem, Globe, 
  Shield, Award, Target, BarChart3,
  Clock
} from 'lucide-react';
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations';
import Counter from './Counter';
import Card from '@/components/ui/Card';
import CardBody from '@/components/ui/CardBody';

const highlights = [
  { 
    value: '10B+', 
    label: 'Assets Under Management', 
    description: 'Strong financial foundation with diversified portfolio',
    icon: TrendingUp,
    gradient: 'from-blue-50 to-cyan-50',
    color: 'text-teal-600',
    delay: 0.1,
    growth: '+15% YoY',
    features: ['Diversified Portfolio', 'Risk Management', 'Sustainable Returns']
  },
  { 
    value: '12B+', 
    label: 'Total Project Value', 
    description: 'Significant investments across all divisions',
    icon: Building2,
    gradient: 'from-blue-50 to-cyan-50',
    color: 'text-teal-600',
    delay: 0.2,
    growth: '+25% YoY',
    features: ['Major Developments', 'Infrastructure', 'Commercial Projects']
  },
  { 
    value: '70+', 
    label: 'Completed Projects', 
    description: 'Proven track record of successful delivery',
    icon: Award,
    gradient: 'from-blue-50 to-cyan-50',
    color: 'text-teal-600',
    delay: 0.3,
    growth: '98% On-time',
    features: ['Quality Assurance', 'Timely Delivery', 'Client Satisfaction']
  },
  { 
    value: '165', 
    label: 'Gold Traded', 
    description: 'Ethical sourcing and transparent trading operations',
    icon: Gem,
    gradient: 'from-blue-50 to-cyan-50',
    color: 'text-teal-600',
    delay: 0.4,
    growth: '+30% YoY',
    features: ['Ethical Sourcing', 'Market Leaders', 'Global Network']
  },
  { 
    value: '3', 
    label: 'Licensed Mines', 
    description: 'Under active development and expansion',
    icon: Target,
    gradient: 'from-blue-50 to-cyan-50',
    color: 'text-teal-600',
    delay: 0.5,
    growth: 'Expanding',
    features: ['Active Operations', 'Sustainable Mining', 'Resource Rich']
  },
  { 
    value: '0', 
    label: 'Compliance Violations', 
    description: 'Perfect regulatory compliance record',
    icon: Shield,
    gradient: 'from-blue-50 to-cyan-50',
    color: 'text-teal-600',
    delay: 0.6,
    growth: '100% Clean',
    features: ['Full Compliance', 'Transparent Operations', 'Strong Governance']
  },
];

export default function InvestmentHighlightsSection() {
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
          className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.06 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-1/4 -right-48 w-[600px] h-[600px] bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full blur-3xl"
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
              Performance Metrics
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
            Investment Highlights
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
            Diversified portfolio across construction, real estate, gold, and trading. Strong governance framework delivering sustainable returns.
          </motion.p>
        </motion.div>

        {/* Highlights Grid - Using Unified System */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: 'clamp(24px, 4vw, 32px)',
            paddingLeft: 'clamp(16px, 4vw, 0px)',
            paddingRight: 'clamp(16px, 4vw, 0px)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            
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
                      src={`/assets/Our Global Footprint/${highlight.label}.${highlight.label === 'Compliance Violations' ? 'png' : 'jpg'}`}
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
                  <CardBody maxWidth="max-w-none" className="flex flex-col h-full text-center relative z-10">
                    {/* Icon - Enhanced with Animation */}
                    <motion.div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg relative z-10 mobile-center-icon"
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
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Icon className="w-8 h-8" style={{ color: '#0D9488' }} />
                    </motion.div>

                    {/* Main Value with Counter */}
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="text-stats-number mb-2" style={{ 
                        color: '#000000',
                        fontSize: 'clamp(36px, 4.5vw, 52px)',
                        fontWeight: 700,
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        lineHeight: 1.2
                      }}>
                        <Counter value={highlight.value} />
                      </div>

                      {/* Growth Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border mb-3"
                        style={{
                          background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.1) 0%, rgba(1, 178, 178, 0.05) 100%)',
                          borderColor: 'rgba(13, 148, 136, 0.2)',
                          boxShadow: '0 2px 8px rgba(13, 148, 136, 0.1)'
                        }}
                      >
                         <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
                         <span className="body-small-unified text-teal-600" style={{ fontWeight: 600, fontSize: 'clamp(11px, 1.3vw, 13px)' }}>
                          {highlight.growth}
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* Label */}
                    <motion.h3 
                      className="h4-unified text-primary text-center rhythm-title-content"
                      style={{ 
                        color: '#000000',
                        fontWeight: 700,
                        fontSize: 'clamp(18px, 2.2vw, 22px)',
                        lineHeight: 1.3,
                        marginBottom: 'clamp(12px, 1.5vw, 16px)'
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {highlight.label}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="body-regular-unified text-secondary text-center flex-grow"
                      style={{ 
                        color: '#000000',
                        fontWeight: 600,
                        fontSize: 'clamp(14px, 1.7vw, 16px)',
                        lineHeight: 1.7
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {highlight.description}
                    </motion.p>
                  </CardBody>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Stats Banner - Using Card + CardBody */}
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
              <div className="grid grid-cols-1 md:grid-cols-3 rhythm-card-gap">
                {/* Total Portfolio */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <BarChart3 className="w-5 h-5" style={{ color: '#0D9488' }} />
                    <span className="body-small-unified text-secondary">Total Portfolio</span>
                  </div>
                  <div className="text-stats-number mb-1" style={{ color: 'var(--emirati-blue)' }}>AED 12.5B+</div>
                  <div className="body-small-unified text-tertiary">Combined Value</div>
                </div>

                {/* Years of Excellence */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Clock className="w-5 h-5" style={{ color: '#0D9488' }} />
                    <span className="body-small-unified text-secondary">Years of Excellence</span>
                  </div>
                  <div className="text-stats-number mb-1" style={{ color: 'var(--emirati-blue)' }}>15+</div>
                  <div className="body-small-unified text-tertiary">Industry Experience</div>
                </div>

                {/* Global Presence */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Globe className="w-5 h-5" style={{ color: '#0D9488' }} />
                    <span className="body-small-unified text-secondary">Global Presence</span>
                  </div>
                  <div className="text-stats-number mb-1" style={{ color: 'var(--emirati-blue)' }}>10+</div>
                  <div className="body-small-unified text-tertiary">Countries</div>
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

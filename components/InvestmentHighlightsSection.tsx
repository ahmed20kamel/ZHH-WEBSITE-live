'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  TrendingUp, Building2, Gem, Globe, 
  Shield, Award, Target, BarChart3,
  Clock
} from 'lucide-react';
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations';
import Counter from './Counter';

const highlights = [
  { 
    value: '100M+', 
    label: 'Assets Under Management', 
    description: 'Strong financial foundation with diversified portfolio',
    icon: TrendingUp,
    gradient: 'from-blue-50 to-cyan-50',
    color: 'text-blue-600',
    delay: 0.1,
    growth: '+15% YoY',
    features: ['Diversified Portfolio', 'Risk Management', 'Sustainable Returns']
  },
  { 
    value: '12B+', 
    label: 'Total Project Value', 
    description: 'Significant investments across all divisions',
    icon: Building2,
    gradient: 'from-emerald-50 to-teal-50',
    color: 'text-emerald-600',
    delay: 0.2,
    growth: '+25% YoY',
    features: ['Major Developments', 'Infrastructure', 'Commercial Projects']
  },
  { 
    value: '70+', 
    label: 'Completed Projects', 
    description: 'Proven track record of successful delivery',
    icon: Award,
    gradient: 'from-violet-50 to-indigo-50',
    color: 'text-violet-600',
    delay: 0.3,
    growth: '98% On-time',
    features: ['Quality Assurance', 'Timely Delivery', 'Client Satisfaction']
  },
  { 
    value: '1.2 Tons', 
    label: 'Gold Traded', 
    description: 'Ethical sourcing and transparent trading operations',
    icon: Gem,
    gradient: 'from-amber-50 to-yellow-50',
    color: 'text-amber-600',
    delay: 0.4,
    growth: '+30% YoY',
    features: ['Ethical Sourcing', 'Market Leaders', 'Global Network']
  },
  { 
    value: '3', 
    label: 'Licensed Mines', 
    description: 'Under active development and expansion',
    icon: Target,
    gradient: 'from-rose-50 to-pink-50',
    color: 'text-rose-600',
    delay: 0.5,
    growth: 'Expanding',
    features: ['Active Operations', 'Sustainable Mining', 'Resource Rich']
  },
  { 
    value: '0', 
    label: 'Compliance Violations', 
    description: 'Perfect regulatory compliance record',
    icon: Shield,
    gradient: 'from-green-50 to-emerald-50',
    color: 'text-green-600',
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
        paddingTop: 'clamp(50px, 6vw, 70px)',
        paddingBottom: 'clamp(50px, 6vw, 70px)',
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
        {/* Subtle Background Color Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.02) 0%, rgba(212, 175, 55, 0.01) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Animated Gradient Orbs - More Subtle */}
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

        {/* Minimal Grid Pattern - More Subtle */}
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
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
            <span className="body-small-unified text-tertiary uppercase tracking-wider">
              Performance Metrics
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="h2-unified text-primary text-center"
          >
            Investment Highlights
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, var(--color-primary-teal), var(--color-gold))',
              margin: 'var(--content-spacing-md) auto 0',
              borderRadius: '2px'
            }}
          />

          <motion.p
            variants={fadeInUp}
            className="body-large-unified text-secondary mt-6"
            style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Diversified portfolio across construction, real estate, gold, and trading. Strong governance framework delivering sustainable returns.
          </motion.p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 'var(--content-spacing-md)' }}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="h-full"
              >
                <motion.div
                  className="card-unified h-full flex flex-col relative overflow-hidden"
                  style={{
                    padding: 'clamp(20px, 4vw, var(--content-spacing-xl))',
                    position: 'relative'
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Accent Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: 0.2 + (index * 0.1) }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--color-primary-teal), var(--color-gold))',
                      borderRadius: '12px 12px 0 0'
                    }}
                  />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg ${highlight.gradient} flex items-center justify-center mb-6 shadow-sm`}>
                    <Icon className={`w-7 h-7 ${highlight.color}`} />
                  </div>

                  {/* Main Value with Counter */}
                  <div className="text-center mb-4">
                    <div className="text-stats-number mb-2" style={{ color: 'var(--emirati-blue)' }}>
                      <Counter value={highlight.value} />
                    </div>

                    {/* Growth Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200 mb-3"
                    >
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="body-small-unified text-green-700" style={{ fontWeight: 600 }}>
                        {highlight.growth}
                      </span>
                    </motion.div>
                  </div>

                  {/* Label */}
                  <h3 className="h4-unified text-primary text-center mb-3">
                    {highlight.label}
                  </h3>

                  {/* Description */}
                  <p className="body-regular-unified text-secondary text-center mb-6 flex-grow">
                    {highlight.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="card-unified" style={{ 
            background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.05) 0%, rgba(212, 175, 55, 0.03) 100%)',
            padding: 'var(--content-spacing-xl)',
            border: '1px solid var(--color-border-light)'
          }}>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--content-spacing-lg)' }}>
              {/* Total Portfolio */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <BarChart3 className="w-5 h-5 text-teal" />
                  <span className="body-small-unified text-secondary">Total Portfolio</span>
                </div>
                <div className="text-stats-number mb-1" style={{ color: 'var(--emirati-blue)' }}>AED 12.5B+</div>
                <div className="body-small-unified text-tertiary">Combined Value</div>
              </div>

              {/* Years of Excellence */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-teal" />
                  <span className="body-small-unified text-secondary">Years of Excellence</span>
                </div>
                <div className="text-stats-number mb-1" style={{ color: 'var(--emirati-blue)' }}>15+</div>
                <div className="body-small-unified text-tertiary">Industry Experience</div>
              </div>

              {/* Global Presence */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-teal" />
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
                marginTop: 'var(--content-spacing-lg)'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
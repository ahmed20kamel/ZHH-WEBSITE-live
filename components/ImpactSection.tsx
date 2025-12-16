'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
    gradient: 'from-green-50 to-emerald-50',
    iconColor: 'text-green-600',
    borderColor: 'border-green-200',
    color: '#10b981',
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
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    color: '#3b82f6',
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
    gradient: 'from-amber-50 to-yellow-50',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    color: '#f59e0b',
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
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
            <span className="body-small-unified text-tertiary uppercase tracking-wider">
              Sustainability & Impact
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="h2-unified text-primary text-center"
          >
            Our Impact
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
            Creating sustainable economic, social, and environmental value through responsible business practices and strategic community engagement.
          </motion.p>
        </motion.div>

        {/* Impact Pillars - Using Unified System */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 rhythm-card-gap"
        >
          {impactPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            // Convert items to BulletList format
            const bulletItems = pillar.items.map(item => ({
              title: item.text,
              description: (
                <div className="inline-flex items-center gap-1 mt-1">
                  <span className="body-small-unified text-teal" style={{ fontWeight: 600 }}>
                    {item.value}
                  </span>
                  <TrendingUp className="w-3 h-3 text-green-500" />
                </div>
              )
            }));

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="h-full"
              >
                <Card className="h-full flex flex-col">
                  <CardBody maxWidth="max-w-none" className="flex flex-col h-full">
                    {/* Icon Container with Visual Anchor */}
                    <div className="mb-8 flex flex-col items-center">
                      <div 
                        className={`w-16 h-16 rounded-lg ${pillar.gradient} flex items-center justify-center shadow-sm transition-all duration-300`}
                        style={{ 
                          border: `1px solid ${pillar.color}15`
                        }}
                      >
                        <Icon 
                          className={`w-8 h-8 ${pillar.iconColor}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      {/* Visual anchor line under icon */}
                      <div 
                        className="mt-4 h-0.5 w-12"
                        style={{ backgroundColor: pillar.color }}
                      />
                    </div>
                    
                    {/* Title */}
                    <div className="mb-8 text-center">
                      <h3 
                        className="text-xl lg:text-2xl font-semibold text-gray-900"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          letterSpacing: '-0.01em',
                          lineHeight: '1.3'
                        }}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                    
                    {/* Divider */}
                    <div 
                      className="h-px mb-8"
                      style={{ backgroundColor: pillar.color, opacity: 0.2 }}
                    />
                    
                    {/* Content - Bullet List */}
                    <div className="flex-1 mb-8">
                      <BulletList
                        bulletColor={pillar.color}
                        className="text-left"
                        maxWidth="max-w-none"
                        items={bulletItems}
                        titleGap="sm"
                      />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200 mb-8">
                      {pillar.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="text-center"
                        >
                          <div className="mb-1" style={{ 
                            color: 'var(--emirati-blue)',
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'center',
                            gap: '4px',
                            flexWrap: 'wrap'
                          }}>
                            <span className="text-stats-number">
                              <Counter value={stat.value} />
                            </span>
                            {stat.suffix && (
                              <span className="body-small-unified text-secondary" style={{ lineHeight: '1.2' }}>
                                {stat.suffix}
                              </span>
                            )}
                          </div>
                          <div className="body-small-unified text-tertiary">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
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
                    <Target className="w-5 h-5 text-teal" />
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
                    <Leaf className="w-5 h-5 text-teal" />
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
                    <Heart className="w-5 h-5 text-teal" />
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
                    <Shield className="w-5 h-5 text-teal" />
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

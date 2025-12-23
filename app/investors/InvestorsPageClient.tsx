'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import CardBody from '@/components/ui/CardBody';
import BulletList from '@/components/ui/BulletList';
import { TrendingUp, BarChart3, Award, Sparkles, Building2, Shield } from 'lucide-react';

const investmentHighlights = [
  {
    value: '10B+',
    label: 'Assets Under Management',
    description: 'Strong financial foundation with diversified portfolio',
    icon: TrendingUp,
  },
  {
    value: '12B+ AED',
    label: 'Total Project Value',
    description: 'Significant investments across all divisions',
    icon: BarChart3,
  },
  {
    value: '70+',
    label: 'Completed Projects',
    description: 'Proven track record of successful delivery',
    icon: Award,
  },
  {
    value: '165',
    label: 'Gold Traded',
    description: 'Ethical sourcing and trading operations',
    icon: Sparkles,
  },
  {
    value: '3',
    label: 'Licensed Gold Mines',
    description: 'Active development and ownership',
    icon: Building2,
  },
  {
    value: '0',
    label: 'Compliance Violations',
    description: 'Zero violations - highest governance standards',
    icon: Shield,
  },
];

const miningInvestments = [
  {
    title: 'Strategic Gold Mining Investments',
    description: 'ZHH Group Holding has expanded its upstream capabilities through the acquisition and development of three licensed gold mines across Africa, reinforcing long-term supply security and responsible production.',
    highlights: [
      'Ownership and active development of 3 legally licensed mining sites',
      'Continuous investment into infrastructure, technology, and extraction capacity',
      'Fully traceable supply chain integrated with Jewelust\'s responsible sourcing framework',
      'Environmental and community safeguards aligned with international mining standards',
      'Strengthening Dubai\'s position as the global hub for ethical and regulated gold trade',
    ],
    impact: [
      'Ensures long-term production capacity for Jewelust',
      'Enhances investor confidence through tangible, asset-backed growth',
      'Contributes to economic development in mining communities',
      'Supports the UAE\'s vision for global commodity leadership',
    ],
  },
];

export default function InvestorsPageClient() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ height: '100vh', minHeight: '600px', maxHeight: '1200px' }}>
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
          <Image
            src="/assets/hero/hero-investors.png"
            alt="ZHH Investors"
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
        <div className="absolute inset-0 w-full h-full z-0 md:hidden">
          <Image
            src="/assets/hero/hero-investors.png"
            alt="ZHH Investors"
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
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto space-y-6 px-4"
          >
            <motion.h1
              variants={fadeInUp}
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
              For Investors
            </motion.h1>
            <motion.p
              variants={fadeInUp}
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
              Diversified portfolio across construction, real estate, gold, and trading. Strong governance & sustainable returns.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section 
        className="section-unified relative overflow-hidden"
        style={{
          paddingTop: 'clamp(50px, 6vw, 70px)',
          paddingBottom: 'clamp(50px, 6vw, 70px)',
          background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 50%, #FAFAFA 100%)',
          position: 'relative'
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
        <div className="container-unified relative z-10">
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
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="section-title-wrapper"
            style={{ marginTop: 'clamp(20px, 2.5vw, 30px)' }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
              <span className="body-small-unified text-tertiary uppercase tracking-wider">
                Performance Metrics
              </span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-primary text-center"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text-primary)'
              }}
            >
              Investment Highlights
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-large-unified text-secondary mt-6"
              style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
            >
              Building value through strategic investments and operational excellence
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rhythm-card-gap"
          >
            {investmentHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full text-center">
                    <CardBody maxWidth="max-w-none" className="flex flex-col h-full">
                      {/* Icon - Unified Style */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm mx-auto"
                        style={{ backgroundColor: '#E0F2F1' }}
                      >
                        <Icon className="w-7 h-7" style={{ color: '#0D9488' }} />
                      </motion.div>

                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                        className="text-stats-number mb-2"
                        style={{ 
                          color: 'var(--color-primary-dark)',
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontWeight: 600
                        }}
                      >
                        {highlight.value}
                      </motion.div>
                      <h3 
                        className="h4-unified text-primary text-center rhythm-title-content"
                        style={{ 
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)'
                        }}
                      >
                        {highlight.label}
                      </h3>
                      <p 
                        className="body-regular-unified text-secondary text-center flex-grow"
                        style={{ 
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          color: 'var(--color-text-secondary)'
                        }}
                      >
                        {highlight.description}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Strategic Gold Mining Investments */}
      <section 
        className="section-unified relative overflow-hidden"
        style={{
          paddingTop: 'clamp(50px, 6vw, 70px)',
          paddingBottom: 'clamp(50px, 6vw, 70px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 50%, #FFFFFF 100%)',
          position: 'relative'
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {miningInvestments.map((investment, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardBody maxWidth="max-w-4xl mx-auto">
                    {/* Intro Zone - Narrow Column */}
                    <div className="mb-8">
                      <h2 
                        className="h2-unified text-primary"
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)',
                          marginBottom: 'var(--content-spacing-md)'
                        }}
                      >
                        {investment.title}
                      </h2>
                      <p 
                        className="body-large-unified text-secondary"
                        style={{ 
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          color: 'var(--color-text-secondary)',
                          maxWidth: '800px'
                        }}
                      >
                        {investment.description}
                      </p>
                    </div>

                    {/* Highlights + Impact Zone - Balanced Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 rhythm-card-gap">
                      <div>
                        <h3 
                          className="h3-unified text-primary"
                          style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--content-spacing-md)'
                          }}
                        >
                          Key Highlights
                        </h3>
                        <BulletList
                          items={investment.highlights}
                          bulletColor="#0D9488"
                          maxWidth="max-w-none"
                          titleGap="sm"
                        />
                      </div>

                      <div>
                        <h3 
                          className="h3-unified text-primary"
                          style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--content-spacing-md)'
                          }}
                        >
                          Impact
                        </h3>
                        <BulletList
                          items={investment.impact}
                          bulletColor="#0D9488"
                          maxWidth="max-w-none"
                          titleGap="sm"
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Strategy - Visual Separation */}
      <section 
        className="section-unified relative overflow-hidden"
        style={{
          paddingTop: 'clamp(50px, 6vw, 70px)',
          paddingBottom: 'clamp(50px, 6vw, 70px)',
          background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 50%, #FAFAFA 100%)',
          position: 'relative'
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
        <div className="container-unified relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardBody maxWidth="max-w-4xl mx-auto">
                  <h2 
                    className="h2-unified text-primary"
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--content-spacing-lg)'
                    }}
                  >
                    Why Invest with ZHH Group Holding
                  </h2>
                  <BulletList
                    bulletColor="#0D9488"
                    maxWidth="max-w-none"
                    items={[
                      {
                        title: 'Diversified Portfolio',
                        description: 'Strategic investments across construction, real estate, gold, and trading sectors',
                      },
                      {
                        title: 'Strong Governance',
                        description: 'Zero compliance violations with highest ethical and governance standards',
                      },
                      {
                        title: 'Sustainable Returns',
                        description: 'Long-term value creation with responsible, asset-backed growth',
                      },
                      {
                        title: 'Global Presence',
                        description: 'Operations across 10+ countries with strategic market positioning',
                      },
                    ]}
                  />
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

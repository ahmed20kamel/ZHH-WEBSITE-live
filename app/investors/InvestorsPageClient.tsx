'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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

        {/* Logo - Premium Positioning */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-4 left-4 md:top-8 md:left-8 z-30"
        >
          <Link 
            href="/" 
            className="group flex items-center gap-2 md:gap-4"
            style={{ textDecoration: 'none' }}
          >
            {/* Logo without square background */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img
                src="/assets/logos/zhh-group-holding-logo.svg"
                alt="ZHH Group Holding"
                className="w-20 h-20 md:w-32 md:h-32 object-contain drop-shadow-lg"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
                  WebkitFilter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
                }}
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Text Content - Direct on Image */}
        <div className="container-unified relative z-10 flex items-center justify-center" style={{ height: '100%', paddingTop: 'clamp(40px, 8vh, 80px)' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto space-y-6"
            style={{
              paddingLeft: 'clamp(16px, 4vw, 24px)',
              paddingRight: 'clamp(16px, 4vw, 24px)',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-white"
              style={{ 
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(32px, 8vw, 80px)',
                fontWeight: 300,
                lineHeight: 1.3,
                marginBottom: 'clamp(20px, 4vw, 32px)',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              For Investors
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-200"
              style={{ 
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(16px, 3.5vw, 24px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: '100%',
                margin: '0 auto',
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
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
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)',
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
            style={{ 
              marginTop: 'clamp(20px, 2.5vw, 30px)',
              paddingLeft: 'clamp(16px, 4vw, 0px)',
              paddingRight: 'clamp(16px, 4vw, 0px)',
              marginBottom: 'clamp(32px, 5vw, 48px)'
            }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 mb-6"
              style={{ flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
              <span className="body-small-unified text-tertiary uppercase tracking-wider" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
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
                color: 'var(--color-text-primary)',
                marginBottom: 'clamp(16px, 3vw, 24px)',
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                lineHeight: 1.3
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
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                lineHeight: 1.7
              }}
            >
              Building value through strategic investments and operational excellence
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{
              gap: 'clamp(24px, 4vw, 32px)',
              paddingLeft: 'clamp(16px, 4vw, 24px)',
              paddingRight: 'clamp(16px, 4vw, 24px)',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            {investmentHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div key={index} variants={fadeInUp} style={{ width: '100%', maxWidth: '100%' }}>
                  <Card className="h-full text-center" style={{ width: '100%', maxWidth: '100%', padding: 'clamp(24px, 4vw, 32px)' }}>
                    <CardBody maxWidth="max-w-none" className="flex flex-col h-full">
                      {/* Icon - Unified Style */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        className="rounded-lg flex items-center justify-center mb-4 md:mb-6 shadow-sm mx-auto"
                        style={{ 
                          backgroundColor: '#E0F2F1',
                          width: 'clamp(48px, 7vw, 56px)',
                          height: 'clamp(48px, 7vw, 56px)'
                        }}
                      >
                        <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: '#0D9488' }} />
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
                          fontWeight: 600,
                          fontSize: 'clamp(28px, 5vw, 40px)',
                          lineHeight: 1.2,
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
                        }}
                      >
                        {highlight.value}
                      </motion.div>
                      <h3 
                        className="h4-unified text-primary text-center"
                        style={{ 
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)',
                          fontSize: 'clamp(16px, 3.5vw, 18px)',
                          lineHeight: 1.3,
                          marginBottom: 'clamp(8px, 1.5vw, 12px)',
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
                        }}
                      >
                        {highlight.label}
                      </h3>
                      <p 
                        className="body-regular-unified text-secondary text-center flex-grow"
                        style={{ 
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          color: 'var(--color-text-secondary)',
                          fontSize: 'clamp(13px, 2.5vw, 15px)',
                          lineHeight: 1.6,
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
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
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)',
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
              <motion.div key={index} variants={fadeInUp} style={{ width: '100%', maxWidth: '100%' }}>
                <Card style={{ width: '100%', maxWidth: '100%', padding: 'clamp(24px, 4vw, 40px)' }}>
                  <CardBody maxWidth="max-w-4xl mx-auto">
                    {/* Intro Zone - Narrow Column */}
                    <div className="mb-6 md:mb-8">
                      <h2 
                        className="h2-unified text-primary"
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)',
                          marginBottom: 'clamp(12px, 2vw, 16px)',
                          fontSize: 'clamp(20px, 4.5vw, 28px)',
                          lineHeight: 1.3,
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
                        }}
                      >
                        {investment.title}
                      </h2>
                      <p 
                        className="body-large-unified text-secondary"
                        style={{ 
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          color: 'var(--color-text-secondary)',
                          maxWidth: '100%',
                          fontSize: 'clamp(14px, 3vw, 18px)',
                          lineHeight: 1.7,
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
                        }}
                      >
                        {investment.description}
                      </p>
                    </div>

                    {/* Highlights + Impact Zone - Balanced Grid */}
                    <div 
                      className="grid grid-cols-1 md:grid-cols-2"
                      style={{
                        gap: 'clamp(24px, 4vw, 32px)',
                        width: '100%',
                        boxSizing: 'border-box'
                      }}
                    >
                      <div style={{ width: '100%', maxWidth: '100%' }}>
                        <h3 
                          className="h3-unified text-primary"
                          style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: 'clamp(12px, 2vw, 16px)',
                            fontSize: 'clamp(18px, 4vw, 22px)',
                            lineHeight: 1.3,
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word'
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

                      <div style={{ width: '100%', maxWidth: '100%' }}>
                        <h3 
                          className="h3-unified text-primary"
                          style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: 'clamp(12px, 2vw, 16px)',
                            fontSize: 'clamp(18px, 4vw, 22px)',
                            lineHeight: 1.3,
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word'
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
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)',
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
            <motion.div variants={fadeInUp} style={{ width: '100%', maxWidth: '100%' }}>
              <Card style={{ width: '100%', maxWidth: '100%', padding: 'clamp(24px, 4vw, 40px)' }}>
                <CardBody maxWidth="max-w-4xl mx-auto">
                  <h2 
                    className="h2-unified text-primary"
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      marginBottom: 'clamp(20px, 3vw, 28px)',
                      fontSize: 'clamp(20px, 4.5vw, 28px)',
                      lineHeight: 1.3,
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
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

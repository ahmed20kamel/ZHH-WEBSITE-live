'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import CardBody from '@/components/ui/CardBody';
import BulletList from '@/components/ui/BulletList';

const investmentHighlights = [
  {
    value: '10B+',
    label: 'Assets Under Management',
    description: 'Strong financial foundation with diversified portfolio',
  },
  {
    value: '12B+ AED',
    label: 'Total Project Value',
    description: 'Significant investments across all divisions',
  },
  {
    value: '70+',
    label: 'Completed Projects',
    description: 'Proven track record of successful delivery',
  },
  {
    value: '165',
    label: 'Gold Traded',
    description: 'Ethical sourcing and trading operations',
  },
  {
    value: '3',
    label: 'Licensed Gold Mines',
    description: 'Active development and ownership',
  },
  {
    value: '0',
    label: 'Compliance Violations',
    description: 'Zero violations - highest governance standards',
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
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ minHeight: '70vh' }}>
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
          <Image
            src="/assets/hero/hero-investors.png"
            alt="ZHH Investors"
            fill
            priority
            className="object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
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
              objectPosition: 'bottom'
            }}
          />
        </div>
        
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 40%, transparent 100%)'
          }}
        />

        <div className="container-unified relative z-10 flex items-center justify-center" style={{ minHeight: '70vh', paddingTop: 'clamp(40px, 8vh, 80px)' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto space-y-6 px-4"
            style={{
              padding: 'clamp(40px, 5vw, 60px)',
              borderRadius: '16px',
              background: 'rgba(0, 0, 0, 0.35)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-1 bg-gradient-to-r from-[#00d4aa] via-[#c9a74a] to-[#00d4aa]" />
              <h1
                className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                For Investors
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#c9a74a] via-[#00d4aa] to-[#c9a74a]" />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Diversified portfolio across construction, real estate, gold, and trading. Strong governance & sustainable returns.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="section-unified bg-white">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="section-title-wrapper"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4"
            >
              Investment Highlights
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto"
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
            {investmentHighlights.map((highlight, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center">
                  <CardBody maxWidth="max-w-none">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                      className="text-4xl md:text-5xl font-bold text-[#00d4aa] mb-6"
                    >
                      {highlight.value}
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-semibold text-[#1a2332] mb-3">
                      {highlight.label}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Gold Mining Investments */}
      <section className="section-unified bg-gray-50">
        <div className="container-unified">
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
                      <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                        {investment.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                        {investment.description}
                      </p>
                    </div>

                    {/* Highlights + Impact Zone - Balanced Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 rhythm-card-gap">
                      <div>
                        <h3 className="text-xl font-semibold text-[#1a2332] mb-6">
                          Key Highlights
                        </h3>
                        <BulletList
                          items={investment.highlights}
                          bulletColor="#00d4aa"
                          maxWidth="max-w-none"
                          titleGap="sm"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[#1a2332] mb-6">Impact</h3>
                        <BulletList
                          items={investment.impact}
                          bulletColor="#00d4aa"
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
      <section className="section-unified bg-white">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardBody maxWidth="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-8">
                    Why Invest with ZHH Group Holding
                  </h2>
                  <BulletList
                    bulletColor="#00d4aa"
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

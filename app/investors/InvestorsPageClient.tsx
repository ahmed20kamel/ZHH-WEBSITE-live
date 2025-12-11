'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';

const investmentHighlights = [
  {
    value: 'AED 100M+',
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
    value: '1.2 Tons',
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
      {/* Hero Section with Background Image & Overlay */}
      <section className="relative h-[55vh] min-h-[480px] max-h-[620px] flex items-center justify-center overflow-hidden text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/back%20ground/bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 z-1"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 32, 45, 0.88) 0%, rgba(40, 60, 80, 0.7) 100%)'
          }}
        />
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 z-1 opacity-6"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="container-unified relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-semibold mb-5 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              For Investors
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Diversified portfolio across construction, real estate, gold, and trading. Strong governance & sustainable returns.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-3"
            >
              Investment Highlights
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base lg:text-lg text-gray-600 w-full"
              style={{ width: '100%' }}
            >
              Building value through strategic investments and operational excellence
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {investmentHighlights.map((highlight, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full p-7 lg:p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    className="text-4xl md:text-5xl font-bold text-[#00d4aa] mb-4"
                  >
                    {highlight.value}
                  </motion.div>
                  <h3 className="text-lg lg:text-xl font-semibold text-[#1a2332] mb-2">
                    {highlight.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Gold Mining Investments */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%' }}
          >
            {miningInvestments.map((investment, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 lg:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                    {investment.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {investment.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1a2332] mb-4">
                        Key Highlights
                      </h3>
                      <ul className="space-y-3">
                        {investment.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#00d4aa] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#1a2332] mb-4">Impact</h3>
                      <ul className="space-y-3">
                        {investment.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#00d4aa] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%' }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8 lg:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                  Why Invest with ZHH Group Holding
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1a2332] mb-2">Diversified Portfolio</h4>
                      <p className="text-gray-600 text-sm">
                        Strategic investments across construction, real estate, gold, and trading sectors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1a2332] mb-2">Strong Governance</h4>
                      <p className="text-gray-600 text-sm">
                        Zero compliance violations with highest ethical and governance standards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1a2332] mb-2">Sustainable Returns</h4>
                      <p className="text-gray-600 text-sm">
                        Long-term value creation with responsible, asset-backed growth
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#00d4aa] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1a2332] mb-2">Global Presence</h4>
                      <p className="text-gray-600 text-sm">
                        Operations across 10+ countries with strategic market positioning
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


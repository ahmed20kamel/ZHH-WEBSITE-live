'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';

const impactPillars = [
  {
    title: 'Environment',
    icon: '🌱',
    items: [
      'Ethical gold sourcing',
      'ESG-aligned refinery partnerships',
      'Energy-efficient construction',
    ],
    color: '#14A86A',
  },
  {
    title: 'Community',
    icon: '👥',
    items: [
      '300+ Direct Jobs',
      '1,200+ Indirect Jobs',
      'Skill development programs',
    ],
    color: '#0055A4',
  },
  {
    title: 'Responsible Gold',
    icon: '✨',
    items: [
      'Licensed African mines',
      'Traceable supply chain',
      'Community safeguards',
    ],
    color: '#D4AF37',
  },
];

export default function ImpactPageClient() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="section-unified bg-unified-dark text-white">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="section-title-wrapper"
            style={{ width: '100%' }}
          >
            <motion.h1 variants={fadeInUp} className="h1-unified text-white">
              Our Impact
            </motion.h1>
            <motion.p variants={fadeInUp} className="body-large-unified text-white/80">
              We create economic, social, and environmental value.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact Pillars Section */}
      <section className="section-unified bg-unified-off-white">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            style={{ width: '100%' }}
          >
            {impactPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
                className="group"
              >
                <Card className="h-full p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div 
                    className="absolute top-0 left-0 w-full h-2 transition-all duration-300"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <div className="text-center">
                    <div className="text-6xl mb-6">{pillar.icon}</div>
                    <h3 
                      className="h3-unified" 
                      style={{ 
                        color: '#1A1A1A', 
                        marginBottom: 'clamp(20px, 2vw, 24px)',
                        textAlign: 'center'
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <ul className="space-y-3 text-left" style={{ listStyle: 'none', padding: 0 }}>
                      {pillar.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div 
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: pillar.color }}
                          />
                          <span 
                            className="body-regular-unified" 
                            style={{ color: '#4A4A4A', lineHeight: 1.6 }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

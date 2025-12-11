'use client';

import { motion } from 'framer-motion';
import { divisions } from '@/data/divisions';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';

export default function RealEstatePageClient() {
  const division = divisions.find(d => d.id === 'real-estate');

  if (!division) return null;

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-unified bg-unified-dark text-white">
        <div className="container-unified">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="section-title-wrapper">
            <motion.h1 variants={fadeInUp} className="h1-unified text-white">{division.name}</motion.h1>
            <motion.p variants={fadeInUp} className="body-large-unified text-white/80">{division.tagline}</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-unified bg-unified-white">
        <div className="container-unified">
          <Card className="overflow-hidden" hover={false} style={{ padding: 0, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', borderRadius: '12px', border: '1px solid #E5E5E5', backgroundColor: '#FFFFFF' }}>
            <motion.div variants={fadeInUp} style={{ background: 'linear-gradient(135deg, #F9F9F9 0%, #FFFFFF 100%)', padding: 'clamp(40px, 5vw, 56px)', borderBottom: '1px solid #E5E5E5', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(24px, 3vw, 32px)', textAlign: 'center' }}>
              <div style={{ height: 'clamp(100px, 12vw, 140px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/assets/logos/zhh-real-estate-logo.svg" alt="ZHH Real Estate Logo" className="h-full w-auto object-contain" style={{ maxWidth: 'min(100%, 350px)' }} />
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-english-heading)', fontSize: 'clamp(32px, 4.1vw, 49px)', fontWeight: 700, color: '#032D46', marginBottom: 'clamp(10px, 1.3vw, 14px)' }}>{division.name}</h2>
                <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(15px, 2vw, 20px)', fontStyle: 'italic', color: '#01B2B2', fontWeight: 500 }}>{division.tagline}</p>
              </div>
            </motion.div>

            <div style={{ padding: 'clamp(27px, 3.4vw, 41px)' }}>
              <Tabs
                defaultTab="overview"
                tabs={[
                  { id: 'overview', label: 'Overview', content: <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#333333' }}>{division.overview}</p> },
                  { id: 'establishment', label: 'Establishment', content: <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#333333' }}>{division.establishment}</p> },
                  { id: 'core-activities', label: 'Core Activities', content: (
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                      {division.coreActivities.map((activity, idx) => (
                        <li key={idx} style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.7, color: '#333333', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <span style={{ color: '#01B2B2', fontSize: '22px', fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  )},
                  { id: 'achievements', label: 'Achievements', content: (
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                      {division.achievements.map((achievement, idx) => (
                        <li key={idx} style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.7, color: '#333333', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <span style={{ color: '#01B2B2', fontSize: '22px', fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )},
                  { id: 'ceo-message', label: 'CEO Message', content: (
                    <div style={{ padding: 'clamp(27px, 3.4vw, 34px)', background: 'linear-gradient(135deg, #F0FDFF 0%, #FFFFFF 100%)', borderRadius: '8px', borderLeft: '4px solid #01B2B2', border: '1px solid #E5E5E5' }}>
                      <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(20px, 2.2vw, 21px)', fontWeight: 600, color: '#032D46', marginBottom: 'clamp(8px, 1vw, 12px)' }}>{division.ceoMessage.name}</p>
                      <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', color: '#666666', marginBottom: 'clamp(20px, 2.5vw, 24px)' }}>{division.ceoMessage.title}</p>
                      <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#333333', fontStyle: 'italic', position: 'relative', paddingLeft: 'clamp(20px, 2.5vw, 28px)' }}>
                        <span style={{ position: 'absolute', left: 0, top: 0, fontSize: 'clamp(40px, 5vw, 56px)', color: '#01B2B2', opacity: 0.2, fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</span>
                        {division.ceoMessage.quote}
                      </p>
                    </div>
                  )}
                ]}
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import GlobalMap from '@/components/GlobalMap';
import Card from '@/components/ui/Card';

const divisions = [
  {
    name: 'ZHH Construction',
    description: 'As one of the leading entities in the region\'s construction sector, ZHH Construction specializes in delivering high-quality infrastructure, residential, and commercial projects. We build with precision and passion, shaping skylines and creating lasting landmarks.',
    icon: '🏗️',
  },
  {
    name: 'ZHH Real Estate',
    description: 'Our real estate division focuses on creating long-term value through strategic property development and diversified investment portfolios. We identify opportunities that promote sustainable growth and strengthen community living.',
    icon: '🏢',
  },
  {
    name: 'ZHH General Trading',
    description: 'ZHH General Trading serves as a global bridge for sourcing and supplying premium raw materials and products from around the world — including rice, flour, spices, coffee, frozen meat, poultry, cosmetics, toys, groceries, oil, sugar, and gold. With trusted networks in the USA, Belgium, Australia, India, Pakistan, China, Spain, Thailand, and beyond, we ensure quality and reliability in every trade.',
    icon: '🌍',
  },
  {
    name: 'Jewelust',
    description: 'Established in Dubai, Jewelust is the crown jewel of our group — a brand that celebrates the art of fine jewelry and gold bullion trading. With branches across Turkey, Uganda, Mali, and Congo, Jewelust is recognized for its craftsmanship, heritage designs, and secure international gold trading operations.',
    icon: '💎',
  },
];

export default function AboutZHHPageClient() {
  return (
    <div className="pt-20">
      {/* Premium Hero Section */}
      <section 
        className="relative h-[50vh] min-h-[450px] max-h-[600px] flex items-center justify-center overflow-hidden bg-primary-dark"
        style={{
          background: 'linear-gradient(135deg, #032D46 0%, #001A2F 50%, #003057 100%)',
        }}
      >
        {/* Subtle Background Texture */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="container-unified relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center w-full"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-hero-title text-white-color mb-lg"
            >
              About ZHH Group Holding
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-hero-subtitle text-white/90"
            >
              Building Value Across Construction, Real Estate, Trading & Precious Metals
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="section-unified bg-white scroll-margin-top" id="ceo-message">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-primary text-center-unified"
            >
              CEO Message
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp} 
              className="space-y-6 body-regular-unified text-secondary mb-xl"
            >
              <div 
                className="bg-off-white p-lg rounded-lg border-l-4 border-gold"
                style={{
                  border: '1px solid #E5E5E5'
                }}
              >
                <p
                  className="h4-unified text-primary-color mb-content"
                >
                  Mohamed Al Hammadi
                </p>
                <p
                  className="body-small-unified text-tertiary-color"
                >
                  Founder, Owner & Chairman – ZHH Group Holding & Subsidiaries
                </p>
              </div>
              
              <p>
                ZHH Group Holding stands as a proud symbol of Emirati ambition and excellence. Founded in the United Arab Emirates, our Group was built on a vision to contribute to the nation's economic growth through innovation, integrity, and world-class performance across every sector we operate in.
              </p>
              <p>
                From construction and real estate to global trading and precious metals, each of our subsidiaries — including Jewelust, our flagship in gold bullion and jewelry — reflects our commitment to sustainable development and long-term value creation. We are not only expanding our presence across regions but also reinforcing the UAE's position as a hub for reliability and opportunity.
              </p>
              <p>
                Our mission is to grow with purpose — to build, trade, and invest responsibly while maintaining the trust of our partners, the strength of our nation, and the legacy of Emirati leadership for generations to come.
              </p>
            </motion.div>

            {/* Signature Block */}
            <motion.div
              variants={fadeInUp}
              className="mt-xl pt-lg border-t border-gray-200 text-right"
            >
              <p
                className="body-regular-unified text-primary-color font-semibold mb-xs"
              >
                Mohamed Al Hammadi
              </p>
              <p
                className="body-small-unified text-tertiary-color"
              >
                Chairman & CEO<br />
                ZHH Group Holding
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="section-unified bg-off-white scroll-margin-top">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%' }}
          >
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-primary-color text-center-unified mb-xl"
            >
              Company Overview
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="body-large-unified text-secondary-color text-center-unified max-w-3xl mx-auto"
            >
              ZHH Group Holding is a leading Emirati holding company established in 2003, with a diversified portfolio spanning construction, real estate, global trading, and precious metals. Headquartered in Abu Dhabi, we operate across multiple continents, building lasting value through strategic investments and operational excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Divisions Section */}
      <section className="section-unified bg-white scroll-margin-top">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-primary-color text-center-unified mb-xl"
            >
              Our Divisions
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {divisions.map((division, index) => (
                <motion.div
                  key={division.name}
                  variants={fadeInUp}
                  className="card-unified card-hover-lift"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span style={{ fontSize: '32px' }}>{division.icon}</span>
                    <h3
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 'clamp(20px, 2.2vw, 24px)',
                        fontWeight: 600,
                        color: '#032D46',
                        margin: 0
                      }}
                    >
                      {division.name}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: 'clamp(15px, 1.7vw, 17px)',
                      lineHeight: 1.7,
                      color: '#333333',
                      margin: 0
                    }}
                  >
                    {division.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="section-unified bg-off-white scroll-margin-top">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%' }}
          >
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: 'var(--font-english-heading)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: 1.2,
                fontWeight: 700,
                color: '#032D46',
                marginBottom: '48px',
                textAlign: 'center'
              }}
            >
              Our Commitment
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: 'clamp(14px, 1.5vw, 15px)',
                lineHeight: 1.8,
                color: '#333333',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                maxWidth: '900px',
                margin: '0 auto'
              }}
            >
              <p>
                At ZHH Group Holding, leadership is built on integrity, innovation, and long-term vision. Our Executive Team drives sustainable growth across all sectors, ensuring every decision reflects the values of the UAE and contributes to the nation's global economic influence.
              </p>
              <p>
                We remain committed to responsible investments, strengthening international partnerships, and pioneering new opportunities that create long-term value for future generations.
              </p>
              <p>
                Together, we continue building a legacy of trust, ambition, and excellence — for the UAE and the world.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Vision - Standalone Section */}
      <section className="section-unified bg-white scroll-margin-top" id="vision">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%' }}
          >
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: 'var(--font-english-heading)',
                fontSize: 'clamp(38px, 4.8vw, 58px)',
                lineHeight: 1.2,
                fontWeight: 700,
                color: '#032D46',
                marginBottom: 'clamp(32px, 4vw, 48px)',
                textAlign: 'center',
              }}
            >
              Our Vision
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-large-unified text-secondary text-center-unified"
              style={{
                margin: '0 auto'
              }}
            >
              To be a leading Emirati holding group that delivers value-driven excellence in every sector we operate, contributing to economic prosperity and global trade connectivity, while strengthening the UAE's global economic presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Mission - Standalone Section with Two-Column Layout */}
      <section className="section-unified bg-off-white scroll-margin-top" id="mission">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%' }}
          >
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: 'var(--font-english-heading)',
                fontSize: 'clamp(38px, 4.8vw, 58px)',
                lineHeight: 1.2,
                fontWeight: 700,
                color: '#032D46',
                marginBottom: 'clamp(48px, 6vw, 64px)',
                textAlign: 'center',
              }}
            >
              Our Mission
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                variants={fadeInUp}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(17px, 2.1vw, 24px)',
                }}
              >
                <div
                  style={{
                    width: 'clamp(60px, 7vw, 80px)',
                    height: 'clamp(60px, 7vw, 80px)',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #01B2B2 0%, #00A0A0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'clamp(16px, 2vw, 24px)',
                  }}
                >
                  <svg width="clamp(32px, 4vw, 40px)" height="clamp(32px, 4vw, 40px)" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 'clamp(17px, 2vw, 21px)',
                    lineHeight: 1.8,
                    color: '#333333',
                  }}
                >
                  We drive success through strategic investments, operational excellence, and innovative solutions across construction, real estate, global trade, and precious metals — while maintaining the highest ethical, compliance, and governance standards.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(17px, 2.1vw, 24px)',
                }}
              >
                <div
                  style={{
                    width: 'clamp(60px, 7vw, 80px)',
                    height: 'clamp(60px, 7vw, 80px)',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #032D46 0%, #1a3a52 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'clamp(16px, 2vw, 24px)',
                  }}
                >
                  <svg width="clamp(32px, 4vw, 40px)" height="clamp(32px, 4vw, 40px)" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 'clamp(17px, 2vw, 21px)',
                    lineHeight: 1.8,
                    color: '#333333',
                  }}
                >
                  We empower our subsidiaries to lead in their markets by providing strong corporate governance, advanced technologies, and collaborative leadership — expanding our footprint, strengthening partnerships, and maximizing long-term stakeholder value.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Core Values - Standalone Grid Section */}
      <section className="section-unified bg-white scroll-margin-top" id="core-values">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%' }}
          >
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: 'var(--font-english-heading)',
                fontSize: 'clamp(38px, 4.8vw, 58px)',
                lineHeight: 1.2,
                fontWeight: 700,
                color: '#032D46',
                marginBottom: 'clamp(48px, 6vw, 64px)',
                textAlign: 'center',
              }}
            >
              Core Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                { 
                  title: 'Integrity', 
                  desc: 'Transparent, ethical, and accountable.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4" />
                      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
                      <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
                      <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" />
                    </svg>
                  )
                },
                { 
                  title: 'Excellence', 
                  desc: 'Setting new standards in quality and performance.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  )
                },
                { 
                  title: 'National Pride', 
                  desc: 'Advancing the UAE\'s vision for prosperity.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21L12 2L21 21H3Z" />
                      <path d="M12 2V21" />
                    </svg>
                  )
                },
                { 
                  title: 'Sustainability', 
                  desc: 'Building responsibly for future generations.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  )
                },
                { 
                  title: 'Partnership', 
                  desc: 'Creating trusted, mutually beneficial collaborations.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full p-8 text-center" hover={true}>
                    <div
                      style={{
                        width: 'clamp(70px, 8vw, 90px)',
                        height: 'clamp(70px, 8vw, 90px)',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #01B2B2 0%, #00A0A0 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto clamp(24px, 3vw, 32px)',
                        color: '#FFFFFF',
                      }}
                    >
                      {value.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 'clamp(20px, 2.2vw, 24px)',
                        fontWeight: 600,
                        color: '#032D46',
                        marginBottom: 'clamp(10px, 1.3vw, 14px)',
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 'clamp(14px, 1.5vw, 15px)',
                        lineHeight: 1.7,
                        color: '#666666',
                      }}
                    >
                      {value.desc}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Our Emirati Identity - Premium Hero-Style Section */}
      <section 
        className="section-unified relative overflow-hidden" 
        id="emirati-identity" 
        style={{ 
          background: 'linear-gradient(135deg, #032D46 0%, #001A2F 50%, #003057 100%)',
          paddingTop: 'clamp(102px, 12.8vw, 153px)',
          paddingBottom: 'clamp(102px, 12.8vw, 153px)',
        }}
      >
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(1, 178, 178, 0.3) 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }}
        />
        
        <div className="container-unified relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%' }}
          >
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: 'var(--font-english-heading)',
                fontSize: 'clamp(36px, 4.7vw, 58px)',
                lineHeight: 1.2,
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: 'clamp(40px, 5vw, 56px)',
                textAlign: 'center',
              }}
            >
              Our Emirati Identity
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-large-unified text-white/95 text-center-unified"
              style={{
                margin: '0 auto'
              }}
            >
              Founded in the United Arab Emirates, ZHH Group Holding carries the values of the nation — vision, integrity, and innovation. Every project and partnership contributes to the UAE's economic strength and global reputation for excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Global Presence + Global Map - Combined Section */}
      <section className="section-unified bg-white scroll-margin-top" id="global-presence">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%' }}
          >
            {/* 5.1 Global Presence Text Block */}
            <motion.div
              variants={fadeInUp}
              style={{
                marginBottom: 'clamp(64px, 8vw, 96px)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-english-heading)',
                  fontSize: 'clamp(38px, 4.8vw, 58px)',
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: '#032D46',
                  marginBottom: 'clamp(32px, 4vw, 48px)',
                  textAlign: 'center',
                }}
              >
                Global Presence
              </h2>
              <p
                className="body-large-unified text-secondary text-center-unified"
                style={{
                  margin: '0 auto var(--content-spacing-xl)'
                }}
              >
                A growing Emirati presence supporting trade and strategic development.
              </p>

              {/* Global Presence List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    region: 'UAE',
                    locations: [
                      { city: 'Abu Dhabi (Main Offices)', entities: ['ZHH Group Holding LLC', 'ZHH Construction LLC', 'ZHH General Trading LLC', 'ZHH Real Estates'] },
                      { city: 'Dubai (Main Office & Showroom)', entities: ['Jewelust Jewelry & Gold Bullion Trading LLC'] },
                    ]
                  },
                  {
                    region: 'UGANDA',
                    entities: ['ZHH General Trading', 'Jewelust Jewelry']
                  },
                  {
                    region: 'KENYA',
                    entities: ['ZHH General Trading', 'Jewelust Jewelry']
                  },
                  {
                    region: 'MALI',
                    entities: ['ZHH General Trading', 'Jewelust Jewelry']
                  },
                  {
                    region: 'CONGO',
                    entities: ['ZHH General Trading', 'Jewelust Jewelry']
                  },
                  {
                    region: 'GUINEA',
                    entities: ['ZHH General Trading']
                  },
                  {
                    region: 'BURKINA FASO',
                    entities: ['ZHH General Trading']
                  },
                  {
                    region: 'SIERRA LEONE',
                    entities: ['ZHH General Trading']
                  },
                  {
                    region: 'TURKEY',
                    entities: ['Jewelust Jewelry']
                  },
                  {
                    region: 'TANZANIA',
                    entities: ['Jewelust Jewelry']
                  },
                  {
                    region: 'ZAMBIA',
                    entities: ['Jewelust Jewelry']
                  },
                  {
                    region: 'ZIMBABWE',
                    entities: ['Jewelust Jewelry']
                  },
                ].map((location, index) => (
                  <motion.div
                    key={location.region}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.05 }}
                    style={{
                      padding: 'clamp(17px, 2.1vw, 24px)',
                      background: '#F9F9F9',
                      borderRadius: '12px',
                      border: '1px solid #E5E5E5',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 'clamp(15px, 1.7vw, 19px)',
                        fontWeight: 700,
                        color: '#032D46',
                        marginBottom: 'clamp(10px, 1.3vw, 14px)',
                      }}
                    >
                      {location.region}
                    </h3>
                    {location.locations ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2vw, 20px)' }}>
                        {location.locations.map((loc, idx) => (
                          <div key={idx}>
                            <p
                              style={{
                                fontFamily: '"Montserrat", sans-serif',
                                fontSize: 'clamp(12px, 1.4vw, 14px)',
                                fontWeight: 600,
                                color: '#01B2B2',
                                marginBottom: 'clamp(6px, 0.8vw, 8px)',
                              }}
                            >
                              {loc.city}:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.5vw, 6px)' }}>
                              {loc.entities.map((entity, eIdx) => (
                                <li
                                  key={eIdx}
                                  style={{
                                    fontFamily: '"Montserrat", sans-serif',
                                    fontSize: 'clamp(12px, 1.4vw, 14px)',
                                    lineHeight: 1.6,
                                    color: '#666666',
                                    paddingLeft: 'clamp(14px, 1.7vw, 17px)',
                                    position: 'relative',
                                  }}
                                >
                                  <span
                                    style={{
                                      position: 'absolute',
                                      left: 0,
                                      top: '0.6em',
                                      width: '6px',
                                      height: '6px',
                                      borderRadius: '50%',
                                      background: '#01B2B2',
                                    }}
                                  />
                                  {entity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(6px, 0.8vw, 8px)' }}>
                        {location.entities.map((entity, eIdx) => (
                          <li
                            key={eIdx}
                            style={{
                              fontFamily: '"Montserrat", sans-serif',
                              fontSize: 'clamp(12px, 1.4vw, 14px)',
                              lineHeight: 1.6,
                              color: '#666666',
                              paddingLeft: 'clamp(14px, 1.7vw, 17px)',
                              position: 'relative',
                            }}
                          >
                            <span
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: '0.6em',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#01B2B2',
                              }}
                            />
                            {entity}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 5.2 Global Presence Map */}
            <motion.div
              variants={fadeInUp}
              style={{
                marginTop: 'clamp(64px, 8vw, 96px)',
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-english-heading)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: '#032D46',
                  marginBottom: 'clamp(40px, 5vw, 56px)',
                }}
              >
                Our Global Footprint
              </h3>
              <GlobalMap />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


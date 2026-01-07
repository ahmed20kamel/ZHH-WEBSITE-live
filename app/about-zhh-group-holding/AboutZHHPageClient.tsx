'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import GlobalMap from '@/components/GlobalMap';
import Card from '@/components/ui/Card';
import { Shield, Award, Leaf } from 'lucide-react';

const divisions = [
  {
    name: 'ZHH Construction',
    description: 'As one of the leading entities in the region\'s construction sector, ZHH Construction specializes in delivering high-quality infrastructure, residential, and commercial projects. We build with precision and passion, shaping skylines and creating lasting landmarks.',
    logo: '/assets/logos/zhh-construction-logo.svg',
  },
  {
    name: 'ZHH Real Estate',
    description: 'Our real estate division focuses on creating long-term value through strategic property development and diversified investment portfolios. We identify opportunities that promote sustainable growth and strengthen community living.',
    logo: '/assets/logos/zhh-real-estate-logo.svg',
  },
  {
    name: 'ZHH General Trading',
    description: 'ZHH General Trading serves as a global bridge for sourcing and supplying premium raw materials and products from around the world — including rice, flour, spices, coffee, frozen meat, poultry, cosmetics, toys, groceries, oil, sugar, and gold. With trusted networks in the USA, Belgium, Australia, India, Pakistan, China, Spain, Thailand, and beyond, we ensure quality and reliability in every trade.',
    logo: '/assets/logos/zhh-general-trading-logo.svg',
  },
  {
    name: 'Jewelust',
    description: 'Established in Dubai, Jewelust is the crown jewel of our group — a brand that celebrates the art of fine jewelry and gold bullion trading. With branches across Turkey, Uganda, Mali, and Congo, Jewelust is recognized for its craftsmanship, heritage designs, and secure international gold trading operations.',
    logo: '/assets/logos/jewelust-logo.svg',
  },
];

export default function AboutZHHPageClient() {
  return (
    <div>
      {/* Premium Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ height: '100vh', minHeight: '600px', maxHeight: '1200px' }}>
        {/* Background Image - Desktop Only */}
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
          <Image
            src="/assets/hero/hero-about.png"
            alt="About ZHH Group Holding"
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
        {/* Mobile Static Background - Shows bottom portion */}
        <div className="absolute inset-0 w-full h-full z-0 md:hidden">
          <Image
            src="/assets/hero/hero-about.png"
            alt="About ZHH Group Holding"
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
                src="/assets/logos/ZHH%20Group%20Holding%20Logo.svg"
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
              About ZHH Group Holding
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
              Building Value Across Construction, Real Estate, Trading & Precious Metals
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section 
        className="section-unified relative overflow-hidden scroll-margin-top" 
        id="ceo-message"
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
        
        <div className="container-unified relative z-10">
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
              style={{
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                lineHeight: 1.3,
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                marginBottom: 'clamp(24px, 4vw, 32px)'
              }}
            >
              CEO Message
            </motion.h2>
            
            {/* Premium CEO Card with Image */}
            <motion.div 
              variants={fadeInUp} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              style={{
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid #E5E7EB'
              }}
            >
              {/* CEO Header with Image & Text Side-by-Side */}
              <div 
                className="relative"
                style={{
                  background: 'linear-gradient(135deg, #032D46 0%, #01B2B2 100%)',
                  padding: 'clamp(28px, 4vw, 48px)'
                }}
              >
                <div
                  className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8"
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  {/* CEO Image (single use) */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: 'clamp(120px, 16vw, 170px)',
                      height: 'clamp(120px, 16vw, 170px)',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '4px solid rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.18)',
                      flexShrink: 0
                }}
              >
                    <img
                      src="/assets/board/board-mohamed-al-hammadi.jpg"
                      alt="Mohamed Al Hammadi - Chairman & CEO"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </motion.div>

                  {/* CEO Name and Title */}
                  <div className="text-center md:text-left">
                    <h3
                      style={{
                        fontFamily: 'var(--font-english-heading)',
                        fontSize: 'clamp(26px, 3vw, 36px)',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: 'clamp(6px, 0.8vw, 10px)',
                        textShadow: '0 2px 6px rgba(0, 0, 0, 0.18)'
                      }}
                >
                  Mohamed Al Hammadi
                    </h3>
                <p
                      style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontSize: 'clamp(14px, 1.6vw, 17px)',
                        color: 'rgba(255, 255, 255, 0.94)',
                        fontWeight: 500,
                        lineHeight: 1.5
                      }}
                >
                      Founder, Owner & Chairman<br />
                      ZHH Group Holding & Subsidiaries
                </p>
                  </div>
                </div>
              </div>
              
              {/* CEO Message Content */}
              <div 
                className="p-lg md:p-xl"
                style={{
                  padding: 'clamp(32px, 4.5vw, 54px)'
                }}
              >
                <div 
                  className="space-y-6 body-regular-unified text-secondary-color"
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: 'clamp(15px, 1.8vw, 18px)',
                    lineHeight: 1.8,
                    color: '#333333'
                  }}
                >
              <p>
                ZHH Group Holding stands as a proud symbol of Emirati ambition and excellence. Founded in the United Arab Emirates, our Group was built on a vision to contribute to the nation's economic growth through innovation, integrity, and world-class performance across every sector we operate in.
              </p>
              <p>
                    From construction and real estate to global trading and precious metals, each of our subsidiaries — including Jewelust, our flagship in gold bullion and jewelry — reflects our commitment to sustainable development and long-term value creation. We are not only expanding our presence across regions but also reinforcing the UAE's position as a hub for reliability, and opportunity.
              </p>
              <p>
                Our mission is to grow with purpose — to build, trade, and invest responsibly while maintaining the trust of our partners, the strength of our nation, and the legacy of Emirati leadership for generations to come.
              </p>
                </div>
              </div>
            </motion.div>

            {/* Signature Block (text only) */}
            <motion.div
              variants={fadeInUp}
              className="mt-xl pt-xl border-t"
              style={{
                borderTop: '2px solid #E5E7EB',
                paddingTop: 'clamp(40px, 5vw, 56px)',
                textAlign: 'right'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
                  fontWeight: 700,
                  color: '#032D46',
                  marginBottom: 'clamp(6px, 0.8vw, 10px)'
                }}
              >
                Mohamed Al Hammadi
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: 'clamp(14px, 1.6vw, 16px)',
                  color: '#666666',
                  lineHeight: 1.6
                }}
              >
                Chairman & CEO<br />
                ZHH Group Holding
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section 
        className="section-unified relative overflow-hidden scroll-margin-top"
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
              className="h2-unified text-primary-color text-center-unified mb-xl"
              style={{
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                lineHeight: 1.3,
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                marginBottom: 'clamp(24px, 4vw, 32px)'
              }}
            >
              Company Overview
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl group"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: 'clamp(32px, 4.5vw, 56px)',
                border: '1px solid rgba(1, 178, 178, 0.1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                position: 'relative'
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
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
                  src="/assets/About ZHH Group Holding/Company Overview.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  style={{
                    filter: 'blur(2px)',
                    opacity: 0.35,
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.1)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    zIndex: 1
                  }}
                />
              </div>
              
              <div className="relative text-center max-w-4xl mx-auto space-y-4" style={{ position: 'relative', zIndex: 2 }}>
                <p
                  className="body-large-unified text-secondary-color"
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: 'clamp(15px, 1.9vw, 18px)',
                    lineHeight: 1.9,
                    color: '#000000',
                    fontWeight: 600
                  }}
            >
              ZHH Group Holding is a leading Emirati holding company established in 2003, with a diversified portfolio spanning construction, real estate, global trading, and precious metals. Headquartered in Abu Dhabi, we operate across multiple continents, building lasting value through strategic investments and operational excellence.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Divisions Section */}
      <section 
        className="section-unified relative overflow-hidden scroll-margin-top"
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
        
        <div className="container-unified relative z-10">
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
              style={{
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                lineHeight: 1.3,
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                marginBottom: 'clamp(24px, 4vw, 32px)'
              }}
            >
              Our Divisions
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {divisions.map((division, index) => (
                <motion.div
                  key={division.name}
                  variants={fadeInUp}
                  custom={index}
                  className="h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div
                    className="card-unified h-full relative overflow-hidden group"
                    style={{
                      padding: 'clamp(24px, 3vw, 32px)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(229, 231, 235, 0.5)',
                      transition: 'all 0.3s ease',
                      position: 'relative'
                    }}
                  >
                    {/* Hover Border Effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
                      style={{ zIndex: 3 }}
                      whileHover={{
                        borderColor: 'rgba(13, 148, 136, 0.3)',
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Background Image with Blur and Overlay - Full Card Background */}
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
                      {division.name === 'ZHH Construction' && (
                        <Image
                          src="/assets/hero/card/Construction.jpg"
                          alt=""
                          fill
                          className="object-cover"
                          style={{
                            filter: 'blur(2px)',
                            opacity: 0.35,
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transform: 'scale(1.1)'
                          }}
                        />
                      )}
                      {division.name === 'ZHH Real Estate' && (
                        <Image
                          src="/assets/hero/card/Real Estates.jpg"
                          alt=""
                          fill
                          className="object-cover"
                          style={{
                            filter: 'blur(2px)',
                            opacity: 0.35,
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transform: 'scale(1.1)'
                          }}
                        />
                      )}
                      {division.name === 'ZHH General Trading' && (
                        <Image
                          src="/assets/hero/card/General Trading.jpg"
                          alt=""
                          fill
                          className="object-cover"
                          style={{
                            filter: 'blur(2px)',
                            opacity: 0.35,
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transform: 'scale(1.1)'
                          }}
                        />
                      )}
                      {division.name === 'Jewelust' && (
                        <Image
                          src="/assets/hero/card/Gold2.JPEG"
                          alt=""
                          fill
                          className="object-cover"
                          style={{
                            filter: 'blur(2px)',
                            opacity: 0.35,
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transform: 'scale(1.1)'
                          }}
                        />
                      )}
                      {/* White Overlay - Reduced for better image visibility */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          zIndex: 1
                        }}
                      />
                    </div>

                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <div className="flex flex-col items-center" style={{ marginBottom: 'clamp(20px, 2.5vw, 28px)' }}>
                        {/* Logo Container with Enhanced Animation */}
                        <motion.div
                          style={{
                            height: 'clamp(80px, 10vw, 120px)',
                            width: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            marginBottom: 'clamp(16px, 2vw, 24px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(13, 148, 136, 0.1)',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                          }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: '0 8px 24px rgba(13, 148, 136, 0.2)'
                          }}
                        >
                          <div
                            style={{
                              position: 'relative',
                              zIndex: 2,
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: 'clamp(10px, 1.5vw, 15px)'
                            }}
                          >
                            <motion.img
                              src={division.logo}
                              alt={`${division.name} Logo`}
                              className="h-full w-auto object-contain"
                              style={{
                                maxWidth: 'min(100%, 250px)',
                                height: 'auto',
                                maxHeight: '100%'
                              }}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </motion.div>
                        
                        {/* Title with Enhanced Styling */}
                        <motion.h3
                          style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontSize: 'clamp(20px, 2.2vw, 24px)',
                            fontWeight: 700,
                            color: '#000000',
                            margin: 0,
                            marginBottom: 'clamp(12px, 1.5vw, 16px)',
                            textAlign: 'center',
                            lineHeight: '1.3',
                            letterSpacing: '-0.01em'
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        >
                          {division.name}
                        </motion.h3>
                      </div>
                      
                      {/* Description with Enhanced Styling */}
                      <motion.p
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 'clamp(15px, 1.7vw, 17px)',
                          lineHeight: 1.7,
                          color: '#000000',
                          margin: 0,
                          textAlign: 'center',
                          marginTop: 'clamp(8px, 1vw, 12px)',
                          fontWeight: 600
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        {division.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section 
        className="section-unified relative overflow-hidden scroll-margin-top"
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
        
        <div className="container-unified relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%', marginTop: 'clamp(20px, 2.5vw, 30px)' }}
          >
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-primary text-center"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 'clamp(32px, 4vw, 48px)',
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                lineHeight: 1.3,
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Our Commitment
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden group"
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: 'clamp(32px, 4vw, 48px)',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(1, 178, 178, 0.1)',
                position: 'relative'
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
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
                  src="/assets/About ZHH Group Holding/Our Commitment.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  style={{
                    filter: 'blur(2px)',
                    opacity: 0.35,
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.1)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    zIndex: 1
                  }}
                />
              </div>
              
              <div
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: 'clamp(15px, 1.7vw, 17px)',
                  lineHeight: 1.8,
                  color: '#000000',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(20px, 2.5vw, 24px)',
                  position: 'relative',
                  zIndex: 2,
                  fontWeight: 600
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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Vision - Standalone Section */}
      <section 
        className="section-unified relative overflow-hidden scroll-margin-top" 
        id="vision"
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
        
        <div className="container-unified relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%', marginTop: 'clamp(20px, 2.5vw, 30px)' }}
          >
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-primary text-center"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 'clamp(32px, 4vw, 48px)',
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                lineHeight: 1.3,
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Our Vision
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden group"
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: 'clamp(32px, 4vw, 48px)',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(1, 178, 178, 0.1)',
                position: 'relative'
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
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
                  src="/assets/About ZHH Group Holding/Our Vision.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  style={{
                    filter: 'blur(2px)',
                    opacity: 0.35,
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.1)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    zIndex: 1
                  }}
                />
              </div>
              
              <p
                className="body-large-unified text-secondary text-center"
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: 'clamp(16px, 1.9vw, 19px)',
                  lineHeight: 1.8,
                  color: '#000000',
                  margin: 0,
                  position: 'relative',
                  zIndex: 2,
                  fontWeight: 600
                }}
              >
                To be a leading Emirati holding group that delivers value-driven excellence in every sector we operate, contributing to economic prosperity and global trade connectivity, while strengthening the UAE's global economic presence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Mission - Standalone Section with Two-Column Layout */}
      <section 
        className="section-unified relative overflow-hidden scroll-margin-top" 
        id="mission"
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
        
        <div className="container-unified relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%', marginTop: 'clamp(20px, 2.5vw, 30px)' }}
          >
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-primary text-center"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 'clamp(48px, 6vw, 64px)',
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                lineHeight: 1.3,
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Our Mission
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                variants={fadeInUp}
                className="relative overflow-hidden group"
                style={{
                  padding: 'clamp(32px, 4vw, 48px)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(1, 178, 178, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(17px, 2.1vw, 24px)',
                  position: 'relative'
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
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
                    src="/assets/About ZHH Group Holding/Our Mission1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    style={{
                      filter: 'blur(2px)',
                      opacity: 0.35,
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      zIndex: 1
                    }}
                  />
                </div>
                
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
                    boxShadow: '0 4px 12px rgba(1, 178, 178, 0.2)',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <svg width="clamp(32px, 4vw, 40px)" height="clamp(32px, 4vw, 40px)" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: 'clamp(17px, 2vw, 21px)',
                    lineHeight: 1.8,
                    color: '#000000',
                    position: 'relative',
                    zIndex: 2,
                    fontWeight: 600
                  }}
                >
                  We drive success through strategic investments, operational excellence, and innovative solutions across construction, real estate, global trade, and precious metals — while maintaining the highest ethical, compliance, and governance standards.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative overflow-hidden group"
                style={{
                  padding: 'clamp(32px, 4vw, 48px)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(1, 178, 178, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(17px, 2.1vw, 24px)',
                  position: 'relative'
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
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
                    src="/assets/About ZHH Group Holding/Our Mission2.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    style={{
                      filter: 'blur(2px)',
                      opacity: 0.35,
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      zIndex: 1
                    }}
                  />
                </div>
                
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
                    boxShadow: '0 4px 12px rgba(3, 45, 70, 0.2)',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <svg width="clamp(32px, 4vw, 40px)" height="clamp(32px, 4vw, 40px)" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: 'clamp(17px, 2vw, 21px)',
                    lineHeight: 1.8,
                    color: '#000000',
                    position: 'relative',
                    zIndex: 2,
                    fontWeight: 600
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
      <section 
        className="section-unified relative overflow-hidden scroll-margin-top" 
        id="core-values"
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
        
        <div className="container-unified relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="w-full"
            style={{ width: '100%', marginTop: 'clamp(20px, 2.5vw, 30px)' }}
          >
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-primary text-center"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 'clamp(48px, 6vw, 64px)',
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                lineHeight: 1.3,
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Core Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                { 
                  title: 'Integrity', 
                  desc: 'Transparent, ethical, and accountable.',
                  icon: <Shield size={32} />
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
                  icon: <Award size={32} />
                },
                { 
                  title: 'Sustainability', 
                  desc: 'Building responsibly for future generations.',
                  icon: <Leaf size={32} />
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
              ].map((value, index) => {
                // Map value titles to image filenames
                const imageMap: { [key: string]: string } = {
                  'Integrity': 'Integrity.jpg',
                  'Excellence': 'Excellence.jpeg',
                  'National Pride': 'National Pride.jpg',
                  'Sustainability': 'Sustainability.jpg',
                  'Partnership': 'Partnership.jpg'
                };
                
                const imageName = imageMap[value.title];
                
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                    whileHover={{ y: -8 }}
                  >
                    <Card 
                      className="h-full p-8 text-center relative overflow-hidden group" 
                      hover={true}
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        border: '1px solid rgba(1, 178, 178, 0.1)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        borderRadius: '16px'
                      }}
                    >
                      {/* Background Image */}
                      {imageName && (
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
                            src={`/assets/About ZHH Group Holding/${imageName}`}
                            alt=""
                            fill
                            className="object-cover"
                            style={{
                              filter: 'blur(2px)',
                              opacity: 0.35,
                              objectFit: 'cover',
                              objectPosition: 'center',
                              transform: 'scale(1.1)'
                            }}
                          />
                          <div
                            style={{
                              position: 'absolute',
                              inset: 0,
                              backgroundColor: 'rgba(255, 255, 255, 0.25)',
                              zIndex: 1
                            }}
                          />
                        </div>
                      )}
                      
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={{
                          width: 'clamp(70px, 8vw, 90px)',
                          height: 'clamp(70px, 8vw, 90px)',
                          borderRadius: '16px',
                          background: 'linear-gradient(135deg, #01B2B2 0%, #00A0A0 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: 'clamp(12px, 1.5vw, 18px) auto clamp(24px, 3vw, 32px)',
                          color: '#FFFFFF',
                          boxShadow: '0 4px 12px rgba(1, 178, 178, 0.25)',
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        {value.icon}
                      </motion.div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 'clamp(20px, 2.2vw, 24px)',
                          fontWeight: 700,
                          color: '#000000',
                          marginBottom: 'clamp(10px, 1.3vw, 14px)',
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        {value.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 'clamp(14px, 1.5vw, 15px)',
                          lineHeight: 1.7,
                          color: '#000000',
                          fontWeight: 600,
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        {value.desc}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Our Emirati Identity - Premium Section with Image */}
      <section 
        className="section-unified relative overflow-hidden" 
        id="emirati-identity" 
        style={{ 
          background: 'linear-gradient(135deg, #032D46 0%, #001A2F 50%, #003057 100%)',
          paddingTop: 'clamp(80px, 10vw, 120px)',
          paddingBottom: 'clamp(80px, 10vw, 120px)',
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
            {/* Title */}
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                lineHeight: 1.2,
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: 'clamp(48px, 6vw, 72px)',
                textAlign: 'center',
              }}
            >
              Our Emirati Identity
            </motion.h2>

            {/* Image and Text Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Section */}
              <motion.div
                variants={fadeInUp}
                className="relative"
                style={{
                  order: 2,
                }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    width: '100%',
                    height: 'clamp(300px, 40vw, 500px)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Image
                    src="/assets/hero/hero-About ZHH Group.jpg"
                    alt="ZHH Group Holding - Emirati Identity"
                    fill
                    className="object-cover"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    priority
                  />
                  {/* Subtle Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(3, 45, 70, 0.2) 0%, rgba(1, 178, 178, 0.1) 100%)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Text Content Section */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col justify-center"
                style={{
                  order: 1,
                  padding: 'clamp(20px, 3vw, 40px)',
                }}
              >
                <p
                  className="body-large-unified text-white"
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.95)',
                    marginBottom: 'clamp(24px, 3vw, 32px)',
                  }}
                >
                  Founded in the United Arab Emirates, ZHH Group Holding carries the values of the nation — vision, integrity, and innovation. Every project and partnership contributes to the UAE's economic strength and global reputation for excellence.
                </p>
                
                {/* Additional Content Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2.5vw, 24px)' }}>
                  {[
                    {
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      ),
                      text: 'Built on Emirati values of vision, integrity, and innovation'
                    },
                    {
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
                          <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
                          <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" />
                        </svg>
                      ),
                      text: 'Contributing to the UAE\'s economic strength and global reputation'
                    },
                    {
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 21L12 2L21 21H3Z" />
                          <path d="M12 2V21" />
                        </svg>
                      ),
                      text: 'Strengthening partnerships that reflect Emirati excellence'
                    }
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                      style={{
                        padding: 'clamp(16px, 2vw, 24px)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <div
                        className="flex-shrink-0"
                        style={{
                          color: '#01B2B2',
                          marginTop: '2px',
                        }}
                      >
                        {point.icon}
                      </div>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 'clamp(14px, 1.7vw, 16px)',
                          lineHeight: 1.6,
                          color: 'rgba(255, 255, 255, 0.9)',
                          margin: 0,
                        }}
                      >
                        {point.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
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

              {/* Global Presence List - 3 Cards Only */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1: UAE Main Offices */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 8px 24px rgba(1, 178, 178, 0.12)',
                    borderColor: '#01B2B2',
                    background: '#FFFFFF',
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{
                    padding: 'clamp(17px, 2.1vw, 24px)',
                    background: '#F9F9F9',
                    borderRadius: '12px',
                    border: '1px solid #E5E5E5',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: 'clamp(15px, 1.7vw, 19px)',
                      fontWeight: 700,
                      color: '#032D46',
                      marginBottom: 'clamp(16px, 2vw, 20px)',
                    }}
                  >
                    UAE Main Offices
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2vw, 20px)' }}>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 'clamp(12px, 1.4vw, 14px)',
                          fontWeight: 600,
                          color: '#01B2B2',
                          marginBottom: 'clamp(6px, 0.8vw, 8px)',
                        }}
                      >
                        Abu Dhabi:
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.5vw, 6px)' }}>
                        {['ZHH Group Holding LLC', 'ZHH Construction LLC', 'ZHH General Trading LLC', 'ZHH Real Estates'].map((entity, eIdx) => (
                          <motion.li
                            key={eIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + eIdx * 0.05 }}
                            style={{
                              fontFamily: 'var(--font-inter), Inter, sans-serif',
                              fontSize: 'clamp(12px, 1.4vw, 14px)',
                              lineHeight: 1.6,
                              color: '#666666',
                              paddingLeft: 'clamp(14px, 1.7vw, 17px)',
                              position: 'relative',
                            }}
                          >
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.15 + eIdx * 0.05, type: "spring", stiffness: 200 }}
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
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 'clamp(12px, 1.4vw, 14px)',
                          fontWeight: 600,
                          color: '#01B2B2',
                          marginBottom: 'clamp(6px, 0.8vw, 8px)',
                        }}
                      >
                        Dubai:
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.5vw, 6px)' }}>
                        <motion.li
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontSize: 'clamp(12px, 1.4vw, 14px)',
                            lineHeight: 1.6,
                            color: '#666666',
                            paddingLeft: 'clamp(14px, 1.7vw, 17px)',
                            position: 'relative',
                          }}
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35, type: "spring", stiffness: 200 }}
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
                          Jewelust Jewelry & Gold Bullion Trading LLC
                        </motion.li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: ZHH General Trading Branches */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 8px 24px rgba(1, 178, 178, 0.12)',
                    borderColor: '#01B2B2',
                    background: '#FFFFFF',
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{
                    padding: 'clamp(17px, 2.1vw, 24px)',
                    background: '#F9F9F9',
                    borderRadius: '12px',
                    border: '1px solid #E5E5E5',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: 'clamp(15px, 1.7vw, 19px)',
                      fontWeight: 700,
                      color: '#032D46',
                      marginBottom: 'clamp(10px, 1.3vw, 14px)',
                    }}
                  >
                    ZHH General Trading Branches
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(6px, 0.8vw, 8px)' }}>
                    {['Uganda', 'Mali', 'Congo', 'Guinea', 'Kenya', 'Burkina Faso', 'Sierra Leone'].map((country, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 'clamp(12px, 1.4vw, 14px)',
                          lineHeight: 1.6,
                          color: '#666666',
                          paddingLeft: 'clamp(14px, 1.7vw, 17px)',
                          position: 'relative',
                        }}
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + idx * 0.05, type: "spring", stiffness: 200 }}
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
                        {country}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Card 3: Jewelust Branches */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 8px 24px rgba(1, 178, 178, 0.12)',
                    borderColor: '#01B2B2',
                    background: '#FFFFFF',
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{
                    padding: 'clamp(17px, 2.1vw, 24px)',
                    background: '#F9F9F9',
                    borderRadius: '12px',
                    border: '1px solid #E5E5E5',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: 'clamp(15px, 1.7vw, 19px)',
                      fontWeight: 700,
                      color: '#032D46',
                      marginBottom: 'clamp(10px, 1.3vw, 14px)',
                    }}
                  >
                    Jewelust Branches
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(6px, 0.8vw, 8px)' }}>
                    {['Kenya', 'Uganda', 'Mali', 'Congo', 'Zambia', 'Turkey', 'Tanzania', 'Zimbabwe'].map((country, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 'clamp(12px, 1.4vw, 14px)',
                          lineHeight: 1.6,
                          color: '#666666',
                          paddingLeft: 'clamp(14px, 1.7vw, 17px)',
                          position: 'relative',
                        }}
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + idx * 0.05, type: "spring", stiffness: 200 }}
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
                        {country}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
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
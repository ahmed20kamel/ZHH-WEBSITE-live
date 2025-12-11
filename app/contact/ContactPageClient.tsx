'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function ContactPageClient() {
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
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Get in touch with us. We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-unified bg-unified-white">
        <div className="container-unified">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a2332] mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Abu Dhabi, United Arab Emirates
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1a2332] mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="tel:+971504044187"
                        className="hover:text-[#00d4aa] transition-colors"
                      >
                        +971 50 404 4187
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1a2332] mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Sunday - Thursday: 9:00 AM - 6:00 PM
                      <br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1a2332] mb-4">
                  Our Location
                </h3>
                <Map />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


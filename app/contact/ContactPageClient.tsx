'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import CardBody from '@/components/ui/CardBody';
import InternalHero from '@/components/InternalHero';

export default function ContactPageClient() {
  return (
    <div>
      {/* Hero Section - Shared with Divisions */}
      <InternalHero
        title="Contact Us"
        subtitle="Get in touch with us. We'd love to hear from you."
        imageSrc="/assets/hero/hero-contact.jpg"
        imageAlt="Contact ZHH Group Holding"
      />

      {/* Contact Section */}
      <section className="section-unified bg-unified-white">
        <div className="container-unified">
          <div className="grid grid-cols-1 lg:grid-cols-2 rhythm-card-gap">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card>
                <CardBody maxWidth="max-w-none">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </CardBody>
              </Card>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <Card>
                <CardBody maxWidth="max-w-none">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4">
                        Get In Touch
                      </h2>
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
                          href="tel:+971502621050"
                          className="hover:text-[#00d4aa] transition-colors"
                        >
                          +971 50 262 1050
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

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-[#1a2332] mb-4">
                      Our Location
                    </h3>
                    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="/assets/hero/map.jpg"
                        alt="ZHH Group Holding Location Map"
                        fill
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


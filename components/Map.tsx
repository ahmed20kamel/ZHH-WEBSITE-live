'use client';

import dynamic from 'next/dynamic';
import { fadeInUp } from '@/lib/animations';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Dynamically import the entire map component to avoid SSR issues
const DynamicMap = dynamic(
  () => import('./MapComponent'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-96 rounded-lg bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    )
  }
);

export default function Map() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="w-full h-96 rounded-lg overflow-hidden shadow-lg"
    >
      <DynamicMap />
    </motion.div>
  );
}


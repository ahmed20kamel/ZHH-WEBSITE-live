import { Metadata } from 'next';
import { Suspense } from 'react';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'Who We Are | ZHH Group Holding',
  description: 'Discover ZHH Group Holding\'s journey of excellence, board of directors, and organizational structure.',
  keywords: 'ZHH Group History, ZHH Timeline, ZHH Board of Directors, ZHH Structure, UAE Holding Company',
};

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AboutPageClient />
    </Suspense>
  );
}

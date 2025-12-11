import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'Who We Are | ZHH Group Holding',
  description: 'Discover ZHH Group Holding\'s journey of excellence, board of directors, and organizational structure.',
  keywords: 'ZHH Group History, ZHH Timeline, ZHH Board of Directors, ZHH Structure, UAE Holding Company',
};

export default function AboutPage() {
  return <AboutPageClient />;
}

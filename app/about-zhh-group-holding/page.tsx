import { Metadata } from 'next';
import AboutZHHPageClient from './AboutZHHPageClient';

export const metadata: Metadata = {
  title: 'About ZHH Group Holding | ZHH Group Holding',
  description: 'Learn about ZHH Group Holding - A leading Emirati holding group building value across construction, real estate, trading, and precious metals since 2003.',
  keywords: 'ZHH Group, About ZHH, UAE Holding Company, Emirati Company, ZHH History',
};

export default function AboutZHHPage() {
  return <AboutZHHPageClient />;
}


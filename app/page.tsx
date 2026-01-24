import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'ZHH Holding | Global Investment & Development Group',
  description: 'ZHH Holding is a global holding company specializing in investment, development, and innovative business solutions across multiple industries.',
  keywords: 'ZHH Group, ZHH Holding, UAE Construction, Real Estate UAE, Trading UAE, Gold Trading',
};

export default function Home() {
  return <HomePageClient />;
}

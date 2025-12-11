import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'ZHH Group Holding | Building Value Across Industries',
  description: 'ZHH Group Holding stands as a proud symbol of Emirati ambition and excellence — operating across construction, real estate, global trading, and precious metals.',
  keywords: 'ZHH Group, ZHH Holding, UAE Construction, Real Estate UAE, Trading UAE, Gold Trading',
};

export default function Home() {
  return <HomePageClient />;
}

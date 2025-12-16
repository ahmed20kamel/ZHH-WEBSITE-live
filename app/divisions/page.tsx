import { Metadata } from 'next';
import DivisionsPageClient from './DivisionsPageClient';

export const metadata: Metadata = {
  title: 'Our Divisions | ZHH Group Holding',
  description: 'Explore ZHH Group Holding divisions: Construction, Real Estate, General Trading, and Jewelust - Gold & Bullion Trading. Building value across industries.',
  keywords: 'ZHH Construction, ZHH Real Estate, ZHH Trading, Jewelust, Gold Trading, UAE Construction',
};

export default function DivisionsPage() {
  return <DivisionsPageClient />;
}

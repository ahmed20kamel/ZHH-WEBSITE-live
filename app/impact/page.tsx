import { Metadata } from 'next';
import ImpactPageClient from './ImpactPageClient';

export const metadata: Metadata = {
  title: 'Our Impact | ZHH Group Holding',
  description: 'ZHH Group Holding creates economic, social, and environmental value through ethical practices, community engagement, and responsible operations.',
  keywords: 'ZHH Impact, Corporate Social Responsibility, ESG, Community Impact, Environmental Impact',
};

export default function ImpactPage() {
  return <ImpactPageClient />;
}

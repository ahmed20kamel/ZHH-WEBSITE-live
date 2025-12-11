import { Metadata } from 'next';
import InvestorsPageClient from './InvestorsPageClient';

export const metadata: Metadata = {
  title: 'Investors | ZHH Group Holding',
  description: 'Investment opportunities with ZHH Group Holding. Diversified portfolio across construction, real estate, gold, and trading.',
  keywords: 'ZHH Investors, Investment Opportunities, UAE Investments, Private Equity',
};

export default function InvestorsPage() {
  return <InvestorsPageClient />;
}


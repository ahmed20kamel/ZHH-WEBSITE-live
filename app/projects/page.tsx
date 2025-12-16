import { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Our Projects | ZHH Group Holding',
  description: 'Explore ZHH Group Holding projects across construction, real estate, trading, and precious metals. Showcasing excellence and innovation.',
  keywords: 'ZHH Projects, Construction Projects, Real Estate Developments, UAE Projects',
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}

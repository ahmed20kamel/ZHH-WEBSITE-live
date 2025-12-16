import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | ZHH Group Holding',
  description: 'Get in touch with ZHH Group Holding. Contact us for inquiries about our divisions, projects, or partnerships. Located in Abu Dhabi, UAE.',
  keywords: 'Contact ZHH, ZHH Group Contact, Abu Dhabi Office, UAE Contact',
};

export default function ContactPage() {
  return <ContactPageClient />;
}

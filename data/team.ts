export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Mohamed Al Hammadi',
    position: 'Founder, Owner & Chairman – ZHH Group Holding & Subsidiaries',
    bio: 'ZHH Group Holding stands as a proud symbol of Emirati ambition and excellence. Founded in the United Arab Emirates, our Group was built on a vision to contribute to the nation\'s economic growth through innovation, integrity, and world-class performance.',
    image: '/images/team/mohamed.jpg',
  },
  {
    id: '2',
    name: 'Najeeb PK',
    position: 'Chief Financial Officer (CFO)',
    bio: 'Strong financial management is the backbone of our success. At ZHH Group, we focus on smart investments, operational efficiency, and fiscal discipline — ensuring that every venture contributes to our long-term growth and global expansion.',
    image: '/images/team/najeeb.jpg',
  },
  {
    id: '3',
    name: 'Shamma Al Amri',
    position: 'Chief Marketing Officer (CMO)',
    bio: 'ZHH\'s strength lies in its diversity and global presence. Through strategic marketing and brand storytelling, we aim to share our vision with the world — highlighting our values, quality, and commitment to excellence in every market we touch.',
    image: '/images/team/shamma.jpg',
  },
  {
    id: '4',
    name: 'Mohamed Rafeeq',
    position: 'CEO – ZHH General Trading',
    bio: 'ZHH General Trading is an Emirati company that reflects the spirit of Dubai — dynamic, global, and forward-looking. We are committed to supporting the UAE\'s economic diversification by driving trade excellence across multiple sectors, connecting trusted partners, and promoting ethical, transparent business practices. With innovation and integrity at our core, we aim to be one of the UAE\'s leading trading houses recognized for reliability and value creation.',
    image: '/images/team/rafeeq.jpg',
  },
  {
    id: '5',
    name: 'Ahmed Ali',
    position: 'CEO – ZHH Real Estates',
    bio: 'At ZHH Investment & Real Estate, we believe in creating lasting value through visionary projects that shape the urban landscape of the UAE. As an Emirati company, we are deeply committed to supporting the national economy by investing in sustainable developments that combine architectural excellence, community well-being, and financial growth. Our goal is to be a trusted name in real estate investment, redefining quality and reliability across the UAE and beyond.',
    image: '/images/team/ahmed.jpg',
  },
  {
    id: '6',
    name: 'Shadi',
    position: 'CEO – ZHH Construction',
    bio: 'ZHH Construction represents the strength and ambition of an Emirati company committed to building the future of the UAE. Our vision is to become one of the nation\'s leading construction firms — delivering sustainable, world-class projects that enhance infrastructure, empower communities, and contribute to the UAE\'s economic growth. Guided by precision, innovation, and integrity, we build with pride and purpose for generations to come.',
    image: '/images/team/shadi.jpg',
  },
  {
    id: '7',
    name: 'Mohamed Al Hammadi',
    position: 'Founder & CEO – Jewelust',
    bio: 'Gold is more than a commodity — it is security, strength, and enduring value. From Africa\'s licensed gold sources to Dubai\'s global bullion hub, Jewelust is building a trusted bridge between origin and investment. With transparency, integrity, and innovation at our core, we empower investors, strengthen markets, and deliver wealth that lasts for generations.',
    image: '/assets/board img/Mohamed Al Hammadi.jpg',
  },
];


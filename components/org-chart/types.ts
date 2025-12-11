import { 
  Crown, Users, Gem, Globe, Briefcase,
  Hammer, Landmark, ShoppingBag, Diamond
} from 'lucide-react';

export interface Person {
  id: string;
  name: string;
  title: string;
  photo?: string;
  hasPhoto: boolean;
  gender?: 'male' | 'female';
  location: string;
  department: string;
  bio: string;
  expertise: string[];
  reportsTo?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  yearsInCompany: number;
  achievements: string[];
  reportsCount: number;
}

export interface OrgLevel {
  level: number;
  title: string;
  subtitle: string;
  people: Person[];
  icon: any;
  color: string;
  bgGradient: string;
}

export interface Subsidiary {
  id: string;
  name: string;
  tagline: string;
  description: string;
  goal: string;
  icon: any;
  logo: string;
  color: string;
  bgGradient: string;
  specialNote?: string;
  highlights?: string[];
  focusAreas?: string[];
}

// Premium Color Palette - Soft & Elegant
export const premiumColors = {
  darkBlue: '#0A3D62',
  tealBlue: '#1B5E73',
  slateGray: '#5A6A75',
  gold: '#D4A056',
  lightGray: '#F6F7F9',
  textDark: '#111111',
  textGray: '#555555',
  textLight: '#666666',
  borderGray: '#E5E7EB',
  bgGray: '#FAFBFC',
};

export const subsidiaries: Subsidiary[] = [
  {
    id: 'construction',
    name: 'ZHH Construction',
    tagline: 'Building with Integrity & Precision',
    description: 'An Emirati company delivering sustainable, world-class infrastructure that supports the UAE\'s growth and modernization. We combine traditional craftsmanship with cutting-edge technology to create lasting value.',
    goal: 'To be one of the nation\'s leading construction firms known for reliability and innovation.',
    icon: Hammer,
    logo: '/assets/logos/zhh-construction-logo.svg',
    color: 'from-blue-600 to-cyan-500',
    bgGradient: 'bg-gradient-to-br from-blue-50/80 via-cyan-50/40 to-blue-50/80',
    highlights: [
      'Sustainable building practices',
      'World-class infrastructure projects',
      'Emirati craftsmanship excellence',
      'Modern technology integration'
    ],
    focusAreas: ['Infrastructure Development', 'Commercial Projects', 'Residential Construction', 'Sustainable Building']
  },
  {
    id: 'real-estate',
    name: 'ZHH Real Estates',
    tagline: 'Creating Value through Vision',
    description: 'Focused on premium developments and sustainable real-estate investments that enrich communities and strengthen the national economy. We transform visions into thriving communities.',
    goal: 'To redefine quality living and investment opportunities in the UAE.',
    icon: Landmark,
    logo: '/assets/logos/zhh-real-estate-logo.svg',
    color: 'from-emerald-600 to-teal-500',
    bgGradient: 'bg-gradient-to-br from-emerald-50/80 via-teal-50/40 to-emerald-50/80',
    highlights: [
      'Premium developments',
      'Community-focused projects',
      'Sustainable investments',
      'Economic growth contribution'
    ],
    focusAreas: ['Residential Developments', 'Commercial Properties', 'Investment Opportunities', 'Community Building']
  },
  {
    id: 'trading',
    name: 'ZHH General Trading',
    tagline: 'Connecting Markets, Empowering Trade',
    description: 'A dynamic Emirati trading house bridging regional and global markets with transparency and compliance. We facilitate seamless trade connections across continents.',
    goal: 'To support the UAE\'s diversification strategy and become a trusted global trade partner.',
    icon: ShoppingBag,
    logo: '/assets/logos/zhh-general-trading-logo.svg',
    color: 'from-purple-600 to-pink-500',
    bgGradient: 'bg-gradient-to-br from-purple-50/80 via-pink-50/40 to-purple-50/80',
    highlights: [
      'Global market access',
      'Transparent operations',
      'Full compliance standards',
      'Regional trade expertise'
    ],
    focusAreas: ['International Trade', 'Regional Markets', 'Supply Chain', 'Trade Compliance']
  },
  {
    id: 'jewelust',
    name: 'Jewelust – Gold & Bullion Trading',
    tagline: 'Where Wealth Becomes Legacy',
    description: 'The Group\'s flagship in gold and bullion, representing Dubai\'s leadership in global precious-metal trade. We combine ethical sourcing with world-class craftsmanship.',
    goal: 'To be the UAE\'s most trusted name in ethical, transparent, and investment-grade gold trading.',
    icon: Diamond,
    logo: '/assets/logos/jewelust-logo.svg',
    color: 'from-amber-600 to-orange-500',
    bgGradient: 'bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-amber-50/80',
    specialNote: 'Responsible sourcing from Africa, refining in Turkey, and trading through Dubai\'s secure market channels.',
    highlights: [
      'Ethical sourcing practices',
      'Investment-grade quality',
      'Global market leadership',
      'Transparent operations'
    ],
    focusAreas: ['Gold Trading', 'Bullion Trading', 'Jewelry Manufacturing', 'Precious Metals']
  },
];

export const orgData: OrgLevel[] = [
  {
    level: 1,
    title: 'Strategic Leadership',
    subtitle: 'Chairman',
    icon: Crown,
    color: 'from-amber-500 to-orange-500',
    bgGradient: 'bg-gradient-to-br from-amber-500/5 via-orange-500/3 to-amber-500/5',
    people: [
      {
        id: 'chairman',
        name: 'Mohamed Al Hammadi',
        title: 'Chairman',
        hasPhoto: true,
        photo: '/assets/board img/Mohamed Al Hammadi.jpg',
        location: 'Abu Dhabi, UAE',
        department: 'Board of Directors',
        bio: '',
        expertise: [],
        reportsTo: undefined,
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
    ],
  },
  {
    level: 2,
    title: 'Executive Leadership',
    subtitle: 'المستوى التنفيذي الأول',
    icon: Users,
    color: 'from-blue-600 to-cyan-500',
    bgGradient: 'bg-gradient-to-br from-blue-500/5 via-cyan-500/3 to-blue-500/5',
    people: [
      {
        id: 'legal-counsel',
        name: 'Mohamed Salah',
        title: 'Group Legal Counsel',
        hasPhoto: false,
        gender: 'male',
        location: 'Abu Dhabi, UAE',
        department: 'Legal & Compliance',
        bio: '',
        expertise: [],
        reportsTo: 'chairman',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
      {
        id: 'cfo',
        name: 'Najeeb PK',
        title: 'Chief Financial Officer (CFO)',
        hasPhoto: true,
        photo: '/assets/board img/Najeeb PK.jpg',
        location: 'Abu Dhabi, UAE',
        department: 'Finance & Strategy',
        bio: '',
        expertise: [],
        reportsTo: 'chairman',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
      {
        id: 'cto',
        name: 'Akram Ali Mir',
        title: 'Chief Technology Officer (CTO)',
        hasPhoto: false,
        gender: 'male',
        location: 'Dubai, UAE',
        department: 'Technology & Digital',
        bio: '',
        expertise: [],
        reportsTo: 'chairman',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
      {
        id: 'cmo',
        name: 'Shamma Al Amri',
        title: 'Chief Marketing Officer (CMO)',
        hasPhoto: true,
        photo: '/assets/board img/Shamma Al Amri.jpg',
        location: 'Dubai, UAE',
        department: 'Marketing & Brand Strategy',
        bio: '',
        expertise: [],
        reportsTo: 'chairman',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
    ],
  },
  {
    level: 3,
    title: 'Subsidiary Leadership',
    subtitle: 'المستوى التنفيذي الثاني',
    icon: Briefcase,
    color: 'from-emerald-600 to-teal-500',
    bgGradient: 'bg-gradient-to-br from-emerald-500/5 via-teal-500/3 to-emerald-500/5',
    people: [
      {
        id: 'real-estate-ceo',
        name: 'Ahmed Ali',
        title: 'ZHH Real Estate CEO',
        hasPhoto: false,
        gender: 'male',
        location: 'Dubai, UAE',
        department: 'Real Estate Development',
        bio: '',
        expertise: [],
        reportsTo: 'chairman',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
      {
        id: 'construction-ceo',
        name: 'Shadi Mohamed',
        title: 'ZHH Construction CEO',
        hasPhoto: false,
        gender: 'male',
        location: 'Abu Dhabi, UAE',
        department: 'Construction & Infrastructure',
        bio: '',
        expertise: [],
        reportsTo: 'chairman',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
      {
        id: 'trading-ceo',
        name: 'Mohamed Rafeeq',
        title: 'ZHH General Trading CEO',
        hasPhoto: false,
        gender: 'male',
        location: 'Dubai, UAE',
        department: 'General Trading',
        bio: '',
        expertise: [],
        reportsTo: 'chairman',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
    ],
  },
  {
    level: 4,
    title: 'Jewelust Division',
    subtitle: 'Jewelust CEO',
    icon: Diamond,
    color: 'from-amber-600 to-orange-500',
    bgGradient: 'bg-gradient-to-br from-amber-500/5 via-orange-500/3 to-amber-500/5',
    people: [
      {
        id: 'jewelust-ceo',
        name: 'Mohamed Al Hammadi',
        title: 'Jewelust CEO',
        hasPhoto: true,
        photo: '/assets/board img/Mohamed Al Hammadi.jpg',
        location: 'Dubai, UAE',
        department: 'Jewelry & Luxury Goods',
        bio: '',
        expertise: [],
        reportsTo: 'chairman',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
    ],
  },
  {
    level: 5,
    title: 'Regional Operations',
    subtitle: 'المستوى الإقليمي - COO Level',
    icon: Globe,
    color: 'from-emerald-500 to-teal-500',
    bgGradient: 'bg-gradient-to-br from-emerald-500/5 via-teal-500/3 to-emerald-500/5',
    people: [
      {
        id: 'jewelust-congo',
        name: 'Pius Wampamba',
        title: 'Jewelust – Congo, COO',
        hasPhoto: false,
        gender: 'male',
        location: 'Kinshasa, Congo',
        department: 'African Operations',
        bio: '',
        expertise: [],
        reportsTo: 'jewelust-ceo',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
      {
        id: 'jewelust-turkey',
        name: 'Mustafa Dogan',
        title: 'Jewelust – Turkey, COO',
        hasPhoto: false,
        gender: 'male',
        location: 'Istanbul, Turkey',
        department: 'European Manufacturing',
        bio: '',
        expertise: [],
        reportsTo: 'jewelust-ceo',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
      {
        id: 'jewelust-mali',
        name: 'Cheick Oumar',
        title: 'Jewelust – Mali, COO',
        hasPhoto: false,
        gender: 'male',
        location: 'Bamako, Mali',
        department: 'African Operations',
        bio: '',
        expertise: [],
        reportsTo: 'jewelust-ceo',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
      {
        id: 'jewelust-dubai',
        name: 'Abdailah Khafash',
        title: 'Jewelust – Dubai, COO',
        hasPhoto: false,
        gender: 'male',
        location: 'Dubai, UAE',
        department: 'Middle East Operations',
        bio: '',
        expertise: [],
        reportsTo: 'jewelust-ceo',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
      {
        id: 'jewelust-uganda',
        name: 'Ismail Dabbur',
        title: 'Jewelust – Uganda, COO',
        hasPhoto: false,
        gender: 'male',
        location: 'Kampala, Uganda',
        department: 'African Operations',
        bio: '',
        expertise: [],
        reportsTo: 'jewelust-ceo',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
    ],
  },
  {
    level: 6,
    title: 'Operational Leadership',
    subtitle: 'المستوى التشغيلي الأخير',
    icon: Gem,
    color: 'from-purple-600 to-pink-500',
    bgGradient: 'bg-gradient-to-br from-purple-500/5 via-pink-500/3 to-purple-500/5',
    people: [
      {
        id: 'wholesale-director',
        name: 'Abdel Rahim Asi',
        title: 'Wholesale Bullion & Cash Director',
        hasPhoto: false,
        gender: 'male',
        location: 'Dubai, UAE',
        department: 'Wholesale Operations',
        bio: '',
        expertise: [],
        reportsTo: 'jewelust-ceo',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
      {
        id: 'retail-director',
        name: 'Harif Cheenamadath',
        title: 'Jewelry & Bullion Retail Director',
        hasPhoto: false,
        gender: 'male',
        location: 'Dubai, UAE',
        department: 'Retail Operations',
        bio: '',
        expertise: [],
        reportsTo: 'jewelust-ceo',
        yearsInCompany: 0,
        achievements: [],
        reportsCount: 0
      },
    ],
  },
];


export interface Division {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  overview: string;
  establishment: string;
  coreActivities: string[];
  achievements: string[];
  ceoMessage: {
    name: string;
    title: string;
    quote: string;
  };
  // For Jewelust only
  cooQuotes?: Array<{
    name: string;
    title: string;
    quote: string;
  }>;
}

export const divisions: Division[] = [
  {
    id: 'construction',
    name: 'ZHH Construction',
    shortName: 'Construction',
    tagline: 'Delivering Excellence, Building the Nation',
    overview: 'ZHH Construction is the engineering and contracting arm of the Group, delivering high-quality, sustainable construction solutions that contribute to the UAE\'s national development. The company focuses on precision and safety across residential, commercial, and infrastructure projects.',
    establishment: 'Founded in 2003 as the Group\'s first operating entity, ZHH Construction began as a contracting and building maintenance business in Abu Dhabi, supporting national infrastructure growth. It continues to expand its footprint as a trusted contractor in the UAE.',
    coreActivities: [
      'EPC & general contracting works',
      'Construction of residential, commercial, and industrial properties',
      'Infrastructure & utility projects',
      'Green construction and smart-system implementation',
      'Building maintenance and facility enhancements',
    ],
    achievements: [
      '24+ completed projects across the UAE (2020–2024) with 100% on-time & on-budget delivery',
      'Industrial housing & logistics facilities in Dubai',
      'Al Ain commercial & residential development',
      'Municipal infrastructure upgrades across Northern Emirates',
      'Smart-city pilot utilities implementation in Abu Dhabi',
      'Zero-incident safety record on major projects',
    ],
    ceoMessage: {
      name: 'Shadi Mohamed',
      title: 'CEO – ZHH Construction',
      quote: 'ZHH Construction represents the strength and ambition of an Emirati company committed to building the future of the UAE. Our vision is to become one of the nation\'s leading construction firms — delivering sustainable, world-class projects that enhance infrastructure, empower communities, and contribute to the UAE\'s economic growth. Guided by precision, innovation, and integrity, we build with pride and purpose for generations to come.',
    },
  },
  {
    id: 'trading',
    name: 'ZHH General Trading LLC',
    shortName: 'General Trading',
    tagline: 'Connecting Markets, Empowering Trade',
    overview: 'ZHH General Trading is a proud Emirati company headquartered in Abu Dhabi, founded to support the UAE\'s vision for global trade leadership and economic diversification. Built on trust, transparency, and strategic connectivity, the company bridges international supply chains and facilitates secure, compliant trade flows.',
    establishment: 'Established in 2020 to meet growing demand for high-quality sourcing and supply channels across multiple sectors. ZHH General Trading enhances the UAE\'s role as a global logistics and commercial gateway.',
    coreActivities: [
      'Agricultural commodities: rice, flour, sugar, spices, coffee, consumer goods',
      'Construction & industrial materials',
      'Chemical & petrochemical materials',
      'Metals, scrap & raw substances',
      'Machinery, equipment & spare parts',
      'Secure & compliant gold trade channels',
      'Full supply-chain services (sourcing, logistics, export documentation, quality assurance, trade compliance)',
    ],
    achievements: [
      '180+ trade contracts across GCC, Africa, Europe, South America & Asia',
      'Compliance-driven sourcing channels from Africa → UAE',
      'Support national food security & industrial supply',
      '100% documentation compliance',
      'Exclusive vendor & refinery partnerships',
      'Growth into precious-metals trade channels',
    ],
    ceoMessage: {
      name: 'Mohamed Rafeeq',
      title: 'CEO – ZHH General Trading',
      quote: 'ZHH General Trading reflects Dubai\'s spirit — dynamic, global, and forward-looking. Our mission is to support the UAE\'s economic diversification by enabling world-class trade flows built on transparency, innovation, and strong partnerships. With integrity at our core, we aim to be one of the UAE\'s leading trading houses recognized for reliability and value creation.',
    },
  },
  {
    id: 'real-estate',
    name: 'ZHH Real Estates',
    shortName: 'Real Estate',
    tagline: 'Creating Value Through Vision',
    overview: 'ZHH Real Estate is the property investment and development arm of the Group, focused on creating enduring value through visionary real-estate projects across the UAE.',
    establishment: 'Established in 2021 to diversify the Group\'s portfolio and capitalize on strategic real-estate opportunities within the UAE\'s growing property sector.',
    coreActivities: [
      'Development of residential & commercial properties',
      'Investment in premium land banks & long-term real-estate assets',
      'Mixed-use & community-driven projects',
      'Sustainable development focused on energy efficiency',
      'Leasing & property management of developed assets',
    ],
    achievements: [
      'ZHH Tower – Business Bay, Dubai (24-storey mixed-use tower)',
      'Al Qurm Villas – Abu Dhabi (luxury villas with smart-systems)',
      'Sharjah Central Residences (mid-rise affordable luxury)',
      'Ras Al Khaimah – Strategic land development',
      'All projects successfully sold or leased with strong investor returns',
    ],
    ceoMessage: {
      name: 'Ahmed Ali',
      title: 'CEO – ZHH Real Estate',
      quote: 'At ZHH Real Estate, we believe in creating lasting value through visionary projects that shape the UAE\'s urban future. We are committed to sustainable, high-quality developments that elevate communities, enhance well-being, and reinforce national economic growth.',
    },
  },
  {
    id: 'jewelust',
    name: 'Jewelust Jewelry & Gold Bullion Trading LLC',
    shortName: 'Jewelust',
    tagline: 'Where Wealth Becomes Legacy',
    overview: 'Jewelust is the Group\'s flagship precious-metals and jewelry brand, positioned at the heart of Dubai\'s global bullion hub. It leads in ethical gold sourcing, bullion trading, and jewelry craftsmanship.',
    establishment: 'Founded in 2025 in Dubai to strengthen the Group\'s presence in global gold sourcing, refining, and investment.',
    coreActivities: [
      'Wholesale & bullion trading',
      'Investment-grade gold sourcing from licensed African partners',
      'Refining partnerships (UAE & Turkey)',
      'Retail & wholesale jewelry business',
      'Secure logistics, insurance, & compliance management',
    ],
    achievements: [
      '1.2+ tons of gold traded (2023–2024) via regulated UAE channels',
      'Ethical supply chain from Uganda, Mali, Congo',
      'Jewelust flagship store in Dubai Gold Souk',
      'Strengthened UAE\'s global role in gold trading',
      'Growing B2B and investor network across UAE & global markets',
    ],
    ceoMessage: {
      name: 'Mohamed Al Hammadi',
      title: 'Founder & CEO – Jewelust',
      quote: 'Gold is more than a commodity — it is strength, security, and enduring value. Our mission is to build a trusted bridge between origin and investment through ethical sourcing, transparency, and innovation. We deliver wealth that lasts for generations.',
    },
    cooQuotes: [
      {
        name: 'Abdallah Khafash',
        title: 'COO – Jewelust, Dubai',
        quote: 'Dubai is the heart of global gold trade — a trusted hub for investment and enduring wealth. At Jewelust Dubai, we honor that legacy with excellence, innovation, and transparency, delivering secure and compliant bullion solutions that elevate trust and protect value for generations',
      },
      {
        name: 'Ismail Dabbur',
        title: 'COO – Jewelust, Uganda',
        quote: 'Uganda\'s growing gold sector offers immense potential. Our focus is on ethical sourcing, fair trade, and strong community engagement, ensuring Jewelust remains a trusted partner in Africa\'s gold market.',
      },
      {
        name: 'Cheick Oumar',
        title: 'COO – Jewelust Mali',
        quote: 'Mali\'s rich heritage in gold inspires our operations. We strive to combine local expertise with global standards — promoting responsible mining, fair trade, and sustainable development in every partnership.',
      },
      {
        name: 'Pius Wampamba',
        title: 'COO – Jewelust, Congo',
        quote: 'In Congo, we see opportunity and responsibility. At Jewelust Congo, we build sustainable partnerships and ensure strict compliance — enabling secure pathways from mine to market, and driving growth for communities and investors alike.',
      },
      {
        name: 'Mustafa Dogan',
        title: 'COO – Jewelust, Turkey',
        quote: 'From ancient artistry to modern design, Turkey\'s jewelry tradition is world-renowned. At Jewelust Turkey, we merge heritage with innovation — producing and trading gold jewelry that reflects beauty, culture, and craftsmanship.',
      },
    ],
  },
];

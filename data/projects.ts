export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  year: number;
  location: string;
  image: string;
  status: 'completed' | 'ongoing' | 'upcoming';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Al Helwa Beauty Lounge',
    category: 'Real Estate',
    description: 'A premium beauty salon and wellness center in Abu Dhabi.',
    fullDescription: 'Al Helwa Beauty Lounge represents our commitment to creating premium spaces that enhance community life. This state-of-the-art beauty salon and wellness center combines luxury with functionality, providing an exceptional experience for clients.',
    year: 2015,
    location: 'Abu Dhabi, UAE',
    image: '/images/projects/helwa.jpg',
    status: 'completed',
  },
  {
    id: '2',
    title: 'TAXO Logistic & Technology Services',
    category: 'Trading',
    description: 'Advanced logistics and technology solutions for modern businesses.',
    fullDescription: 'TAXO Logistic & Technology Services showcases our investment in cutting-edge technology and logistics solutions. This venture supports businesses with innovative services that streamline operations and enhance efficiency.',
    year: 2021,
    location: 'UAE',
    image: '/images/projects/taxo.jpg',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Commercial Complex Development',
    category: 'Construction',
    description: 'Modern commercial complex with sustainable design principles.',
    fullDescription: 'This commercial complex development demonstrates our expertise in sustainable construction. The project incorporates green building technologies and modern design principles to create a landmark development.',
    year: 2023,
    location: 'Abu Dhabi, UAE',
    image: '/images/projects/commercial.jpg',
    status: 'ongoing',
  },
  {
    id: '4',
    title: 'Residential Tower Project',
    category: 'Real Estate',
    description: 'Luxury residential tower with world-class amenities.',
    fullDescription: 'Our residential tower project offers luxury living spaces with world-class amenities. The development focuses on creating a sustainable and vibrant community for residents.',
    year: 2024,
    location: 'Abu Dhabi, UAE',
    image: '/images/projects/residential.jpg',
    status: 'ongoing',
  },
  {
    id: '5',
    title: 'Gold Refining Facility Expansion',
    category: 'Jewelust',
    description: 'Expansion of our state-of-the-art gold refining capabilities.',
    fullDescription: 'This expansion project enhances our gold refining capabilities, allowing us to serve more clients while maintaining the highest standards of quality and ethical sourcing.',
    year: 2024,
    location: 'UAE',
    image: '/images/projects/refining.jpg',
    status: 'upcoming',
  },
];

export const projectCategories = ['All', 'Construction', 'Real Estate', 'Trading', 'Jewelust'];


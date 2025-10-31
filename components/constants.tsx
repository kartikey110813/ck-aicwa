interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    excerpt:
      "Breakthrough artificial intelligence system promises to revolutionize medical diagnosis and treatment planning.",
    content:
      "A groundbreaking AI technology has been developed that can analyze medical images with unprecedented accuracy, potentially saving millions of lives worldwide.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Climate Change Summit Reaches Historic Agreement",
    excerpt:
      "World leaders unite to combat climate change with ambitious new environmental policies and renewable energy initiatives.",
    content:
      "The global climate summit concluded with a historic agreement that sets new targets for carbon reduction and renewable energy adoption.",
    author: "Environmental Reporter",
    date: "2024-01-12",
    category: "Environment",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "Space Exploration Reaches New Milestone",
    excerpt:
      "Successful Mars mission opens new possibilities for human colonization and scientific discovery.",
    content:
      "The latest Mars exploration mission has successfully landed and begun transmitting data that could reshape our understanding of the red planet.",
    author: "Space Correspondent",
    date: "2024-01-10",
    category: "Science",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    featured: true,
  },
  {
    id: 4,
    title: "Economic Recovery Shows Strong Growth Signals",
    excerpt:
      "Global markets demonstrate resilience with record-breaking growth in key sectors and emerging technologies.",
    content:
      "Economic indicators show promising signs of recovery with technology and green energy sectors leading the way.",
    author: "Economic Analyst",
    date: "2024-01-08",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
  },
  {
    id: 5,
    title: "Breakthrough in Quantum Computing Achieved",
    excerpt:
      "Scientists achieve quantum supremacy milestone that could revolutionize computing and cryptography.",
    content:
      "A major breakthrough in quantum computing has been achieved, bringing us closer to practical quantum applications.",
    author: "Tech Reporter",
    date: "2024-01-05",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
  },
];

export const statesData = [
  {
    name: "Maharashtra",
    map: "/stateRep/maharashtra.png",
    schools: [
      { name: "Sainik School Balachadi", logo: "/stateRep/school.png" },
      {
        name: "Rashtriya Military School, Dholpur",
        logo: "/stateRep/school.png",
      },
    ],
  },
  {
    name: "Rajasthan",
    map: "/stateRep/maharashtra.png",
    schools: [
      { name: "Sainik School Balachadi", logo: "/stateRep/school.png" },
      {
        name: "Rashtriya Military School, Dholpur",
        logo: "/stateRep/school.png",
      },
    ],
  },
  {
    name: "Gujrat",
    map: "/stateRep/maharashtra.png",
    schools: [
      { name: "Sainik School Balachadi", logo: "/stateRep/school.png" },
      {
        name: "Rashtriya Military School, Dholpur",
        logo: "/stateRep/school.png",
      },
    ],
  },
  {
    name: "Madhya Pradesh",
    map: "/stateRep/maharashtra.png",
    schools: [
      { name: "Sainik School Balachadi", logo: "/stateRep/school.png" },
      {
        name: "Rashtriya Military School, Dholpur",
        logo: "/stateRep/school.png",
      },
    ],
  },
  {
    name: "Arunachal Pradesh",
    map: "/stateRep/maharashtra.png",
    schools: [
      { name: "Sainik School Balachadi", logo: "/stateRep/school.png" },
      {
        name: "Rashtriya Military School, Dholpur",
        logo: "/stateRep/school.png",
      },
    ],
  },
  {
    name: "Punjab",
    map: "/stateRep/maharashtra.png",
    schools: [
      { name: "Punjab Military School", logo: "/stateRep/school.png" },
      { name: "Army Public School", logo: "/stateRep/school.png" },
    ],
  },
  {
    name: "Bihar",
    map: "/stateRep/maharashtra.png",
    schools: [
      { name: "Sainik School Gopalganj", logo: "/stateRep/school.png" },
      { name: "RMS Patna", logo: "/stateRep/school.png" },
    ],
  },
  {
    name: "Uttar Pradesh",
    map: "/stateRep/maharashtra.png",
    schools: [
      { name: "Sainik School Amethi", logo: "/stateRep/school.png" },
      { name: "Sainik School Jhansi", logo: "/stateRep/school.png" },
    ],
  },
  // Add more as needed...
];

export const galleryItems = [
  {
    id: 1,
    title: "Epic Action Sequence",
    category: "films",
    type: "image",
    image: "/controversies/1.png",
    description: "High-octane action sequence from our latest blockbuster",
  },
  {
    id: 2,
    title: "Director's Vision",
    category: "behind-scenes",
    type: "video",
    image: "/controversies/2.png",
    description: "Behind the scenes with our acclaimed director",
  },
  {
    id: 3,
    title: "Award Ceremony",
    category: "events",
    type: "image",
    image: "/controversies/3.png",
    description: "Celebrating excellence at the annual film awards",
  },
  {
    id: 4,
    title: "Romantic Drama",
    category: "films",
    type: "image",
    image: "/controversies/4.png",
    description: "Heartwarming moments from our romantic drama",
  },
  {
    id: 5,
    title: "Set Construction",
    category: "behind-scenes",
    type: "image",
    image: "/controversies/5.png",
    description: "Building worlds for our cinematic stories",
  },
  {
    id: 6,
    title: "Film Festival",
    category: "events",
    type: "video",
    image: "/controversies/6.png",
    description: "Premiering at international film festivals",
  },
  {
    id: 7,
    title: "Historical Epic",
    category: "films",
    type: "image",
    image: "/controversies/7.png",
    description: "Grand historical epic with stunning visuals",
  },
  {
    id: 8,
    title: "VFX Magic",
    category: "behind-scenes",
    type: "video",
    image: "/controversies/8.png",
    description: "Creating movie magic with cutting-edge VFX",
  },
];

export interface Benefit {
  id: number;
  title: string;
  description: string;
  highlightColor: string;
  cardImage: string;
  stats: { label: string; value: number; icon: string }[];
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Health and pension/retirement",
    description:
      "Members earn credits toward retirement and health care each time they work.",
    highlightColor: "#f3e1ba",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 2,
    title: "Contracts/collective bargaining",
    description:
      "AICWA ensures fair contracts, transparent payments, and collective representation for all cine workers.",
    highlightColor: "#ffdad4",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 3,
    title: "Resources to organize non-union work",
    description:
      "AICWA provides education, tools, and guidance to organize independent and non-unionized work safely.",
    highlightColor: "#fff2e0",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 4,
    title: "Skill Development & Training",
    description:
      "Members get access to continuous learning workshops and certifications.",
    highlightColor: "#ffe0e0",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 5,
    title: "Legal & Financial Aid",
    description:
      "AICWA provides free legal counseling and financial aid in disputes or emergencies.",
    highlightColor: "#e0f7fa",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 6,
    title: "Safety & Wellbeing",
    description:
      "Ensuring safe and ethical working conditions across all production units.",
    highlightColor: "#fff2e7",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
];

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
    title: "The Voice of India's Cine Workers",
    excerpt: "AICWA",
    content: "AICWA: The Voice of India's Cine Workers",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
  },
];
export const newsDataMini: NewsItem[] = [
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
    title: "Directors",
    description:
      "AICWA supports directors in ensuring fair credit, contractual transparency, and creative rights protection in every production.",
    highlightColor: "#f3e1ba",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 2,
    title: "Actors & Performers",
    description:
      "We help actors fight issues of harassment, delayed payments, and unsafe shooting conditions through legal and union support.",
    highlightColor: "#ffdad4",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 3,
    title: "Musicians & Singers",
    description:
      "Protecting the royalty, recognition, and fair compensation of every music professional in the film industry.",
    highlightColor: "#fff2e0",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 4,
    title: "Stuntmen & Action Crew",
    description:
      "Ensuring insurance, medical safety, and legal protection for stunt professionals facing high-risk working environments.",
    highlightColor: "#ffe0e0",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 5,
    title: "Technicians & Camera Crew",
    description:
      "AICWA stands for the rights of behind-the-scenes professionals, fighting for job security, timely wages, and safe work hours.",
    highlightColor: "#e0f7fa",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 6,
    title: "Production & Ground Staff",
    description:
      "We safeguard the interests of on-set workers, ensuring fair wages, humane treatment, and grievance redressal for every crew member.",
    highlightColor: "#fff2e7",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
  {
    id: 7,
    title: "Producers & Coordinators",
    description:
      "Guiding producers to maintain lawful, ethical, and worker-friendly production practices under AICWA’s code of conduct.",
    highlightColor: "#fff2e7",
    cardImage: "/MemCard.png",
    stats: [
      { label: "Get My Card Now", value: 2356, icon: "👷‍♂️" },
      { label: "Renew My Card", value: 4563, icon: "🤝" },
    ],
  },
];

// Test with static data first to ensure rendering works
export const staticTestData = [
  {
    state: "Maharashtra",
    schools: [
      {
        id: 1,
        name: "SANJAY PATIL",
        profileImage: "/school.png",
        city: "Morbi",
      },
      {
        id: 2,
        name: "CHHAYA SANGAVKAR",
        profileImage: "/school.png",
        city: "Morbi",
      },
      {
        id: 3,
        name: "NITIN RAJSHEKHAR",
        profileImage: "/school.png",
        city: "Morbi",
      },
    ],
  },
  {
    state: "Rajasthan",
    schools: [
      {
        id: 4,
        name: "MR. SANJAY CHATURVEDI",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
      {
        id: 5,
        name: "MR. KULDEEP SINGH KHANGAROT",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
      {
        id: 6,
        name: "LOKESH SINGH RATHORE",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
    ],
  },
  {
    state: "Uttar Pradesh",
    schools: [
      {
        id: 7,
        name: "VIJAY PRATAP SINGH",
        profileImage: "/school.png",
        city: "Morbi",
      },
      {
        id: 8,
        name: "MR. RISHAB RANA",
        profileImage: "/school.png",
        city: "Morbi",
      },
      {
        id: 9,
        name: "SUBODH SINGH",
        profileImage: "/school.png",
        city: "Morbi",
      },
    ],
  },
  {
    state: "Jammu & Kashmir",
    schools: [
      {
        id: 10,
        name: "RISHI KAUL",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
      {
        id: 11,
        name: "MR. THAKUR SHARVAN BADYAL",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
      {
        id: 12,
        name: "PREETI MAHAJAN",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
    ],
  },
  {
    state: "Delhi",
    schools: [
      {
        id: 13,
        name: "NAVEEN CHANDRA NARAYAN",
        profileImage: "/school.png",
        city: "Morbi",
      },
      {
        id: 14,
        name: "KUMAR RAJENDRA",
        profileImage: "/school.png",
        city: "Morbi",
      },
      {
        id: 15,
        name: "MANOJ ADHIKARI",
        profileImage: "/school.png",
        city: "Morbi",
      },
    ],
  },
  {
    state: "Madhya Pradesh",
    schools: [
      {
        id: 16,
        name: "MS. EKTA THAKUR",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
      {
        id: 17,
        name: "LOKENDRA SINGH",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
      {
        id: 18,
        name: "VAQAR QUERESI",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
    ],
  },
  {
    state: "Gujrat",
    schools: [
      {
        id: 19,
        name: "MAHIMA SINGH",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
      {
        id: 20,
        name: "PRATIYUSH ARCHANA GUPTA",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
      {
        id: 21,
        name: "ABBAS KHAN",
        profileImage: "/school.png",
        city: "Hanumangarh",
      },
    ],
  },
];

interface Article {
  id: number;
  title: string;
  date: string;
  comments: number;
  description: string;
  imageUrl: string;
  isVideo?: boolean;
  isFeatured?: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    title:
      "Meeting with hon Shri Gurudas Kamat [Former Home & Telecommunication Minister of India]",
    date: "8 December 2021",
    comments: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imageUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    isVideo: true,
    isFeatured: true,
  },
  {
    id: 2,
    title:
      "Meeting with hon Shri Amit Deshmukh [Cultural Minister – Maharashtra state]",
    date: "8 December 2021",
    comments: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    isVideo: true,
  },
  {
    id: 3,
    title:
      "Meeting with hon Shri Amit Deshmukh [Cultural Minister – Maharashtra state]",
    date: "8 December 2021",
    comments: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    imageUrl: "",
    isVideo: false,
  },
  {
    id: 4,
    title:
      "Meeting with hon Shri Amit Deshmukh [Cultural Minister – Maharashtra state]",
    date: "8 December 2021",
    comments: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    imageUrl: "",
    isVideo: false,
  },
  {
    id: 5,
    title:
      "Meeting with hon Shri Amit Deshmukh [Cultural Minister – Maharashtra state]",
    date: "8 December 2021",
    comments: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    isVideo: true,
  },
];

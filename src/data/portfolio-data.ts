import { Project, Experience, PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Piyush Prashant Khandait',
  title: 'Software Engineer / Full-Stack Developer',
  subtitle: 'Third-Year Information Technology Student',
  college: 'Don Bosco Institute of Technology, Mumbai',
  location: 'Mumbai, India',
  email: 'khandaitpiyush@gmail.com',
  github: 'https://github.com/khandaitpiyush',
  linkedin: 'https://www.linkedin.com/in/piyush-khandait-39930b222/',
  bio: "I'm an IT engineering student at DBIT Mumbai who enjoys turning ideas into working software. Alongside personal projects, I build websites and software applications for client businesses through my venture, NexGo Tech. I'm particularly interested in full-stack development, backend systems, and building practical products people can use.",
  openToWork: true,
  statusText: 'Open to Software Engineering Opportunities',
  resumeUrl: '#TODO-replace-with-resume-url'
};

export const projects: Project[] = [
  {
    id: '1',
    name: 'Fitcamp',
    category: 'Client Work',
    description: 'A comprehensive Gym Management Platform / SaaS for fitness centers to manage member subscriptions, attendance tracking workflows, and operational scheduling.',
    builtThrough: 'NexGo Tech',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    image: '/project_erp_mockup.jpg',
    features: [
      'Gym member administration & subscription management',
      'Attendance tracking & scheduling workflows',
      'Responsive dashboard & member portal',
      'RESTful API architecture with MongoDB backend'
    ],
    liveUrl: 'https://fitcamp.in'
  },
  {
    id: '2',
    name: 'Cacky Cake',
    category: 'Client Work',
    description: 'A custom business website for an artisan bakery featuring product showcase galleries, online customer inquiry processing, and mobile-friendly ordering.',
    builtThrough: 'NexGo Tech',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    image: '/project_admin_mockup.jpg',
    features: [
      'Custom cake product catalog display',
      'Customer order inquiry workflow',
      'Responsive mobile-first user interface',
      'Content management for bakery updates'
    ],
    liveUrl: 'https://cackycake.live'
  },
  {
    id: '3',
    name: 'NexGo Tech',
    category: 'My Venture',
    description: 'My software and web development venture dedicated to building commercial client web applications, custom digital products, and performant web services.',
    techStack: ['Full-Stack Development', 'Software Architecture', 'Client Delivery', 'Web Applications'],
    image: '/project_nexgo_mockup.png',
    features: [
      'Commercial client web application delivery',
      'Custom digital product development',
      'End-to-end full stack architecture',
      'Modern responsive design implementations'
    ],
    liveUrl: 'https://nexgo-org.tech'
  },
  {
    id: '4',
    name: 'PassItOn',
    category: 'Personal Project',
    description: 'A community resource sharing web application that connects users to share, discover, and redistribute reusable goods and items.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Web APIs'],
    image: '/project_passiton_mockup.jpg',
    features: [
      'Item listing and search discovery',
      'Resource sharing categorization',
      'User interface for item publishing',
      'Responsive client-side application'
    ],
    githubUrl: 'https://github.com/khandaitpiyush/pass-it-on',
    liveUrl: 'https://pass-it-on-piyushh.netlify.app/'
  },
  {
    id: '5',
    name: 'Customer Support CRM',
    category: 'Personal Project',
    description: 'A customer support ticket management CRM for logging support inquiries, managing ticket priorities, and tracking customer query status.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'State Management'],
    image: '/project_crm_mockup.jpg',
    features: [
      'Support ticket tracking and logging',
      'Customer inquiry status workflows',
      'Ticket categorization and priority queues',
      'Responsive support dashboard'
    ],
    githubUrl: 'https://github.com/khandaitpiyush/customer-support-crm',
    liveUrl: 'https://customer-support-crm.netlify.app/'
  }
];

export const skillCategories = {
  'Core Stack': [
    'MongoDB',
    'Express.js',
    'React.js',
    'Node.js',
    'TypeScript'
  ],
  'Frontend': [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'React Router',
    'Responsive Design'
  ],
  'Backend & APIs': [
    'RESTful APIs',
    'JWT Authentication',
    'Express Middleware',
    'API Architecture'
  ],
  'Databases': [
    'MongoDB',
    'Mongoose ODM',
    'Firestore',
    'Database Design'
  ],
  'Tools & Platforms': [
    'Git & GitHub',
    'VS Code',
    'Postman',
    'Vite',
    'Vercel',
    'Netlify'
  ]
};

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Founder & Lead Engineer',
    organization: 'NexGo Tech',
    type: 'venture',
    duration: '2024 – Present',
    description: 'Directing technical development for client web applications including Fitcamp and Cacky Cake. Handling full-stack implementation and deployment.',
    skills: ['React', 'TypeScript', 'Node.js', 'Client Delivery']
  },
  {
    id: '2',
    title: 'Smart India Hackathon Participant',
    organization: 'Government of India',
    type: 'hackathon',
    duration: 'Dec 2024',
    description: 'Collaborated with a technical team to build a web application solution for national-level problem statements. Developed responsive frontend interfaces.',
    skills: ['React', 'TypeScript', 'Team Collaboration', 'Problem Solving']
  },
  {
    id: '3',
    title: 'MongoDB Developer Certification',
    organization: 'MongoDB University',
    type: 'certification',
    duration: 'Nov 2024',
    description: 'Completed comprehensive training on MongoDB database design, queries, aggregation framework, and performance optimization.',
    skills: ['MongoDB', 'Database Design', 'Aggregation']
  },
  {
    id: '4',
    title: 'Web Development Workshop',
    organization: 'Don Bosco Institute of Technology',
    type: 'workshop',
    duration: 'Mar 2024',
    description: 'Participated in an intensive 3-day workshop on modern web development, covering React, TypeScript, and full-stack architecture patterns.',
    skills: ['React', 'TypeScript', 'REST APIs']
  }
];

export const currentLearning = [
  'Advanced TypeScript patterns and generics',
  'Data Structures & Algorithms (DSA)',
  'System Design fundamentals',
  'GraphQL and modern API architectures',
  'Testing with Jest',
  'Docker and containerization basics'
];

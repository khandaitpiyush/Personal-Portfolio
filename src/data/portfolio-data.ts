import { Project, Skill, Experience, PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Piyush Prashant Khandait',
  title: 'MERN Stack Developer',
  subtitle: 'Second-Year Information Technology Student',
  college: 'Don Bosco Institute of Technology, Mumbai',
  location: 'Mumbai, India',
  email: 'khandaitpiyush@gmail.com',
  github: 'https://github.com/khandaitpiyush',
  linkedin: 'https://www.linkedin.com/in/piyush-khandait-39930b222/',
  bio: 'Passionate about engineering high-performance, scalable web applications using the MERN stack and modern TypeScript ecosystem. Dedicated to clean code, robust backend design, and fluid user experiences.',
  openToWork: true,
  statusText: 'Open to Summer Internship & Full-Time Roles'
};

export const projects: Project[] = [
  {
    id: '1',
    name: 'College ERP System',
    description: 'A comprehensive Enterprise Resource Planning system for educational institutions with role-based access control, student management, and analytics dashboard.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'JWT'],
    image: '/project_erp_mockup.jpg',
    features: [
      'Role-based authentication (Admin, Faculty, Student)',
      'Student attendance tracking system',
      'Grade management and report generation',
      'Real-time notifications and announcements',
      'RESTful API with comprehensive error handling'
    ],
    githubUrl: 'https://github.com/khandaitpiyush/college-erp',
    liveUrl: 'https://college-erp-demo.vercel.app'
  },
  {
    id: '2',
    name: 'Business Portfolio & Admin Dashboard',
    description: 'A full-stack business website with a powerful admin dashboard for content management, analytics, and client inquiries.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    image: '/project_admin_mockup.jpg',
    features: [
      'Dynamic content management system',
      'Contact form with email integration',
      'Analytics dashboard with visualizations',
      'Responsive design with dark mode',
      'Image upload and optimization'
    ],
    githubUrl: 'https://github.com/khandaitpiyush/business-dashboard',
    liveUrl: 'https://business-dashboard-demo.vercel.app'
  },
  {
    id: '3',
    name: 'Task Management Application',
    description: 'A collaborative task management system with real-time updates, project tracking, and team collaboration features.',
    techStack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Tailwind CSS', 'Context API'],
    image: '/project_admin_mockup.jpg',
    features: [
      'User authentication with Firebase Auth',
      'Real-time task synchronization',
      'Project categorization and filtering',
      'Drag-and-drop task management',
      'Progress tracking and statistics'
    ],
    githubUrl: 'https://github.com/khandaitpiyush/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app'
  },
  {
    id: '4',
    name: 'E-Commerce Product Catalog',
    description: 'A scalable e-commerce platform with product management, shopping cart, and secure checkout process.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Redux Toolkit', 'Stripe API'],
    features: [
      'Product search and filtering system',
      'Shopping cart with persistent state',
      'User authentication and profiles',
      'Order management system',
      'Payment integration (Stripe)'
    ],
    githubUrl: 'https://github.com/khandaitpiyush/ecommerce-catalog'
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
    'Redux Toolkit',
    'React Router',
    'Responsive Design'
  ],
  'Backend & APIs': [
    'RESTful APIs',
    'JWT Authentication',
    'Firebase',
    'Mongoose ODM',
    'Express Middleware',
    'API Security'
  ],
  'Databases': [
    'MongoDB',
    'Firestore',
    'MySQL',
    'Database Design'
  ],
  'Tools & Platforms': [
    'Git & GitHub',
    'VS Code',
    'Postman',
    'Figma',
    'npm/yarn',
    'Vercel',
    'Heroku'
  ],
  'Core CS Concepts': [
    'Data Structures',
    'Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Software Engineering'
  ]
};

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full Stack Development Intern',
    organization: 'Tech Startup Mumbai',
    type: 'internship',
    duration: 'Jun 2024 - Aug 2024',
    description: 'Developed and maintained MERN stack applications, implemented RESTful APIs, and collaborated with the team on feature development and bug fixes.',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Git']
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    organization: 'Don Bosco Institute of Technology',
    type: 'workshop',
    duration: 'Mar 2024',
    description: 'Participated in an intensive 3-day workshop on modern web development, covering React, TypeScript, and full-stack architecture patterns.',
    skills: ['React', 'TypeScript', 'REST APIs']
  },
  {
    id: '3',
    title: 'Smart India Hackathon Participant',
    organization: 'Government of India',
    type: 'hackathon',
    duration: 'Dec 2024',
    description: 'Collaborated with a team to build a web-based solution for real-world problems. Developed the complete frontend using React and TypeScript.',
    skills: ['React', 'TypeScript', 'Team Collaboration', 'Problem Solving']
  },
  {
    id: '4',
    title: 'MongoDB Developer Certification',
    organization: 'MongoDB University',
    type: 'certification',
    duration: 'Nov 2024',
    description: 'Completed comprehensive training on MongoDB database design, queries, aggregation framework, and performance optimization.',
    skills: ['MongoDB', 'Database Design', 'Aggregation']
  }
];

export const currentLearning = [
  'Advanced TypeScript patterns and generics',
  'Data Structures & Algorithms (DSA)',
  'System Design fundamentals',
  'GraphQL and modern API architectures',
  'Testing with Jest and React Testing Library',
  'Docker and containerization basics'
];

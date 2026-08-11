export type ProjectCategory = 'Client Work' | 'My Venture' | 'Personal Project';

export interface Project {
  id: string;
  name: string;
  category?: ProjectCategory;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  builtThrough?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  type: 'internship' | 'workshop' | 'hackathon' | 'certification' | 'venture';
  duration: string;
  description: string;
  skills?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  college: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
  openToWork: boolean;
  statusText: string;
  resumeUrl?: string;
}

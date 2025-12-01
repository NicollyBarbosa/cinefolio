export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string; // Optional for demo purposes
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'sobre',
  WORK = 'trabalhos',
  CONTACT = 'contato'
}
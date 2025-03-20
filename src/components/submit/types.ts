export interface FormStep {
    title: string;
    description: string;
  }
  
  export interface FormData {
    projectName: string;
    websiteUrl: string;
    blockchain: string;
    whitepaper: File | null;
    roadmap: File | null;
    smartContract: string;
    githubRepo: string;
    teamMembers: TeamMember[];
    socialLinks: SocialLinks;
  }
  
  export interface TeamMember {
    name: string;
    role: string;
    linkedin?: string;
  }
  
  export interface SocialLinks {
    twitter?: string;
    telegram?: string;
    discord?: string;
    github?: string;
  }
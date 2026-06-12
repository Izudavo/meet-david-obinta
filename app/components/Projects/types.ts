export type Project = {
  title: string;
  description: string;
  category: "uiux" | "frontend" | "backend" | "cloud";
  tech: string[];
  highlights?: string[];
  github?: string;
  live?: string;
  figma?: string;
  image: string; 
  gallery?: string[]; 
  metrics?: {
    label: string;
    value: string;
  }[];
  accent: string;
};
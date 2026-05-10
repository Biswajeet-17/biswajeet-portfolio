export type ProjectDetailSection = {
  title: string;
  body: string;
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  imageSrc: string;
  imageAlt: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  features: string[];
  technologies: string[];
  challenges: string;
};

interface ProjectInterface {
  id: number;
  image: string;
  heading: string;
  paragraph: string;
  stack: string[];
  link: string;
}

interface ProjectHeroProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ProjectBodyProps {
  github: string;
  liveDemo: string;
  problem: string[];
  solution: string[];
  broadImage: string;
  verticalImage: string;
}
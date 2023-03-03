export interface ToolsItem {
  icon: string;
  title: string;
  url: string;
}

export interface CvItem {
  date: string;
  tags: string[];
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface NotARobotCard {
  title: string;
  text: string;
  image: ImageMetadata;
}

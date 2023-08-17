
export interface CvItem {
    date: string;
    tags: string[];
    items: string[];
}

export interface FaqItem {
    question: string;
    answer: string;
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

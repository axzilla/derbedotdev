
export interface CvItem {
    date: string;
    tags: string[];
    items: string[];
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

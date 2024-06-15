export interface UserType {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
}

export interface ArticleType {
    id: string;
    slug: string;
    title: string;
    image: string;
    video: any;
    audio: any;
    caption: string;
    description: string;
    description_splitter: string[];
    categories: any[];
    like: number;
    viewer: number;
    share: number;
    is_like: boolean;
    author: any;
    website: Website;
    image_metadata: ImageMetadata;
    video_metadata: any;
    status: string;
    source_url: string;
    date: string;
}

export interface Website {
    id: number;
    name: string;
    url: string;
}

export interface ImageMetadata {
    width: number;
    height: number;
}

export interface BlogPost {
    id: number;
    attributes: {
        Title: string;
        Slug: string;
        Content?: string;
        Date?: string;
        Cover?: {
            url: string;
            caption: string;
        };
        Subtitle?: string;
    };
}

export interface Homelab {
    Content: string;
}

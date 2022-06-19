export interface BlogPost {
    id: number;
    attributes: {
        Title: string;
        Slug: string;
        Content?: string;
        Date?: string;
    };
}

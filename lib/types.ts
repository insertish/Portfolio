export interface Image {
    url: string;
    caption: string;
}

export interface BlogPost {
    Title: string;
    Slug: string;
    Content?: string;
    Date?: string;
    Cover?: Image;
    Subtitle?: string;
}

export interface Project {
    timestamp?: number;

    Slug: string;
    Name: string;
    Description?: string;
    Cover?: Image;
    Started?: string;
    Updated?: string;
    ComputedTimestamp?: string;
    Featured: boolean;
    Hidden: boolean;
    Tags?: string;
    Languages?: string;
    Type?:
        | "website"
        | "app"
        | "library"
        | "game"
        | "service"
        | "utility"
        | "mod"
        | "os"
        | "other";
    Website?: string;
    Repository?: string;
    Library?: string;
    Content?: string;
    Sync: boolean;
    README?: string;
}

export interface Homelab {
    Content: string;
}

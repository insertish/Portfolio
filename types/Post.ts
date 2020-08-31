export interface Post {
    slug: string,
    published: string,
    updated?: string,
    timestamp: number,
    title: string,
    description: string,
    tags?: string,
    cover?: string
}

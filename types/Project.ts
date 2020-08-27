export interface Project {
    slug: string,
    started: string,
    updated?: string,
    timestamp: number,

    featured?: boolean,

    name: string,
    description: string,
    
    tags: string,
    cover?: string,
    languages: string,
    type: 'app' | 'library' | 'game' | 'other',

    homepage?: string,
    repository?: string,
    library?: string,
}

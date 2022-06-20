import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { BlogPost, Homelab, Project } from "./types";

const STRAPI_ENDPOINT = "https://strapi.insrt.uk";

export const getPath = (path: string) => STRAPI_ENDPOINT + path;

const client = new ApolloClient({
    uri: getPath("/graphql"),
    cache: new InMemoryCache({
        addTypename: false,
    }),
});

export default client;

/**
 * Map image cover property
 */
function mapCover(v: any): BlogPost["Cover"] | null {
    if (v?.data?.attributes) {
        const root = v.data.attributes;

        let url;
        if (typeof root.formats === "string") {
            url = root.formats;
        } else {
            url = root.formats.medium.url;
        }

        return {
            url,
            caption: root.caption,
        };
    } else {
        return null;
    }
}

/**
 * Fetch a blog post by a given slug.
 * @param slug Slug
 * @returns Blog post
 */
export const getPost = (slug: string) =>
    client
        .query({
            query: gql`
            query {
                posts(filters: { Slug: { eq: "${slug}" } }) {
                    data {
                        attributes {
                            Title
                            Content
                            Slug
                            Date
                            Cover {
                                data {
                                    attributes {
                                        formats:url
                                        caption
                                    }
                                }
                            }
                            Tags
                        }
                    }
                }
            }
        `,
        })
        .then(({ data }) => data.posts.data[0].attributes as BlogPost)
        .then((post) => ({
            ...post,
            Cover: mapCover(post.Cover),
        }));

/**
 * List all blog posts.
 * @returns Blog posts
 */
export const listPosts = () =>
    client
        .query({
            query: gql`
                query {
                    posts(sort: "id:desc") {
                        data {
                            attributes {
                                Title
                                Slug
                                Date
                                Cover {
                                    data {
                                        attributes {
                                            formats
                                            caption
                                        }
                                    }
                                }
                                Tags
                                Subtitle
                            }
                        }
                    }
                }
            `,
        })
        .then(({ data }) => data.posts.data as { attributes: any }[])
        .then((posts) =>
            posts
                .map((post) => post.attributes as BlogPost)
                .map((post) => ({
                    ...post,
                    Cover: mapCover(post.Cover),
                })),
        );

/**
 * List all projects.
 * @returns Projects
 */
export const listProjects = (options?: {
    ignoreHidden?: boolean;
    featured?: boolean;
    offset?: number;
    limit?: number;
}) =>
    client
        .query({
            query: gql`
                query {
                    projects(
                        sort: ["ComputedTimestamp:desc"]
                        filters: {
                            ${options?.featured ? "Featured: { eq: true }" : ""}
                            ${
                                options?.ignoreHidden
                                    ? "Hidden: { eq: false }"
                                    : ""
                            }
                        }
                        pagination: {
                            start: ${options?.offset ?? 0}
                            limit: ${options?.limit ?? 25}
                        }
                    )
                    {
                        data {
                            attributes {
                                Slug
                                Name
                                Description
                                Cover {
                                    data {
                                        attributes {
                                            formats
                                            caption
                                        }
                                    }
                                }
                                Started
                                Updated
                                Featured
                            }
                        }
                        meta {
                            pagination {
                                total
                            }
                        }
                    }
                }
            `,
        })
        .then(({ data }) => ({
            total: data.projects.meta.pagination.total,
            projects: (data.projects.data as { attributes: any }[])
                .map((project) => project.attributes as Project)
                .map((project) => ({
                    ...project,
                    Cover: mapCover(project.Cover),
                    timestamp: +new Date(
                        project.Updated ?? project.Started ?? 0,
                    ),
                }))
                .sort((a, b) => b.timestamp - a.timestamp),
        }));

/**
 * Get homelab information
 * @returns Homelab
 */
export const getHomelab = () =>
    client
        .query({
            query: gql`
                query {
                    homelab {
                        data {
                            attributes {
                                Content
                            }
                        }
                    }
                }
            `,
        })
        .then(({ data }) => data.homelab.data.attributes as Homelab);
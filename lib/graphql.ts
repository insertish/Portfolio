import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { BlogPost } from "./types";

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
function mapCover(v: any): BlogPost["attributes"]["Cover"] | null {
    if (v?.data?.attributes) {
        const root = v.data.attributes;

        let url;
        if (typeof root.formats === "string") {
            url = root.formats;
        } else {
            url = root.formats.thumbnail.url;
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
                        id
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
                        }
                    }
                }
            }
        `,
        })
        .then(({ data }) => data.posts.data[0] as BlogPost)
        .then((post) => ({
            ...post,
            attributes: {
                ...post.attributes,
                Cover: mapCover(post.attributes.Cover),
            },
        }));

export const listPosts = () =>
    client
        .query({
            query: gql`
                query {
                    posts(sort: "id:desc") {
                        data {
                            id
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
                            }
                        }
                    }
                }
            `,
        })
        .then(({ data }) => data.posts.data as BlogPost[])
        .then((posts) =>
            posts.map((post) => ({
                ...post,
                attributes: {
                    ...post.attributes,
                    Cover: mapCover(post.attributes.Cover),
                },
            })),
        );

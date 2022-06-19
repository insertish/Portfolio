import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { BlogPost } from "./types";

const client = new ApolloClient({
    uri: "https://strapi.insrt.uk/graphql",
    cache: new InMemoryCache(),
});

export default client;

/**
 * Fetch a blog post by a given slug.
 * @param slug Slug
 * @returns Blog post
 */
export const getPost: (slug: string) => Promise<BlogPost | undefined> = (
    slug,
) =>
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
                            Cover
                        }
                    }
                }
            }
        `,
        })
        .then(({ data }) => data.posts.data[0]);

export const listPosts: () => Promise<BlogPost[]> = () =>
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
                            }
                        }
                    }
                }
            `,
        })
        .then(({ data }) => data.posts.data);

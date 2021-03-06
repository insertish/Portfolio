import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Container } from "../components/layout/Container";
import Card from "../components/pages/posts/Card";
import { listPosts } from "../lib/graphql";
import { BlogPost } from "../lib/types";

const List = styled.div`
    gap: 8px;
    margin: 2em 0;
    display: flex;
    flex-direction: column;
`;

const Posts: NextPage<{ posts: BlogPost[] }> = ({ posts }) => {
    return (
        <main>
            <Container>
                <Head>
                    <title>Blog – insrt.uk</title>
                    <meta property="og:title" content="Blog" />
                    <meta
                        property="og:description"
                        content="My corner of the internet."
                    />
                </Head>

                <h1>Blog Posts</h1>
                <List>
                    {posts.map((post) => (
                        <Card key={post.Slug} post={post} />
                    ))}
                </List>
            </Container>
        </main>
    );
};

export default Posts;

export async function getStaticProps() {
    const posts = await listPosts();

    return {
        props: {
            posts,
        },
    };
}

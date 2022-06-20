import type { NextPage } from "next";
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
        <Container>
            <h1>Blog Posts</h1>
            <List>
                {posts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </List>
        </Container>
    );
};

export default Posts;

export async function getServerSideProps() {
    const posts = await listPosts();

    return {
        props: {
            posts,
        },
    };
}

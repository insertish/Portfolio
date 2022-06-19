import type { NextPage } from "next";
import { Container } from "../components/layout/Container";
import { listPosts } from "../lib/graphql";
import { BlogPost } from "../lib/types";

const Posts: NextPage<{ posts: BlogPost[] }> = ({ posts }) => {
    return (
        <Container>
            <h1>Blog Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <a href={`/post/${post.attributes.Slug}`}>
                        {post.attributes.Title}
                    </a>
                </div>
            ))}
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

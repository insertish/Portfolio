import type { NextPage } from "next";
import { listPosts } from "../lib/graphql";
import { BlogPost } from "../lib/types";

const Posts: NextPage<{ posts: BlogPost[] }> = ({ posts }) => {
    return <div>{JSON.stringify(posts)}</div>;
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

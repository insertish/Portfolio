import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Backtrack } from "../../components/display/Backtrack";
import { Container } from "../../components/layout/Container";
import { getPath, getPost, listPosts } from "../../lib/graphql";
import { BlogPost } from "../../lib/types";
import readingTime from "reading-time";
import { RenderContent } from "../../components/display/TextBlock";
import CommentBox from "../../components/display/CommentBox";

import dayjs from "dayjs";

import advancedFormat from "dayjs/plugin/advancedFormat";
import Cover from "../../components/display/Cover";
import Head from "next/head";
dayjs.extend(advancedFormat);

const Posts: NextPage<{ post: BlogPost; reading: string }> = ({
    post,
    reading,
}) => {
    return (
        <main>
            <Head>
                <title>{post.Title} – insrt.uk</title>
                <meta property="og:title" content={post.Title} />
                <meta property="og:description" content={post.Subtitle} />
                <meta property="twitter:card" content="summary_large_image" />
                {post.Cover && (
                    <>
                        <meta
                            property="og:image"
                            content={getPath(post.Cover.url)}
                        />
                        <meta
                            property="twitter:image"
                            content={getPath(post.Cover.url)}
                        />
                        <meta
                            property="og:image:width"
                            content={post.Cover.width.toString()}
                        />
                        <meta
                            property="og:image:height"
                            content={post.Cover.height.toString()}
                        />
                    </>
                )}
            </Head>

            <Container>
                <Backtrack text="Read other posts" href="/posts" />
                <h1>{post.Title}</h1>
                <h5>
                    {reading} &middot;{" "}
                    <time>{dayjs(post.Date).format("Do MMMM YYYY")}</time>
                </h5>
            </Container>
            <Cover cover={post.Cover} />
            <Container>
                <RenderContent content={post.Content!} />
                <CommentBox />
            </Container>
        </main>
    );
};

export default Posts;

export const getStaticProps: GetStaticProps = async (context) => {
    const post = await getPost(context.params!.slug as string);
    const reading = readingTime(post?.Content ?? "").text;

    return {
        props: {
            post,
            reading,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await listPosts();

    return {
        paths: posts.map(({ Slug }) => ({ params: { slug: Slug } })),
        fallback: "blocking",
    };
};

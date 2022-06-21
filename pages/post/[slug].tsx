import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { Backtrack } from "../../components/display/Backtrack";
import { Container } from "../../components/layout/Container";
import { getPath, getPost } from "../../lib/graphql";
import { BlogPost } from "../../lib/types";
import readingTime from "reading-time";
import { RenderContent } from "../../components/display/TextBlock";

import dayjs from "dayjs";

import advancedFormat from "dayjs/plugin/advancedFormat";
import { useHighlighter } from "../../lib/hljs";
dayjs.extend(advancedFormat);

const Posts: NextPage<{ post: BlogPost; reading: string }> = ({
    post,
    reading,
}) => {
    return (
        <>
            <Container>
                <Backtrack text="Read other posts" href="/posts" />
                <h1>{post.Title}</h1>
                <h5>
                    {reading} &middot;{" "}
                    <time>{dayjs(post.Date).format("Do MMMM YYYY")}</time>
                </h5>
            </Container>
            {post.Cover && (
                <>
                    <div
                        style={{
                            width: "100%",
                            height: "420px",
                            position: "relative",
                            userSelect: "none",
                        }}>
                        <Image
                            src={getPath(post.Cover.url)}
                            alt={post.Cover.caption}
                            objectFit="cover"
                            layout="fill"
                        />
                    </div>
                    <Container>
                        <figcaption>{post.Cover.caption}</figcaption>
                    </Container>
                </>
            )}
            <RenderContent content={post.Content!} />
        </>
    );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const post = await getPost(context.query.slug as string);
    const reading = readingTime(post?.Content ?? "").text;

    return {
        props: {
            post,
            reading,
        },
    };
};

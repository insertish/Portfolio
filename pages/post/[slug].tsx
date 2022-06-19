import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { Backtrack } from "../../components/display/Backtrack";
import { Container } from "../../components/layout/Container";
import { getPath, getPost } from "../../lib/graphql";
import { BlogPost } from "../../lib/types";
import readingTime from "reading-time";
import { TextBlock } from "../../components/display/TextBlock";

import dayjs from "dayjs";

import advancedFormat from "dayjs/plugin/advancedFormat";
import { useHighlighter } from "../../lib/hljs";
dayjs.extend(advancedFormat);

const Posts: NextPage<{ post: BlogPost; reading: string }> = ({
    post,
    reading,
}) => {
    useHighlighter("#content pre > code", "bash");

    return (
        <>
            <Container>
                <Backtrack text="Read other posts" href="/posts" />
                <h1>{post.attributes.Title}</h1>
                <h5>
                    {reading} &middot;{" "}
                    <time>
                        {dayjs(post.attributes.Date).format("Do MMMM YYYY")}
                    </time>
                </h5>
            </Container>
            {post.attributes.Cover && (
                <>
                    <div
                        style={{
                            width: "100%",
                            height: "420px",
                            position: "relative",
                            userSelect: "none",
                        }}>
                        <Image
                            src={getPath(post.attributes.Cover.url)}
                            alt={post.attributes.Cover.caption}
                            objectFit="cover"
                            layout="fill"
                        />
                    </div>
                    <h6>{post.attributes.Cover.caption}</h6>
                </>
            )}
            <TextBlock
                id="content"
                verticalPadding="16px"
                dangerouslySetInnerHTML={{ __html: post.attributes.Content! }}
            />
        </>
    );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const post = await getPost(context.query.slug as string);
    const reading = readingTime(post?.attributes.Content ?? "").text;

    return {
        props: {
            post,
            reading,
        },
    };
};

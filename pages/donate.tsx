import type { NextPage } from "next";
import Head from "next/head";
import { useLayoutEffect, useState } from "react";
import { RenderContent } from "../components/display/TextBlock";
import { Container } from "../components/layout/Container";
import { getEmail } from "../lib/email";
import { getDonation } from "../lib/graphql";

const Donate: NextPage<{ donate: string }> = ({ donate }) => {
    const [content, setContent] = useState(donate);

    if (typeof window !== "undefined") {
        // eslint-disable-next-line
        useLayoutEffect(
            () =>
                setContent(content.replace(/{{email}}/g, getEmail("primary"))),
            [content],
        );
    }

    return (
        <main>
            <Container>
                <Head>
                    <title>Donate – insrt.uk</title>
                    <meta property="og:title" content="Donate" />
                    <meta
                        property="og:description"
                        content="Help support my work on open source projects."
                    />
                </Head>

                <h1>Donate</h1>
                <RenderContent content={content} />
            </Container>
        </main>
    );
};

export default Donate;

export async function getServerSideProps() {
    const donate = await getDonation();

    return {
        props: {
            donate,
        },
    };
}

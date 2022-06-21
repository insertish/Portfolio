import type { NextPage } from "next";
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
        <>
            <Container>
                <h1>Donate</h1>
                <RenderContent content={content} />
            </Container>
        </>
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

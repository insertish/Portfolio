import type { NextPage } from "next";
import Head from "next/head";
import { RenderContent } from "../components/display/TextBlock";
import { Container } from "../components/layout/Container";
import { getHomelab } from "../lib/graphql";
import { Homelab } from "../lib/types";

const Homelab: NextPage<{ homelab: Homelab }> = ({ homelab }) => {
    return (
        <main>
            <Container>
                <Head>
                    <title>Homelab – insrt.uk</title>
                    <meta property="og:title" content="Homelab" />
                    <meta
                        property="og:description"
                        content="Information about my home infrastructure."
                    />
                </Head>

                <h1>Homelab</h1>
                <RenderContent content={homelab.Content} />
            </Container>
        </main>
    );
};

export default Homelab;

export async function getStaticProps() {
    const homelab = await getHomelab();

    return {
        props: {
            homelab,
        },
    };
}

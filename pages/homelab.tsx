import type { NextPage } from "next";
import { RenderContent } from "../components/display/TextBlock";
import { Container } from "../components/layout/Container";
import { getHomelab } from "../lib/graphql";
import { Homelab } from "../lib/types";

const Homelab: NextPage<{ homelab: Homelab }> = ({ homelab }) => {
    return (
        <>
            <Container>
                <h1>Homelab</h1>
                <RenderContent content={homelab.Content} />
            </Container>
        </>
    );
};

export default Homelab;

export async function getServerSideProps() {
    const homelab = await getHomelab();

    return {
        props: {
            homelab,
        },
    };
}

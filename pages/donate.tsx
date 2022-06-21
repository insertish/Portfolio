import type { NextPage } from "next";
import { RenderContent } from "../components/display/TextBlock";
import { Container } from "../components/layout/Container";
import { getDonation } from "../lib/graphql";

const Donate: NextPage<{ donate: string }> = ({ donate }) => {
    return (
        <>
            <Container>
                <h1>Donate</h1>
                <RenderContent content={donate} />
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

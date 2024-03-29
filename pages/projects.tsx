import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Container } from "../components/layout/Container";
import Card from "../components/pages/projects/Card";
import { listProjects } from "../lib/graphql";

const Grid = styled.div`
    display: grid;
    grid-gap: 20px;
    // grid-auto-rows: 240px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

const Projects: NextPage<Awaited<ReturnType<typeof listProjects>>> = ({
    projects,
    total,
}) => {
    return (
        <main>
            <Container>
                <Head>
                    <title>Projects – insrt.uk</title>
                    <meta property="og:title" content="Projects" />
                    <meta
                        property="og:description"
                        content="A detailed list of all of my projects."
                    />
                </Head>

                <h1>Projects</h1>

                <div
                    style={{
                        padding: "1em",
                        fontSize: "2em",
                        margin: "1em 0",
                        borderRadius: "12px",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                    }}>
                    This list is currently about{" "}
                    <span style={{ textDecoration: "line-through" }}>2</span> 3
                    years out of date,
                    <br />
                    <small>{"I will eventually update it..."}</small>
                    <br />
                    <small>
                        <small>
                            <small>
                                {
                                    "(it's also missing projects pre-2018 to 2012)"
                                }
                            </small>
                        </small>
                    </small>
                </div>

                <Grid>
                    {projects.map((project) => (
                        <Card key={project.Slug} project={project} />
                    ))}
                </Grid>
            </Container>
        </main>
    );
};

export default Projects;

export async function getStaticProps() {
    return {
        props: await listProjects({
            // filterWithContent: true,
            limit: 200,
        }),
    };
}

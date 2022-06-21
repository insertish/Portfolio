import type { NextPage } from "next";
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
        <Container>
            <h1>Projects</h1>

            <div
                style={{
                    padding: "1em",
                    fontSize: "2em",
                    margin: "1em 0",
                    borderRadius: "12px",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                }}>
                This list is currently about 2 years out of date,
                <br />
                <small>
                    {"I'm slowly working on getting everything recent in."}
                </small>
            </div>

            <Grid>
                {projects.map((project) => (
                    <Card key={project.Slug} project={project} />
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;

export async function getServerSideProps() {
    return {
        props: await listProjects({
            // filterWithContent: true,
            limit: 200,
        }),
    };
}

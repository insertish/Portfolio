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
            <Grid>
                {projects.map((project) => (
                    <Card key={project.Slug} project={project} />
                ))}
            </Grid>
            Total Projects: {total}
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

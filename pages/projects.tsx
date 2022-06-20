import type { NextPage } from "next";
import { Container } from "../components/layout/Container";
import Card from "../components/pages/projects/Card";
import { listProjects } from "../lib/graphql";

const Projects: NextPage<Awaited<ReturnType<typeof listProjects>>> = ({
    projects,
    total,
}) => {
    return (
        <Container>
            <h1>Projects</h1>
            {projects.map((project) => (
                <Card key={project.Slug} project={project} />
            ))}
            Total Projects: {total}
        </Container>
    );
};

export default Projects;

export async function getServerSideProps() {
    return {
        props: await listProjects({
            filterWithContent: true,
        }),
    };
}

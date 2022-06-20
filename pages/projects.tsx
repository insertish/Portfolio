import type { NextPage } from "next";
import { Container } from "../components/layout/Container";
import { listProjects } from "../lib/graphql";

const Projects: NextPage<Awaited<ReturnType<typeof listProjects>>> = ({
    projects,
    total,
}) => {
    return (
        <Container>
            <h1>Projects</h1>
            {projects.map((x) => (
                <div key={x.Slug}>
                    <a>{x.Name}</a>
                </div>
            ))}
            Total Projects: {total}
        </Container>
    );
};

export default Projects;

export async function getServerSideProps() {
    return {
        props: await listProjects(),
    };
}

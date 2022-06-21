import type { GetServerSideProps, NextPage } from "next";
import { Backtrack } from "../../components/display/Backtrack";
import { Container } from "../../components/layout/Container";
import { getProject } from "../../lib/graphql";
import { Project } from "../../lib/types";
import { RenderContent } from "../../components/display/TextBlock";

import dayjs from "dayjs";

import advancedFormat from "dayjs/plugin/advancedFormat";
import Cover from "../../components/display/Cover";
dayjs.extend(advancedFormat);

const Projects: NextPage<{ project: Project; reading: string }> = ({
    project,
}) => {
    return (
        <>
            <Container>
                <Backtrack text="Browse other projects" href="/projects" />
                <h1>{project.Name}</h1>
                <h5>
                    <time>{dayjs(project.Started).format("Do MMMM YYYY")}</time>
                    {" — "}
                    {project.Updated && (
                        <>
                            <time>
                                {dayjs(project.Updated).format("Do MMMM YYYY")}
                            </time>
                        </>
                    )}
                </h5>
            </Container>
            <Cover cover={project.Cover} />
            <Container>
                <RenderContent content={project.Content!} />
            </Container>
            <pre>
                <code>{JSON.stringify(project, null, "\t")}</code>
            </pre>
        </>
    );
};

export default Projects;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const project = await getProject(context.query.slug as string);

    return {
        props: {
            project,
        },
    };
};

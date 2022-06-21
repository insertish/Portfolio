import type { GetServerSideProps, NextPage } from "next";
import { Backtrack } from "../../components/display/Backtrack";
import { Container } from "../../components/layout/Container";
import { getProject } from "../../lib/graphql";
import { Project } from "../../lib/types";
import { RenderContent } from "../../components/display/TextBlock";
import Cover from "../../components/display/Cover";
import { Badge } from "../../components/display/Badge";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { BadgeContainer } from "../../components/display/BadgeContainer";
dayjs.extend(advancedFormat);

const Projects: NextPage<{ project: Project; reading: string }> = ({
    project,
}) => {
    return (
        <>
            <Container>
                <Backtrack text="Browse other projects" href="/projects" />
                <h1>{project.Name}</h1>
                <BadgeContainer>
                    {project.Type && <Badge tech={project.Type} />}
                    {project.Languages?.split(",").map((tech) => (
                        <Badge key={tech} tech={tech} />
                    ))}
                    {project.Tags?.split(",").map((tech) => (
                        <Badge key={tech} tech={tech} />
                    ))}
                </BadgeContainer>
                <h5>
                    {project.Website && (
                        <>
                            <a
                                href={project.Website}
                                target="_blank"
                                rel="noreferrer">
                                Website
                            </a>{" "}
                            &middot;{" "}
                        </>
                    )}
                    {project.Repository && (
                        <>
                            <a
                                href={project.Repository}
                                target="_blank"
                                rel="noreferrer">
                                Repository
                            </a>{" "}
                            &middot;{" "}
                        </>
                    )}
                    {project.Library && (
                        <>
                            <a
                                href={project.Library}
                                target="_blank"
                                rel="noreferrer">
                                Library
                            </a>{" "}
                            &middot;{" "}
                        </>
                    )}
                    <time>{dayjs(project.Started).format("Do MMMM YYYY")}</time>
                    {project.Updated && (
                        <>
                            {" — "}
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

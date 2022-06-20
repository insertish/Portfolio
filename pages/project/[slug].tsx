import type { GetServerSideProps, NextPage } from "next";
import { Backtrack } from "../../components/display/Backtrack";
import { Container } from "../../components/layout/Container";
import { getProject } from "../../lib/graphql";
import { Project } from "../../lib/types";
import readingTime from "reading-time";
import { RenderContent } from "../../components/display/TextBlock";

import dayjs from "dayjs";

import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const Projects: NextPage<{ project: Project; reading: string }> = ({
    project,
    reading,
}) => {
    return (
        <>
            <Container>
                <Backtrack text="Browse other projects" href="/projects" />
                <h1>{project.Name}</h1>
            </Container>
            <RenderContent content={project.Content!} />
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

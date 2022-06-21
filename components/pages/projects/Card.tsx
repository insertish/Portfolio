import Image from "next/image";
import styled from "styled-components";
import { Project } from "../../../lib/types";
import { Badge } from "../../display/Badge";
import { BadgeContainer } from "../../display/BadgeContainer";
import { CardBase } from "../../display/Card";

const Base = styled(CardBase)<{ cover?: boolean }>`
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;

    &:hover {
        border: 1px solid transparent;
    }

    .cover {
        width: 100%;
        height: 180px;
        position: relative;

        code {
            width: 100%;
            height: 100%;

            color: #333;
            display: grid;
            font-size: 2em;
            place-items: center;
        }
    }

    .content {
        gap: 4px;
        padding: 8px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .content h3.title {
        gap: 4px;
        margin: 0;
        display: flex;
    }

    .content h3.title em {
        font-size: 0.5em;
    }

    .content .desc {
        flex-grow: 1;
    }

    .content .tech {
        margin-top: 8px;
    }
`;

/**
 * Project card
 */
export default function Card({ project }: { project: Project }) {
    return (
        <Base href={`/project/${project.Slug}`}>
            <div className="cover">
                {project.Cover ? (
                    <Image
                        alt={project.Cover.caption}
                        src={project.Cover.url}
                        objectFit="cover"
                        layout="fill"
                    />
                ) : (
                    <code>{project.Slug}</code>
                )}
            </div>
            <div className="content">
                <h3 className="title">
                    {project.Type && <Badge tech={project.Type} />}
                    {project.Name}
                </h3>
                <span className="desc">{project.Description}</span>
                <BadgeContainer className="tech">
                    {project.Languages?.split(",").map((tech) => (
                        <Badge key={tech} tech={tech} />
                    ))}
                    {project.Tags?.split(",").map((tech) => (
                        <Badge key={tech} tech={tech} />
                    ))}
                </BadgeContainer>
            </div>
        </Base>
    );
}

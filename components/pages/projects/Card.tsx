import { Project } from "../../../lib/types";

/**
 * Project card
 */
export default function Card({ project }: { project: Project }) {
    return (
        <div>
            <a href={`/project/${project.Slug}`}>{project.Name}</a>
        </div>
    );
}

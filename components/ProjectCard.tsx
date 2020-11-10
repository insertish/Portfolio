import { Project } from './Project';
import styles from './ProjectCard.module.scss';
import { TechnologyBadge, TechList } from './Badge';
import { Project as ProjectI } from '../types/Project';

export function ProjectEntry(project: ProjectI) {
    return (
        <div className={styles.card}>
            <Project project={project} card />
            <div className={styles.meta}>
                <TechnologyBadge tech={project.type} />
                <p>
                    {project.description}
                </p>
                <TechList techs={project.languages} mini />
                <TechList techs={project.tags} mini />
            </div>
        </div>
    )
}

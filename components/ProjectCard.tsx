import Link from 'next/link';
import { Project } from '../types/Project';
import styles from './ProjectCard.module.scss';
import { TechnologyBadge, TechList } from './Badge';

export function ProjectEntry(project: Project) {
    return (
        <Link href={`/project/${project.slug}`}>
            <a>
                <div className={styles.card}>
                    <img src={`/projects/${project.slug}.png`} />
                    <div className={styles.meta}>
                        <TechnologyBadge tech={project.type} />
                        <p>
                            {project.description}
                        </p>
                        <TechList techs={project.languages} mini />
                        <TechList techs={project.tags} mini />
                    </div>
                </div>
            </a>
        </Link>
    )
}

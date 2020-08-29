import Link from 'next/link';
import styles from './Project.module.scss';
import { Project as ProjectI } from '../types/Project';

interface Props {
    project: Partial<ProjectI>,
    card?: boolean
}

export function Project({ project, card }: Props) {
    return (
        <Link href={project.slug ? `/project/${project.slug}` : `/projects`}>
            <a>
                <div className={styles.wrapper} data-card={card}>
                    <div className={styles.project}
                        style={{ background: project.banner && `url('${project.banner}')` }}
                        data-project={!!project.slug}
                        >
                        { project.slug ?
                            (
                                !project.banner &&
                                (
                                    <div>
                                        <div>{ project.name }</div>
                                    </div>
                                )
                            )
                            : (
                                <div>
                                    <div>View more.</div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </a>
        </Link>
    )
}

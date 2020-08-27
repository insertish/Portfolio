import Link from 'next/link';
import styles from './Post.module.scss';
import { Project } from '../types/Project';

export function ProjectEntry(project: Project) {
    return (
        <Link href={`/project/${project.slug}`}>
            <a>
                { project.slug }
            </a>
        </Link>
    )
}

import Link from 'next/link';
import styles from './Project.module.scss';

interface Props {
    id: string
}

export function Project(props: Props) {
    return (
        <Link href={`/project/${props.id}`}>
            <a>
                <div className={styles.project} style={{ background: `url('/projects/${props.id}.png?')` }}></div>
            </a>
        </Link>
    )
}

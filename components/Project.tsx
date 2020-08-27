import Link from 'next/link';
import styles from './Project.module.scss';

interface Props {
    id?: string
}

export function Project(props: Props) {
    return (
        <Link href={props.id ? `/project/${props.id}` : `/projects`}>
            <a>
                <div className={styles.project} style={{ background: props.id && `url('/projects/${props.id}.png')` }}>
                    { !props.id && <div>
                        <div>View more.</div>
                    </div> }
                </div>
            </a>
        </Link>
    )
}

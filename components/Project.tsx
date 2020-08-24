import styles from './Project.module.scss';

interface Props {
    id: string
}

export function Project(props: Props) {
    return (
        <div className={styles.project} style={{ background: `url('/projects/${props.id}.png?')` }}></div>
    )
}

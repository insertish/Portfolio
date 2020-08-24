import { ReactNode } from 'react';
import styles from './Grid.module.scss';

interface Props {
    children?: ReactNode | ReactNode[]
}

export function Grid(props: Props) {
    return (
        <div className={styles.grid}>
            { props.children }
        </div>
    )
}

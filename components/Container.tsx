import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface Props {
    children: ReactNode | ReactNode[]
}

export function Container(props: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                { props.children }
            </div>
        </div>
    )
}

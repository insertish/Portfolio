import { ReactNode } from 'react';
import styles from './Overline.module.scss';

interface Props {
    description?: string,
    children: ReactNode | ReactNode[]
}

export function Overline(props: Props) {
    return (
        <div className={styles.overline}>
            <span className={styles.title}>
                { props.children }
            </span>
            {
                props.description &&
                <span className={styles.description}>
                    { props.description }
                </span>
            }
        </div>
    )
}

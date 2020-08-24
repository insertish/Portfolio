import { ReactNode } from 'react';
import styles from './Overline.module.scss';

interface Props {
    children: ReactNode | ReactNode[]
}

export function Overline(props: Props) {
    return (
        <div className={styles.overline}>
            { props.children }
        </div>
    )
}

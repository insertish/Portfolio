import { ReactNode } from 'react';
import styles from './Extra.module.scss';

interface Props {
    style?: 'default' | 'mini' | 'large',
    children?: ReactNode | ReactNode[]
}

export function Extra(props: Props) {
    return (
        <div className={styles.extra} data-style={props.style}>
            { props.children }
        </div>
    )
}

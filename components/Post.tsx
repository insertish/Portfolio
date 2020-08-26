import dayjs from 'dayjs';
import Link from 'next/link';
import styles from './Post.module.scss';
import { Post as PostI } from '../types/Post';

export function Post(props: PostI) {
    return (
        <Link href={`/post/${props.slug}`}>
            <a>
                <div className={styles.post}>
                    <div className={styles.hero} style={{ backgroundImage: `url('${props.cover}')` }}></div>
                    <div className={styles.meta}>
                        <div className={styles.title}>
                            { props.title }
                        </div>
                        <div className={styles.description}>
                            { props.description } { props.description && <span> — </span> }
                            <time>{ dayjs(props.published).format('Do MMMM YYYY') }</time>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

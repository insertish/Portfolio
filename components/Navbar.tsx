import Link from 'next/link';
import { PageSlug } from './Page';
import { Container } from './Container';
import styles from './Navbar.module.scss';

import { Mail } from '@styled-icons/ionicons-outline';
import { Gitlab } from '@styled-icons/boxicons-logos';

interface Props {
    page: PageSlug
}

export function Navbar(props: Props) {
    return (
        <Container>
            <div className={styles.navbar}>
                <div className={styles.title}>
                    &gt;insrt_
                </div>
                <div className={styles.actions}>
                    <Link href="/projects">projects</Link>
                    <Link href="/posts">posts</Link>
                    <Link href="/commission">commission</Link>
					<span><a href="mailto:me@insrt.uk"><Mail size={20} /></a></span>
					<span><a href="https://gitlab.insrt.uk" target="_blank"><Gitlab size={20} /></a></span>
                </div>
            </div>
        </Container>
    )
}

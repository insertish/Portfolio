import Link from 'next/link';
import { useState } from 'react';
import { PageSlug } from './Page';
import { Container } from './Container';
import styles from './Navbar.module.scss';

import { Mail } from '@styled-icons/ionicons-outline';
import { Gitlab } from '@styled-icons/boxicons-logos';

interface Props {
    page: PageSlug
}

const intervals = [];
const strings = [
    "sl",
    "neofetch",
    "cargo run",
    "yarn build",
    "pacman -Syu",
    "rm -rf /boot",
    "yay -Rdd linux",
    "dd if=/dev/zero",
];

let pool = [ ...strings ];
function pick() {
    if (pool.length === 0) {
        pool = [ ...strings ];
    }

    let index = Math.floor(Math.random() * pool.length);
    return pool.splice(index, 1)[0];
}

export function Navbar(props: Props) {
	let [ text, setText ] = useState('insrt');

	function animateTo(string) {
		intervals.forEach(i => clearInterval(i));

		let target = string.split('');
		let current = text;
		let clearing = true;
		let t = false;
		let i = setInterval(() => {
			if (clearing) {
				if (current.length > 0) {
					current = current.substring(0, current.length - 2);
					setText(current);
				} else {
					clearing = false;
				}
			} else {
				t = !t;
				if (t) {
					return;
				}

				if (target.length > 0) {
					current += target.shift();
					setText(current);
				} else {
					clearInterval(i);
				}
			}
		}, 10);
		intervals.push(i);
    }
    
    return (
        <Container>
            <div className={styles.navbar}>
                <div className={styles.title}
                    onMouseEnter={() => animateTo(pick())}
                    onMouseLeave={() => animateTo("insrt")}
                >
                    <Link href="/">
                        <a>
                            &gt;
                            { text }
                            <span className={styles.blink}>_</span>
                        </a>
                    </Link>
                </div>
                <div className={styles.actions}>
                    <Link href="/projects"><a data-active={props.page === 'projects'}>projects</a></Link>
                    <Link href="/posts"><a data-active={props.page === 'posts'}>posts</a></Link>
                    {/*<Link href="/commission"><a data-active={props.page === 'commission'}>commission</a></Link>*/}
					<span><a href="mailto:me@insrt.uk"><Mail size={20} /></a></span>
					<span><a href="https://gitlab.insrt.uk" target="_blank"><Gitlab size={20} /></a></span>
                </div>
            </div>
        </Container>
    )
}

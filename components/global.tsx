import globalStyles from './global.scss';
import styles from './header.scss';

import { Fragment, useState } from 'react';
import Head from 'next/head';

export const global = globalStyles;

const intervals = [];
const strings = [
	"haha yes",
	"epic time",
	"oh yeah yeah",
	"bruh moment",
	"ayy lmao",
];

export function Header(props: { title: string }) {
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
		<Fragment>
			<Head>
				<title>{props.title} – insrt.uk</title>
				<link rel="stylesheet" href="//cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css"></link>
			</Head>
			<div className={styles.header}>
				<div className={styles.innerHeader}>
					<h1
						onMouseEnter={() => animateTo(strings[Math.floor(Math.random() * strings.length)])}
						onMouseLeave={() => animateTo("insrt")}>
						&gt;{text}<span className={styles.blink}>_</span></h1>
				</div>
			</div>
		</Fragment>
	);
}

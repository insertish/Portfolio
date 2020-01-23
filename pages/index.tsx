import { NextPage } from 'next'

import styles from './index.scss';
import { global, Header, Footer } from '../components/global';

const Page: NextPage = () => (
	<main>
		<Header title="Paul Makles" />
		<div className={global.container}>
			this site is a work in progress<br/>
			<a href="/post/website-design">see design reference post</a>
		</div>
		<Footer />
	</main>
)

export default Page;
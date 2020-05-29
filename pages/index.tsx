import { NextPage } from 'next'

import styles from './index.scss';
import { global, Header, Footer } from '../components/global';

const Page: NextPage = () => (
	<main>
		<Header title="Paul Makles" />
		<div className={global.container}>
			I have migrated servers hence you're currently seeing the new beta website.<br/>
            More stuff to appear soon ™️<br/>
			<br/>
			<a href="/post/website-design">See the website's design reference post.</a>
		</div>
		<Footer />
	</main>
)

export default Page;
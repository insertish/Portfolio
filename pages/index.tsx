import { NextPage } from 'next'

import styles from './index.scss';
import { global, Header, Footer } from '../components/global';

const Page: NextPage = () => (
	<main>
		<Header title="Paul Makles" />
		<div className={global.container}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit a explicabo obcaecati veritatis rem possimus excepturi similique iusto aliquam mollitia cum illum dolor deleniti non quia, quisquam minus natus. <br/><br/>
			I have migrated servers hence you're currently seeing the new beta website.<br/>
            More stuff to appear soon ™️<br/>
			<a href="/post/website-design">See the website's design reference post.</a>
            <br/>
            <h3>Contact Me</h3>
            Message me on Discord: <code>insert#0751</code><br/>
            Or email me: <a href="mailto:me@insrt.uk">me@insrt.uk</a>.
			<br/>
		</div>
		<Footer />
	</main>
)

export default Page;
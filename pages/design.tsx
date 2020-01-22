import { NextPage } from 'next'

import { global, Header } from '../components/global';

const Page: NextPage = () => (
	<main>
		<Header title="design" />
		<div className={global.container}>
			webiste title idk
			<br/><br/><br/>

			<p className={global.overline}>this is an overline &middot; 22nd January 2020</p>
			<h1>doing cool things with <em>css</em> adn yes</h1>
			<p>this is a paragraph of text </p>
		</div>
	</main>
)

export default Page;
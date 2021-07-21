import { Page } from '../components/Page';
import { Grid } from '../components/Grid';
import { Project } from '../components/Project';
import { Overline } from '../components/Overline';
import { Container } from '../components/Container';

import Head from 'next/head';
import { find_entries } from '../util/loader';
import { Project as ProjectI } from '../types/Project';

interface Props {
	projects: ProjectI[]
}

export default function Commission(props: Props) {
	return (
		<Page
			page="donate"
			title="Donations"
		>
			<Head>
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Support my work and what I do." />
			</Head>
			<Container>
				<p>
					If you want to support the open source work I do then feel free to donate through any of the following:<br/>
				</p>
				<Overline>how</Overline>
				<p>
					Most of my donations come in through Ko-fi where you can also leave a public message but I can also accept <a href="https://paypal.me/paulmakles?locale.x=en_GB">directly through PayPal here</a>.
				</p>
				<a href='https://ko-fi.com/W7W5404ZW' target='_blank'><img height='36' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' alt='Buy Me a Coffee at ko-fi.com' /></a>
				<p>
					thank you! <img src="https://static.revolt.chat/emoji/mutant/1f603.svg" style={{ height: '1.4em', verticalAlign: 'bottom' }} />
				</p>
				<i>
					<small>Note: If you're donating to a specific project, be sure to let me know.</small>
				</i>
				<Overline>crypto</Overline>
				<p>
					You can send me crypto directly to my Coinbase wallet at <code>paulmakles@gmail.com</code> or you can ask me for a crypto address personally.
				</p>
				<Overline>referrals</Overline>
				<ul>
					<li><a href="https://m.do.co/c/9ac0bfb62833">100$ Digital Ocean credit</a></li>
					<li><a href="https://www.coinbase.com/join/pmakles">Create a Coinbase account</a></li>
					<li><a href="https://www.binance.com/en/register?ref=123323409">Create a Binance account</a></li>
				</ul>
			</Container>
		</Page>
	)
}

const PROJECTS = [ 'smp-website' ];
export async function getStaticProps() {
	return {
		props: {
			projects: (await find_entries('projects'))
				.filter(x => PROJECTS.includes(x.slug))
		}
	};
}

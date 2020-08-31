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
			page="commission"
			title="Commissions"
		>
			<Head>
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Paid work I've made for others." />
			</Head>
			<Container>
				<p>
					If you are interested in working with me feel free to message me using one of the methods on the front page.
				</p>
				<Overline>commissioned work</Overline>
				<Grid>
					{
						props.projects.map(x =>
							<Project key={x.slug} project={x} />
						)
					}
				</Grid>
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

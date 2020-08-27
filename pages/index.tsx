import { Page } from '../components/Page';
import { Grid } from '../components/Grid';
import { Post } from '../components/Post';
import { Project } from '../components/Project';
import { Overline } from '../components/Overline';
import { Container } from '../components/Container';

import Head from 'next/head';
import { find_entries } from '../util/loader';
import { Post as PostI } from '../types/Post';
import { Project as ProjectI } from '../types/Project';

interface Props {
	posts: PostI[],
	projects: ProjectI[]
}

export default function Home(props: Props) {
	return (
		<Page
			page="index"
			title="Paul Makles"
		>
			<Head>
				<meta property="og:type" content="website" />
			</Head>
			<Container>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima maxime, commodi hic natus, soluta amet ex facilis placeat blanditiis id quaerat modi porro. Doloremque, dolorum unde! Fugiat, dignissimos ipsum.
				</p>
				<Overline>contact me</Overline>
				<p>
					<ul>
						<li>Message me on Discord: <code>insert#0751</code></li>
						<li>Email me at <a href="mailto:me@insrt.uk">me@insrt.uk</a></li>
					</ul>
				</p>
				<Overline>recent posts</Overline>
				{
					props.posts.map(x =>
						<Post key={x.slug} {...x} />
					)
				}
				<Overline>recent work</Overline>
				<Grid>
					{
						props.projects.map(x =>
							<Project key={x.slug} id={x.slug} />
						)
					}
					<Project />
				</Grid>
			</Container>
		</Page>
	)
}

export async function getStaticProps() {
	return {
		props: {
			posts: (await find_entries('posts'))
				.slice(0, 3),
			projects: (await find_entries('projects'))
				.filter(x => !x.hidden)
				.slice(0, 5)
		}
	};
}

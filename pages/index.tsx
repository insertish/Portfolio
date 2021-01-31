import { Page } from '../components/Page';
import { Grid } from '../components/Grid';
import { Post } from '../components/Post';
import { Project } from '../components/Project';
import { Overline } from '../components/Overline';
import { Container } from '../components/Container';

import Head from 'next/head';
import Link from 'next/link';
import { Extra } from '../components/Extra';
import { Post as PostI } from '../types/Post';
import { find_entries } from '../util/loader';
import { Project as ProjectI } from '../types/Project';
import { Discord } from '@styled-icons/fa-brands/Discord';
import { Envelope } from '@styled-icons/boxicons-regular';
import { Matrix } from '@styled-icons/simple-icons';

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
				<meta property="og:description" content="Software developer. This is my personal portfolio as well as somewhere where I can collect my thoughts and ideas." />
			</Head>
			<Container>
				<p>
					Hi, welcome to my personal site, this is a sort of portfolio and place for me to collect all my work, take a look for yourself.
				</p>
				<Overline>contact me</Overline>
				<ul>
					<li><Discord size={24} /> insert#0751</li>
					<li><Envelope size={24} /> <a href="mailto:me@insrt.uk">me@insrt.uk</a></li>
					<li><Matrix size={24} /> <a target="_blank" href="https://matrix.to/#/@paul:insrt.uk">@paul:insrt.uk</a></li>
					<li><Matrix size={24} /> <a target="_blank" href="https://matrix.to/#/@insert:clustor.net">@insert:clustor.net</a></li>
				</ul>
				<Overline>recent posts</Overline>
				{
					props.posts.map(x =>
						<Post key={x.slug} {...x} />
					)
				}
				<Extra>
					<Link href="/posts">
						<a>
							View all posts.
						</a>
					</Link>
				</Extra>
				<Overline description="also check out the featured projects!">recent work</Overline>
				<Grid>
					{
						props.projects.map(x =>
							<Project key={x.slug} project={x} />
						)
					}
					<Project project={{}} />
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

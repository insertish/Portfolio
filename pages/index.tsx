import { Page } from '../components/Page';
import { Grid } from '../components/Grid';
import { Post } from '../components/Post';
import { Project } from '../components/Project';
import { Overline } from '../components/Overline';
import { Container } from '../components/Container';

import matter from 'gray-matter';
import { Post as PostI } from '../types/Post';
import { readFile, readdir } from 'fs/promises';

interface Props {
	posts: PostI[]
}

export default function Home(props: Props) {
	return (
		<Page
			page="index"
			title="Paul Makles"
		>
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
				<Overline>recent projects</Overline>
				<Grid>
					<Project id="revolt" />
					<Project id="teamsy" />
					<Project id="smp-website" />
					<Project id="plottie" />
					<Project id="byol" />
					<div>
						View more...
					</div>
				</Grid>
			</Container>
		</Page>
	)
}

export async function getStaticProps() {
	const list = await readdir('posts');
	const posts = [];

	for (let file of list) {
		let data = await readFile(`posts/${file}`);
		let meta = matter(data.toString());
		posts.push({
			...meta.data,
			timestamp: + new Date(meta.data.published)
		});
	}

	posts.sort((a, b) => b.timestamp - a.timestamp);

	return {
		props: {
			posts: posts.slice(0, 3)
		}
	};
}

import { Page } from '../components/Page';
import { Post } from '../components/Post';
import { Container } from '../components/Container';

import Head from 'next/head';
import { Post as PostI } from '../types/Post';
import { find_entries } from '../util/loader';

interface Props {
	posts: PostI[]
}

export default function Posts(props: Props) {
	return (
		<Page
			page="posts"
			title="Posts"
		>
			<Head>
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Thought and ideas. Includes my guides, write-ups, tutorials, etc." />
			</Head>
			<Container>
				<p>
					Sometimes I write stuff down, it ends up here.
				</p>
				<br />
				{
					props.posts.map(x =>
						<Post key={x.slug} {...x} />
					)
				}
			</Container>
		</Page>
	)
}

export async function getStaticProps() {
	return {
		props: {
			posts: await find_entries('posts')
		}
	};
}

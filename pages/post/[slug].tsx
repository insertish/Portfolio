import { NextPage } from 'next'
import Error from 'next/error'

import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

interface PostProps {
	data: {
		title: string,
		slug: string,
	},
	content: string,

	exists: boolean,
	children?: ReactChild,
}

const Page: NextPage = (props: PostProps) => {
	if (!props.exists)
		return <Error statusCode={404} />

	let { title, slug } = props.data;

	return (
		<main>
			<head>
				<title>{title} – insrt.uk</title>
			</head>
			<body>
				<ReactMarkdown source={props.content} />
			</body>
		</main>
	)
}

import { readFileSync, existsSync } from 'fs';
import { ReactChild } from 'react'

Page.getInitialProps = async context => {
	const { slug } = context.query;
	const fn = `posts/${slug}.md`;

	if (!existsSync(fn)) {
		return {
			exists: false,
		}
	}

	const content = readFileSync(fn).toString();
	const data = matter(content);

	return {
		exists: true,
		...data,
	}
}

export default Page;
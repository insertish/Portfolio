import { NextPage, NextComponentType } from 'next'
import Error from 'next/error'

import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import ReactUtterences from 'react-utterances'

import { global, Header } from '../../components/global';

interface PostProps {
	data: {
		slug: string,
		title: string,
		overline: string,
		published: string,
		hero?: string,
	},
	content: string,

	exists: boolean,
	children?: ReactChild,
}

const Page: NextPage = (props: PostProps) => {
	if (!props.exists)
		return <Error statusCode={404} />

	let { slug, title, overline, published, hero } = props.data;

	return (
		<main>
			<Header title={title} />
			<div className={global.container}>
				<p className={global.overline}>{overline} &middot; {published}</p>
				{ hero && <img src={hero} /> }
				<ReactMarkdown escapeHtml={false} skipHtml={false} source={props.content} />
				
				{/*<ReactUtterences repo="insertish/comments" type="pathname" />*/}
			</div>
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
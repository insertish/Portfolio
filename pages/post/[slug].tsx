import { NextPage, NextComponentType } from 'next'
import Error from 'next/error'

import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import ReactUtterences from 'react-utterances'

import { global, Header, Footer } from '../../components/global';

interface PostProps {
	data: {
		slug: string,
		title: string,
		overline: string,
		published: string,
		hero?: string,
		'hero-wide'?: string,
	},
	content: string,

	exists: boolean,
	children?: ReactChild,
}

const Page: NextPage = (props: PostProps) => {
	if (!props.exists)
		return <Error statusCode={404} />

	let { slug, title, overline, published, hero } = props.data;
	let heroWide = props.data['hero-wide'];

	useEffect(() => {
		// load prettifier
		const classInjector = document.createElement('script');
		classInjector.innerHTML = `Array.from(document.querySelectorAll('code')).forEach(x => x.parentNode.tagName === 'PRE' && (x.setAttribute('source', x.innerHTML) || x.parentNode.classList.add('prettyprint')))`;
		document.body.appendChild(classInjector);

		const styleInjector = document.createElement('script');
		styleInjector.src = 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js';
		styleInjector.async = true;
		document.body.appendChild(styleInjector);
	}, []);

	return (
		<main>
			<Header title={title} />
			<div className={global.container}>
				<p className={global.overline}>{overline} &middot; {published}</p>
				{ hero && <img src={hero} /> }
			</div>
			{ heroWide && <div style={{ backgroundImage: `url('${heroWide}')` }} className={global.hero}></div> }
			<div className={global.container}>
				<ReactMarkdown className={global.md} escapeHtml={false} skipHtml={false} source={props.content} />
				<hr/>
				{<ReactUtterences repo="insertish/comments" type="pathname" />}
			</div>
			<Footer />
			<link href="https://jmblog.github.io/color-themes-for-google-code-prettify/themes/atelier-cave-dark.min.css" rel="stylesheet" type="text/css" />
		</main>
	)
}

import { readFileSync, existsSync } from 'fs';
import { ReactChild, useEffect } from 'react'

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
import { Page } from '../../components/Page';
import { Container } from '../../components/Container';

import styles from './[slug].module.scss';

import dayjs from 'dayjs';
import matter from 'gray-matter';
import ReactUtterences from 'react-utterances'
import { readFile, readdir } from 'fs/promises';
import { Post as PostI } from '../../types/Post';
import { Markdown } from '../../components/Markdown';
import { parse_entry } from '../../util/loader';
import { Extra } from '../../components/Extra';
import Head from 'next/head';

interface Props {
    meta: PostI,
    content: string
}

export default function Post({ meta, content }: Props) {
	return (
		<Page
			page="posts"
			title={meta.title}
		>
            <Head>
				<meta property="og:type" content="article" />
                <meta property="og:description" content={ meta.description } />
                <meta property="og:article:published_time" content={ meta.published } />
                { meta.updated && <meta property="og:article:modified_time" content={ meta.updated } /> }
                <meta property="og:article:author" content="Paul Makles" />
                <meta property="og:article:tag" content={ meta.tags } />
            </Head>
            <Container>
                <h1 className={styles.title}>{meta.title}</h1>
                <p className={styles.overline}>
                    { meta.description } { meta.description && <span> &middot; </span> }
                    <time>{ dayjs(meta.timestamp).format('Do MMMM YYYY') }</time>
                </p>
            </Container>
            { meta.cover && <div style={{ backgroundImage: `url('${meta.cover}')` }} className={styles.cover}></div> }
			<Container>
                <Markdown content={content} />
                { meta.tags && <Extra style="mini">Tags: { meta.tags }</Extra> }
                <ReactUtterences repo="insertish/comments" type="pathname" />
            </Container>
		</Page>
	)
}

export async function getStaticProps(context) {
    let { slug } = context.params;
    let content = await readFile(`posts/${slug}.md`);

    return {
        props: parse_entry(content.toString())
    }
}

export async function getStaticPaths() {
    let posts = await readdir('posts');

    return {
        paths: posts
            .map(x => x.replace(/\.md/g, ''))
            .map(slug => {
                return {
                    params: {
                        slug
                    }
                }
            }),
        fallback: false
    };
}  

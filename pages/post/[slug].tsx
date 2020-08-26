import { Page } from '../../components/Page';
import { Container } from '../../components/Container';

import styles from './[slug].module.scss';

import dayjs from 'dayjs';
import matter from 'gray-matter';
import ReactUtterences from 'react-utterances'
import { readFile, readdir } from 'fs/promises';
import { Post as PostI } from '../../types/Post';
import { Markdown } from '../../components/Markdown';

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
            <Container>
                <h1>{meta.title}</h1>
                <p className={styles.overline}>
                    { meta.description } { meta.description && <span> &middot; </span> }
                    <time>{ dayjs(meta.published).format('Do MMMM YYYY') }</time>
                </p>
            </Container>
            { meta.cover && <div style={{ backgroundImage: `url('${meta.cover}')` }} className={styles.cover}></div> }
			<Container>
                <Markdown content={content} />
                <ReactUtterences repo="insertish/comments" type="pathname" />
            </Container>
		</Page>
	)
}

export async function getStaticProps(context) {
    let { slug } = context.params;
    
    let content = await readFile(`posts/${slug}.md`);
    let data = matter(content);

    return {
        props: {
            meta: data.data,
            content: data.content
        }
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

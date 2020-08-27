import { Page } from '../../components/Page';
import { Overline } from '../../components/Overline';
import { Markdown } from '../../components/Markdown';
import { Container } from '../../components/Container';

import styles from './[slug].module.scss';

import dayjs from 'dayjs';
import Head from 'next/head';
import ReactUtterences from 'react-utterances'
import { readFile, readdir } from 'fs/promises';
import { parse_entry } from '../../util/loader';
import { TechnologyBadge } from '../../components/Badge';
import { Project as ProjectI } from '../../types/Project';

interface Props {
    meta: ProjectI,
    content: string
}

export default function Project({ meta, content }: Props) {
	return (
		<Page
			page="projects"
			title={meta.name}
		>
            <Head>
                <meta property="og:image" content={`https://insrt.uk/projects/${meta.slug}.png`} />
                <meta property="og:description" content={meta.description} />
            </Head>
            <Container>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h1>{meta.name}</h1>
                        <p className={styles.overline}>
                            { meta.description }
                        </p>
                    </div>
                    <img src={`/projects/${meta.slug}.png`} />
                </div>
                <ul className={styles.list}>
                    <li>Started <time>{ dayjs(meta.started).format('Do MMMM YYYY') }</time></li>
                    { meta.updated && <li>Last updated <time>{ dayjs(meta.updated).format('Do MMMM YYYY') }</time></li> }
                    <li>Languages: { meta.languages.split(',').map(x => <TechnologyBadge tech={x} />) }</li>
                    <li>Tags: { meta.tags.split(',').map(x => <TechnologyBadge tech={x} />) }</li>
                    <li>Type: { meta.type.split(',').map(x => <TechnologyBadge tech={x} />) }</li>
                    { meta.homepage && <li>View homepage: <a href={meta.homepage} target="_blank">{meta.homepage}</a></li> }
                    { meta.repository && <li>View repository: <a href={meta.homepage} target="_blank">{meta.repository}</a></li> }
                    { meta.library && <li>View library package: <a href={meta.homepage} target="_blank">{meta.library}</a></li> }
                </ul>
                { content.length > 0 && <Overline>Description</Overline> }
                <Markdown content={content} />
                <ReactUtterences repo="insertish/comments" type="pathname" />
            </Container>
		</Page>
	)
}

export async function getStaticProps(context) {
    let { slug } = context.params;
    let content = await readFile(`projects/${slug}.md`);

    return {
        props: parse_entry(content.toString())
    }
}

export async function getStaticPaths() {
    let projects = await readdir('projects');

    return {
        paths: projects
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

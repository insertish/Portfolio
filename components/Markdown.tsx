import marked from 'marked';
import hljs from 'highlight.js';
import styles from './Markdown.module.scss';

interface Props {
    content: string
}

marked.setOptions({
    highlight: (code, language) => {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    }
});

export function Markdown(props: Props) {
    return (
        <span className={styles.md} dangerouslySetInnerHTML={{ __html: marked(props.content) }}></span>
    );
}

import styled from "styled-components";
import { useHighlighter } from "../../lib/hljs";

export const TextBlock = styled.div`
    font-family: "Open Sans", sans-serif;

    pre code {
        border-radius: 6px;
        background: #fafafa;
    }
`;

export function RenderContent({ content }: { content: string }) {
    useHighlighter("#content pre > code", "bash");

    return (
        <TextBlock id="content" dangerouslySetInnerHTML={{ __html: content }} />
    );
}

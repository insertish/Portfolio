import styled from "styled-components";
import { useHighlighter } from "../../lib/hljs";
import { Container } from "../layout/Container";

export const TextBlock = styled(Container)`
    font-family: "Open Sans", sans-serif;

    pre code {
        // border: 1px solid #bbb;
        border-radius: 6px;
        background: #fafafa;
    }
`;

export function RenderContent({ content }: { content: string }) {
    useHighlighter("#content pre > code", "bash");

    return (
        <TextBlock
            id="content"
            verticalPadding="16px"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}

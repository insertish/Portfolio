import styled from "styled-components";

const Base = styled.h5`
    gap: 4px;
    display: flex;
    align-items: center;

    span {
        margin-top: -3px;
        display: inline-block;
    }
`;

export function Backtrack({ text, href }: { text: string; href: string }) {
    return (
        <a href={href}>
            <Base>
                <span>&#171;</span> {text}
            </Base>
        </a>
    );
}

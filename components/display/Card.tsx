import styled, { css } from "styled-components";

export const CardBase = styled.a<{ cover?: any }>`
    display: flex;
    overflow: hidden;
    border-radius: 6px;
    border: 1px solid #ddd;

    color: black;
    background: #eee;
    transition: 0.1s ease filter;

    &:hover {
        border: 1px solid transparent;
        color: ${(props) => (props.cover ? "white" : "black")};
        filter: brightness(0.85);
    }

    &:active {
        filter: brightness(0.75);
    }

    ${(props) =>
        props.cover &&
        css`
            color: white;
            background-size: cover !important;
            background-position: center !important;
        `}
`;

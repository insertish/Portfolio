import styled, { css } from "styled-components";

export const CardBase = styled.a<{ cover?: any }>`
    border: none;
    display: flex;
    overflow: hidden;
    border-radius: 6px;

    color: black;
    background: #eee;
    transition: 0.1s ease filter;

    &:hover {
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

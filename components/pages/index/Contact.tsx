import styled from "styled-components";
import { CardBase } from "../../display/Card";

export const Contact = styled(CardBase)<{
    bg?: string;
    fg?: string;
}>`
    cursor: pointer;

    gap: 8px;
    padding: 0.5em;
    font-size: 1.4em;
    font-weight: 900;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.fg};
    background-color: ${(props) => props.bg};

    &:hover,
    &:active {
        color: ${(props) => props.fg};
    }
`;

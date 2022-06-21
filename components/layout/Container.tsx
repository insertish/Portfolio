import styled from "styled-components";

interface Props {
    verticalPadding?: string;
}

export const Container = styled.div<Props>`
    padding: ${(props) => props.verticalPadding ?? "0px"} 16px;
    max-width: min(1200px, 95%);
    width: min(1200px, 95%);
    flex-grow: 1;
    margin: auto;
`;

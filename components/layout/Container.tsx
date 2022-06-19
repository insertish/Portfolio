import styled from "styled-components";

interface Props {
    verticalPadding?: string;
}

export const Container = styled.div<Props>`
    padding: ${(props) => props.verticalPadding ?? "0px"} 16px;
    max-width: min(1080px, 95%);
    margin: auto;
`;

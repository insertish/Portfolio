import styled from "styled-components";
import { Container } from "../../layout/Container";

//background: ${(props) => props.bg};
// background: linear-gradient(to right, ${(props) => props.bg}, transparent),

export const Hero = styled.div<{
    fg: string;
    bg: string;
}>`
    height: 420px;
    color: ${(props) => props.fg};
    background: ${(props) => props.bg};

    display: flex;
    justify-content: stretch;
`;

export const HeroLayout = styled(Container)<{
    bg: string;
    cover: string;
    coverBg: string;
}>`
    height: 100%;

    background: linear-gradient(
            100deg,
            ${(props) => props.bg} 0%,
            ${(props) => props.bg} 40%,
            rgba(255, 0, 0, 0) 90%
        ),
        url("${(props) => props.cover}"), ${(props) => props.coverBg};

    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
`;

/**
 * Had to do some trolling to account for 4k resolution displays.
 * Realised that the background image was just stuck on the right
 * outside of the content when I went into fullscreen.
 */
export const HeroHack = styled.div<{
    bg: string;
}>`
    flex-grow: 1;
    background: ${(props) => props.bg};
`;

export const HeroContent = styled.div`
    height: 100%;
    padding: 2em 0;
    max-width: 360px;

    display: flex;
    flex-direction: column;

    h1 {
        margin: 0;
    }

    p {
        flex-grow: 1;
        font-size: 2em;
    }

    a {
        border: none;
        padding: 0.8em;
        width: fit-content;
        border-radius: 12px;

        font-weight: 900;
        font-size: 1.2em;

        gap: 8px;
        display: flex;
        align-items: center;

        &:hover {
            color: #ddd;
        }

        &:active {
            color: #bbb;
        }
    }
`;

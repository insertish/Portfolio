import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import styled, { css } from "styled-components";
import { Container } from "../layout/Container";
import Title from "./Title";

const Base = styled.div`
    display: flex;
    margin: 32px 0;
    align-items: center;

    a {
        border: none;
    }
`;

const Actions = styled.div`
    gap: 12px;
    display: flex;
`;

const Action = styled.div<{ active: boolean }>`
    color: gray;
    font-size: 1.2em;
    font-weight: 800;

    transition: 0.1s ease color;

    a:hover {
        color: #222;
    }

    a:active {
        color: #444;
    }

    ${(props) =>
        props.active &&
        css`
            color: black;
        `}
`;

export default function Navbar() {
    const router = useRouter();
    const matches = useCallback(
        (path: string) => {
            return router.pathname.startsWith(path);
        },
        [router.pathname],
    );

    return (
        <Container>
            <Base>
                <Title />
                <Actions>
                    <Action active={matches("/project")}>
                        <Link href="/projects">Projects</Link>
                    </Action>
                    <Action active={matches("/post")}>
                        <Link href="/posts">Posts</Link>
                    </Action>
                    <Action active={matches("/homelab")}>
                        <Link href="/homelab">Homelab</Link>
                    </Action>
                </Actions>
            </Base>
        </Container>
    );
}

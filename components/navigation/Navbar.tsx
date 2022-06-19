import Link from "next/link";
import styled from "styled-components";
import { Container } from "../layout/Container";
import Title from "./Title";

const Base = styled.div`
    display: flex;
    padding-top: 16px;
    align-items: center;

    a {
        border: none;
    }
`;

export default function Navbar() {
    return (
        <Container>
            <Base>
                <Title />
                <div>
                    <Link href="/posts">Posts</Link>
                </div>
            </Base>
        </Container>
    );
}

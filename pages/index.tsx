import type { NextPage } from "next";
import Head from "next/head";
import styled, { css } from "styled-components";
import { Container } from "../components/layout/Container";
import dayjs from "dayjs";
import { ChevronRight } from "@styled-icons/entypo";
import {
    Hero,
    HeroContent,
    HeroHack,
    HeroLayout,
} from "../components/pages/index/Hero";
import Contacts from "../components/pages/index/Contacts";
import Link from "next/link";

const Tagline = styled.h2<{ top?: boolean; bottom?: boolean }>`
    ${(props) =>
        props.top &&
        css`
            margin-bottom: 8px;
        `}

    ${(props) =>
        props.bottom &&
        css`
            margin-top: 8px;
        `}
`;

const Whitespace = styled.div`
    height: 4em;
`;

const About = styled.p`
    font-family: "Open Sans", sans-serif;
`;

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Paul Makles – insrt.uk</title>
                <meta property="og:title" content="Hej!" />
                <meta
                    property="og:description"
                    content={`${dayjs().diff(
                        1047081600000,
                        "y",
                    )} year old student living in the UK.\nI build real-time applications that let people connect together.`}
                />
            </Head>

            <Container>
                <h1>
                    Hej!{" "}
                    <img
                        src="https://static.revolt.chat/emoji/mutant/1f44b-10160a.svg"
                        style={{ height: "1.2em", verticalAlign: "top" }}
                        alt="Wave"
                    />
                </h1>
                <Tagline top>
                    {`I'm a ${dayjs().diff(
                        1047081600000,
                        "y",
                    )} year old student living in the UK,`}
                </Tagline>
                <Tagline bottom>
                    {
                        "I build real-time applications that let people connect together."
                    }
                </Tagline>

                <Contacts />

                <Whitespace />

                <h1>My Work</h1>
            </Container>
            <Hero fg="white" bg="#1E1E1E">
                <HeroHack bg="#101823" />
                <HeroLayout
                    bg="#101823"
                    cover="/uploads/revolt_ui_b9a6fc1cb8.png"
                    coverBg="#191919">
                    <HeroContent>
                        <h1>Revolt</h1>
                        <p>Open source user-first chat platform.</p>
                        <Link href="/project/revolt">
                            <a>
                                View <ChevronRight size={32} />
                            </a>
                        </Link>
                    </HeroContent>
                </HeroLayout>
                <HeroHack bg="#1E1E1E" />
            </Hero>
            {/* Project is inactive, uncomment if it gets revived: */}
            {/* <Hero fg="white" bg="rgb(17, 19, 31)">
                <HeroHack bg="rgb(116, 69, 217)" />
                <HeroLayout
                    bg="rgb(116, 69, 217)"
                    cover="/uploads/lightspeed_stream_775ef4b830.png"
                    coverBg="rgb(20, 22, 35)">
                    <HeroContent>
                        <h1>Lightspeed.tv</h1>
                        <p>
                            Streaming platform built for creators and their
                            communities.
                        </p>
                        <Link href="/project/lightspeed">
                            <a>
                                View <ChevronRight size={32} />
                            </a>
                        </Link>
                    </HeroContent>
                </HeroLayout>
                <HeroHack bg="#11131f" />
            </Hero> */}
            <Container>
                <Whitespace />

                <h1>About Me</h1>
                <About>{"Software developer from the UK."}</About>
                <About>
                    {"Programming since around 9 years old, circa 2012."}
                </About>
                <About>
                    {
                        "Currently doing an integrated masters course at King's College London."
                    }
                </About>
            </Container>
        </>
    );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import styled, { css } from "styled-components";
import { Container } from "../components/layout/Container";
import dayjs from "dayjs";
import { ChevronRight, Mail } from "@styled-icons/entypo";
import {
    Hero,
    HeroContent,
    HeroHack,
    HeroLayout,
} from "../components/pages/index/Hero";
import Contacts from "../components/pages/index/Contacts";

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
            </Head>

            <Container>
                <h1>
                    Hej!{" "}
                    <img
                        src="https://static.revolt.chat/emoji/mutant/1f44b-10160a.svg"
                        style={{ height: "1.2em", verticalAlign: "top" }}
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
                        <a href="/project/revolt">
                            View <ChevronRight size={32} />
                        </a>
                    </HeroContent>
                </HeroLayout>
                <HeroHack bg="#1E1E1E" />
            </Hero>
            <Hero fg="white" bg="rgb(17, 19, 31)">
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
                        <a href="/project/lightspeed">
                            View <ChevronRight size={32} />
                        </a>
                    </HeroContent>
                </HeroLayout>
                <HeroHack bg="#11131f" />
            </Hero>
            <Container>
                <Whitespace />

                <h1>About Me</h1>
                <About>
                    {
                        "I'm a software developer originating from Poland but I've lived most of my life in the United Kingdom. I've been programming since around 9 years old, circa 2012. I didn't really make anything of note if anything at all, but over the years this has given me the chance to try working on a bunch of different things ranging from low-level operating systems to making games to high-level website development."
                    }
                </About>
                <About>
                    {
                        "Obviously that's my main line of work, but I do both more physical and more creative stuff from time to time, for example, I have an interest in tinkering with electronics but I also like to draw."
                    }
                </About>
                <About>
                    {
                        "My current main focus right now is Revolt but I do also work on Lightspeed with a bunch of people and have a host of my own personal projects that I'm still getting ready to show."
                    }
                </About>
            </Container>
        </>
    );
};

export default Home;

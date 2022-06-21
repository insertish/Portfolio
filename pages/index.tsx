import type { NextPage } from "next";
import Head from "next/head";
import styled, { css } from "styled-components";
import { Container } from "../components/layout/Container";
import dayjs from "dayjs";
import { Contact } from "../components/pages/index/Contact";
import Image from "next/image";
import { ChevronRight, Mail } from "@styled-icons/entypo";
import {
    Hero,
    HeroContent,
    HeroHack,
    HeroLayout,
} from "../components/pages/index/Hero";

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

const ContactDetails = styled.div`
    margin: 4em 0;
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const Whitespace = styled.div`
    height: 4em;
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

                <ContactDetails>
                    <Contact fg="#ff4654" bg="#101823">
                        <Image
                            width="24px"
                            height="24px"
                            src="/revolt.svg"
                            alt="Revolt Chat"
                        />
                        Revolt
                    </Contact>
                    <Contact fg="white" bg="#7289DA">
                        <Image
                            width="24px"
                            height="24px"
                            src="/discord.svg"
                            alt="Discord App"
                        />
                        Discord
                    </Contact>
                    <Contact fg="white" bg="#171515">
                        <Image
                            width="24px"
                            height="24px"
                            src="/github.svg"
                            alt="GitHub"
                        />
                        GitHub
                    </Contact>
                    <Contact bg="#ddd">
                        <Mail size={24} /> Email
                    </Contact>
                </ContactDetails>

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
        </>
    );
};

export default Home;

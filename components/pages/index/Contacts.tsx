import { Mail } from "@styled-icons/entypo";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { getEmail } from "../../../lib/email";
import { Contact } from "./Contact";

const ContactDetails = styled.div`
    margin: 4em 0;
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

    a {
        border: none;
    }
`;

export default function Contacts() {
    const [email, setEmail] = useState("enable javascript to see email");

    if (typeof window !== "undefined") {
        // eslint-disable-next-line
        useLayoutEffect(() => setEmail(getEmail("domain")), []);
    }

    return (
        <ContactDetails>
            <a
                href="https://rvlt.gg/Testers"
                target="_blank"
                rel="noreferrer"
                aria-label="@insert#6271"
                data-balloon-pos="up">
                <Contact fg="#ff4654" bg="#101823">
                    <Image
                        width="24px"
                        height="24px"
                        src="/revolt.svg"
                        alt="Revolt Chat"
                    />
                    Revolt
                </Contact>
            </a>
            <a
                href="https://discord.com/users/99765584266264576"
                target="_blank"
                rel="noreferrer"
                aria-label="insert#0751"
                data-balloon-pos="up">
                <Contact fg="white" bg="#7289DA">
                    <Image
                        width="24px"
                        height="24px"
                        src="/discord.svg"
                        alt="Discord App"
                    />
                    Discord
                </Contact>
            </a>
            <a
                href="https://github.com/insertish"
                target="_blank"
                rel="noreferrer"
                aria-label="@insertish"
                data-balloon-pos="up">
                <Contact fg="white" bg="#171515">
                    <Image
                        width="24px"
                        height="24px"
                        src="/github.svg"
                        alt="GitHub"
                    />
                    GitHub
                </Contact>
            </a>
            <a
                href={`mailto:${email}`}
                aria-label={email}
                data-balloon-pos="up">
                <Contact bg="#ddd">
                    <Mail size={24} /> Email
                </Contact>
            </a>
        </ContactDetails>
    );
}

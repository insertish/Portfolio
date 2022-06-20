import Link from "next/link";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
    50% {
		opacity: 0;
	}
`;

const Blink = styled.span`
    animation: ${blink} 1.3s cubic-bezier(0.65, 0.16, 0.92, -0.35) infinite;
`;

const Home = styled.span`
    font-size: 0.85em;
    padding-right: 0.2em;
`;

const Base = styled.h1`
    margin: 0;
    flex-grow: 1;
    font-size: 2.4em;
    font-weight: 700;

    a {
        display: flex;
        align-items: center;
        flex-direction: row;
    }
`;

const intervals: number[] = [];
const strings = [
    "sl",
    "neofetch",
    "cargo run",
    "yarn build",
    "pacman -Syu",
    "rm -rf /boot",
    "yay -Rdd linux",
    "dd if=/dev/zero",
];

let pool = [...strings];
function pick() {
    if (pool.length === 0) {
        pool = [...strings];
    }

    let index = Math.floor(Math.random() * pool.length);
    return pool.splice(index, 1)[0];
}

export default function Title() {
    let [text, setText] = useState("insrt");

    function animateTo(string: string) {
        intervals.forEach((i) => clearInterval(i));

        let target = string.split("");
        let current = text;
        let clearing = true;
        let t = false;
        let i = setInterval(() => {
            if (clearing) {
                if (current.length > 0) {
                    current = current.substring(0, current.length - 2);
                    setText(current);
                } else {
                    clearing = false;
                }
            } else {
                t = !t;
                if (t) {
                    return;
                }

                if (target.length > 0) {
                    current += target.shift();
                    setText(current);
                } else {
                    clearInterval(i);
                }
            }
        }, 10);

        intervals.push(i as unknown as number);
    }

    return (
        <Base
            onMouseEnter={() => animateTo(pick())}
            onMouseLeave={() => animateTo("insrt")}>
            <Link href="/">
                <a>
                    <Home>~&gt;</Home>
                    {text}
                    <Blink>_</Blink>
                </a>
            </Link>
        </Base>
    );
}

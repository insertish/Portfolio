import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../components/layout/Container";

const Input = styled.input`
    width: 420px;
    padding: 4px;
    max-width: 100%;
    font-size: 1.2em;
    border-radius: 4px;
    border: 1px solid black;
`;

const Button = styled.button`
    padding: 4px;
    margin: 2px 0;
    display: block;
    font-size: 1.1em;
    border-radius: 4px;
    border: 1px solid black;

    transition: 0.1s ease filter;

    &:hover {
        filter: brightness(0.9);
    }

    &:active {
        filter: brightness(0.8);
    }
`;

const Admin: NextPage = () => {
    const [token, setToken] = useState("");
    const [output, setOutput] = useState<string[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("adm_token", token);
        }
    }, [token]);

    if (typeof window !== "undefined") {
        // eslint-disable-next-line
        useLayoutEffect(() => {
            let token = localStorage.getItem("adm_token");
            if (token) {
                setToken(token);
            }
        }, []);
    }

    async function run(
        action: "compute_timestamps" | "redeploy" | "update_gists",
    ) {
        const push = (result: string) =>
            setOutput((output) => [...output, `${action}: ${result}`]);

        try {
            const res = await fetch(`/api/automation/${action}`);
            push(await res.text());
        } catch (err) {
            push("" + err);
        }
    }

    return (
        <main>
            <Container>
                <Head>
                    <title>Admin Area</title>
                </Head>
                <h1>Admin Area</h1>
                <h5>Token</h5>
                <Input
                    value={token}
                    type="password"
                    onChange={(ev) => setToken(ev.currentTarget.value)}
                    placeholder="Enter token; this is saved to the browser"
                />
                <h5>Actions</h5>
                <Button onClick={() => run("compute_timestamps")}>
                    Compute Project Timestamps
                </Button>
                <Button onClick={() => run("update_gists")}>
                    Update Gists
                </Button>
                <Button onClick={() => run("redeploy")}>
                    Redeploy to Vercel
                </Button>
                <h5>Output</h5>
                Any command output will display below.
                <ul>
                    {output.map((text) => (
                        <li key={text}>{text}</li>
                    ))}
                </ul>
            </Container>
        </main>
    );
};

export default Admin;

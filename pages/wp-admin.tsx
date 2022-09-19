import type { NextPage } from "next";
import React from "react";
import { Container } from "../components/layout/Container";

const WordpressAdmin: NextPage = () => {
    return (
        <main>
            <Container>
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png"
                    style={{ margin: "10em auto", display: "block" }}
                />
            </Container>
        </main>
    );
};

export default WordpressAdmin;

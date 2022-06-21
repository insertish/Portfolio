import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import Link from "next/link";
import { Action, Actions, useMatches } from "./Navbar";

export default function Footer() {
    const matches = useMatches();

    return (
        <footer>
            <span>&copy; {dayjs().year()} Paul Makles</span>
            <span>Made in 🇬🇧 🇵🇱</span>
            <Actions>
                <Action active={matches("/project")}>
                    <Link href="/projects">Projects</Link>
                </Action>
                <Action active={matches("/post")}>
                    <Link href="/posts">Posts</Link>
                </Action>
                <Action active={matches("/donate")}>
                    <Link href="/donate">Donate</Link>
                </Action>
                <Action active={matches("/homelab")}>
                    <Link href="/homelab">Homelab</Link>
                </Action>
            </Actions>
        </footer>
    );
}

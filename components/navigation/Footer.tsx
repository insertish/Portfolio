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
            <span>🇪🇺 🇬🇧 🇵🇱</span>
            <Actions>
                <Action active={matches("/project")}>
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>
                </Action>
                <Action active={matches("/post")}>
                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>
                </Action>
                <Action active={matches("/donate")}>
                    <Link href="/donate">
                        <a>Donate</a>
                    </Link>
                </Action>
                <Action active={matches("/homelab")}>
                    <Link href="/homelab">
                        <a>Homelab</a>
                    </Link>
                </Action>
            </Actions>
        </footer>
    );
}

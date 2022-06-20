import styled, { css } from "styled-components";
import { getPath } from "../../../lib/graphql";
import { BlogPost } from "../../../lib/types";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Base = styled.a<{ cover?: string }>`
    border: none;
    height: 80px;
    display: flex;
    overflow: hidden;
    border-radius: 6px;

    color: black;
    background: #eee;
    transition: 0.1s ease filter;

    div {
        padding: 1em;
        flex-grow: 1;
    }

    div > h3 {
        margin: 0;
    }

    &:hover {
        color: ${(props) => (props.cover ? "white" : "black")};
        filter: brightness(0.85);
    }

    &:active {
        filter: brightness(0.75);
    }

    ${(props) =>
        props.cover &&
        css`
            color: white;
            background-size: cover;
            background-position: center;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url("${getPath(props.cover)}");
        `}
`;

/**
 * Blog post card
 */
export default function Card({ post }: { post: BlogPost }) {
    return (
        <Base href={`/post/${post.Slug}`} cover={post.Cover?.url}>
            <div>
                <h3>{post.Title}</h3>
                <span>
                    {dayjs(post.Date).fromNow()}{" "}
                    {post.Subtitle ? <> &middot; {post.Subtitle}</> : undefined}
                </span>
            </div>
        </Base>
    );
}

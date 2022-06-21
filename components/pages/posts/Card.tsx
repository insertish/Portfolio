import styled, { css } from "styled-components";
import { BlogPost } from "../../../lib/types";
import { CardBase } from "../../display/Card";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Base = styled(CardBase)<{ cover?: string }>`
    height: 80px;

    div {
        padding: 1em;
        flex-grow: 1;
    }

    div > h3 {
        margin: 0;
    }

    ${(props) =>
        props.cover &&
        css`
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url("${props.cover}");
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

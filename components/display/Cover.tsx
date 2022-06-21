import Image from "next/image";
import { getPath } from "../../lib/graphql";
import { Image as ImageType } from "../../lib/types";
import { Container } from "../layout/Container";

export default function Cover({ cover }: { cover?: ImageType }) {
    if (!cover) return null;

    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "420px",
                    position: "relative",
                    userSelect: "none",
                }}>
                <Image
                    src={getPath(cover.url)}
                    alt={cover.caption}
                    objectFit="cover"
                    layout="fill"
                />
            </div>
            <Container>
                <figcaption>{cover.caption}</figcaption>
            </Container>
        </>
    );
}

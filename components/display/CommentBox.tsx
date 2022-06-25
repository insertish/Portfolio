import Giscus from "@giscus/react";

export default function CommentBox() {
    return (
        <Giscus
            repo="insertish/Portfolio"
            repoId="R_kgDOHhiZHQ"
            category="Comments"
            categoryId="DIC_kwDOHhiZHc4CP39q"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="light"
            lang="en"
        />
    );
}

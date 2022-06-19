import hljs from "highlight.js";
import { useLayoutEffect } from "react";

const MAP_TO_PLAIN = ["gitignore", "dotenv"];

/**
 * Use highlight.js highlighting for a given query
 * @param query HTML query returning code blocks
 * @param forceLang Language to force code blocks to render with (if they are plaintext)
 */
export function useHighlighter(query: string, forceLang?: string) {
    if (typeof window !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useLayoutEffect(() => {
            const elements = document.querySelectorAll(query);
            if (forceLang) {
                elements.forEach((el) => {
                    if (el.classList.contains("language-plaintext")) {
                        el.classList.remove("language-plaintext");
                        el.classList.add("language-" + forceLang);
                    }

                    for (const entry of MAP_TO_PLAIN) {
                        const key = `language-${entry}`;
                        if (el.classList.contains(key)) {
                            el.classList.remove(key);
                            el.classList.add("language-plaintext");
                        }
                    }
                });
            }

            elements.forEach((el) => hljs.highlightElement(el as HTMLElement));
        }, [query, forceLang]);
    }
}

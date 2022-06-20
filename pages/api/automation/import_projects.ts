import type { NextApiRequest, NextApiResponse } from "next";
import { readdir, readFile } from "fs/promises";

// @ts-ignore
import fm from "frontmatter";

import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

function r(a: string) {
    let v = a.trim();
    if (v) {
        return md.render(v);
    } else {
        return "";
    }
}

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    return;

    const DIR = "/home/mink/Projects/Misc/old-portfolio/projects/";
    let files = await readdir(DIR);

    for (const file of files) {
        const f = await readFile(DIR + file);
        const { data, content } = fm(f.toString() + "\n");

        const {
            slug,
            started,
            updated,
            featured,
            hidden,
            name,
            description,
            banner,
            tags,
            cover,
            languages,
            type,
            homepage,
            repository,
            library,
            related,
        } = data;

        if (!(slug === "garfield-os" || slug === "smp-website")) continue;

        console.info(`Import ${slug}`);

        let s = {
            data: {
                Slug: "" + slug,
                Name: "" + name,
                Description: description,
                Started: started?.toISOString(),
                Updated: updated?.toISOString(),
                Featured: featured ?? false,
                Hidden: hidden ?? false,
                Tags: tags,
                Languages: languages,
                Type: type,
                Website: homepage,
                Repository: repository,
                Library: library,
                Content: r(content),
                Sync: false,
            },
        };

        // return res.status(200).send(s);

        fetch("https://strapi.insrt.uk/api/projects", {
            method: "POST",
            body: JSON.stringify(s),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.API_KEY}`,
            },
        })
            .then((x) => x.json())
            .then((x) => {
                if (x.data === null) {
                    console.error("Failed to import", slug);
                    console.error(x.error);
                }
            });
    }

    res.status(200).send("OK");
}

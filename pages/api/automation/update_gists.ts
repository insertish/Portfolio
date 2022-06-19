import type { NextApiRequest, NextApiResponse } from "next";

import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    const req = await fetch(
        "https://gist.githubusercontent.com/insertish/9cca9b6aa75a7cf34d050368d067ecf5/raw?bust=1",
    );

    const data = await req.text();

    fetch("https://strapi.insrt.uk/api/posts/6", {
        method: "PUT",
        body: JSON.stringify({
            data: {
                Content: md.render(data),
            },
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY}`,
        },
    });

    res.status(200).send("OK");
}

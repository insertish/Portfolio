import { writeFile } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import { listPosts, listProjects } from "../../../lib/graphql";

const template = (content: string) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${content}
</urlset>`;

type Url = {
    loc: string;
    lastmod: string;
};

const render = (urls: Url[]) =>
    template(
        urls
            .map(
                ({ loc, lastmod }) => `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
</url>`,
            )
            .join("\n"),
    );

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    if (process.env.NODE_ENV !== "development") {
        return res.status(500).send("Unauthorized");
    }

    const posts = await listPosts();
    const projects = (await listProjects()).projects;

    const urls: Url[] = [
        { loc: "https://insrt.uk/", lastmod: new Date().toISOString() },
        {
            loc: "https://insrt.uk/projects",
            lastmod: new Date(
                projects.find((x) => x.ComputedTimestamp)!.ComputedTimestamp!,
            ).toISOString(),
        },
        {
            loc: "https://insrt.uk/posts",
            lastmod: new Date(posts.find((x) => x.Date)!.Date!).toISOString(),
        },
        { loc: "https://insrt.uk/homelab", lastmod: new Date().toISOString() },
    ];

    for (const post of posts.filter((x) => x.Date)) {
        urls.push({
            loc: `https://insrt.uk/post/${post.Slug}`,
            lastmod: new Date(post.Date!).toISOString(),
        });
    }

    for (const project of projects.filter((x) => x.Featured)) {
        urls.push({
            loc: `https://insrt.uk/project/${project.Slug}`,
            lastmod: new Date(project.ComputedTimestamp!).toISOString(),
        });
    }

    await writeFile("./public/sitemap.xml", render(urls));
    res.status(200).send("OK");
}

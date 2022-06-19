// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPost, listPosts } from "../../lib/graphql";

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    const posts = await listPosts();
    const data = await getPost(posts[0].attributes.Slug);
    res.status(200).json(data);
}

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    if (req.headers["authorization"] !== process.env.ADMIN_TOKEN) {
        return res.status(500).send("Unauthorized");
    }

    await fetch(process.env.DEPLOY_HOOK as string);
    res.status(200).send("OK");
}

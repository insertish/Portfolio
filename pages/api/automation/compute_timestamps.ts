import type { NextApiRequest, NextApiResponse } from "next";

import qs from "qs";
import { getPath } from "../../../lib/graphql";
import { Project } from "../../../lib/types";

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    const query = qs.stringify(
        {
            pagination: {
                pageSize: 10_000,
            },
        },
        {
            encodeValuesOnly: true,
        },
    );

    fetch(getPath(`/api/projects?${query}`))
        .then((res) => res.json())
        .then(({ data }) => data)
        .then((projects) => {
            projects.forEach(
                ({
                    id,
                    attributes: { Started, Updated },
                }: {
                    attributes: Project;
                    id: string;
                }) => {
                    let ComputedTimestamp = new Date(
                        Updated ?? Started ?? +new Date(),
                    ).toISOString();

                    fetch("https://strapi.insrt.uk/api/projects/" + id, {
                        method: "PUT",
                        body: JSON.stringify({
                            data: {
                                ComputedTimestamp,
                            },
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${process.env.API_KEY}`,
                        },
                    })
                        .then((x) => x.json())
                        .then((x) => {
                            if (x.data === null) {
                                console.error("Failed to import", id);
                                console.error(x.error);
                            }
                        });
                },
            );
        });

    res.status(200).send("OK");
}

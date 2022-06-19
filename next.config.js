/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["strapi.insrt.uk"],
    },
    compiler: {
        styledComponents: true,
    },
    async rewrites() {
        return [
            {
                source: "/js/p.js",
                destination:
                    "https://plausible.insrt.uk/js/script.outbound-links.js",
            },
            {
                source: "/api/hello",
                destination: "https://plausible.insrt.uk/api/event",
            },
        ];
    },
};

module.exports = nextConfig;

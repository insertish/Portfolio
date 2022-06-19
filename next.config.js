/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["strapi.insrt.uk"],
    },
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;

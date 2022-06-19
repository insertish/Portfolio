const { withPlausibleProxy } = require("next-plausible");

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

module.exports = withPlausibleProxy({
    subdirectory: "hello",
    scriptName: "t",
    customDomain: "http://plausible.insrt.uk",
})(nextConfig);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    allowedDevOrigins: ["192.168.1.45"],

    async redirects() {
        return [
            // Old portfolio section -> new case-studies section
            {
                source: "/portfolio",
                destination: "/case-studies",
                permanent: true,
            },
            {
                source: "/portfolio/:slug",
                destination: "/case-studies/:slug",
                permanent: true,
            },
            // Old blogs section -> new blog section
            {
                source: "/blogs",
                destination: "/blog",
                permanent: true,
            },
            {
                source: "/blogs/:slug",
                destination: "/blog/:slug",
                permanent: true,
            },
        ];
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.showmelocal.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;

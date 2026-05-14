import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    allowedDevOrigins: ["192.168.1.37"],
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

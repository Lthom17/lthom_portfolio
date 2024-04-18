/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";


const nextConfig = {
    basePath: isProduction ? "/lthom_portfolio" : "",
    distDir: "dist",
    output: 'export',


};

export default nextConfig;

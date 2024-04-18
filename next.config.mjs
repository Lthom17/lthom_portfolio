/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const repo = 'lthom_portfolio'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


const nextConfig = {
    basePath: isProduction ? basePath : "",
    assetPrefix: assetPrefix,
    distDir: "dist",
    output: 'export',


};

export default nextConfig;

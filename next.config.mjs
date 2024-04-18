/** @type {import('next').NextConfig} */
// const isProduction = process.env.NODE_ENV;

const repo = 'lthom_portfolio'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


const nextConfig = {
    basePath: basePath,
    assetPrefix: assetPrefix,
    output: 'export',


};

export default nextConfig;

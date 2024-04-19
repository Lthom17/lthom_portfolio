/** @type {import('next').NextConfig} */
// next.config.js

const isProd = process.env.NODE_ENV === "production";

let base = '';

if (isProd) {
    // trim off `<owner>/`
    const repo = 'lthom_portfolio'
    base = `/${repo}`;
}

const nextConfig = {
    basePath: base,
};

export default nextConfig;

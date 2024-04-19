/** @type {import('next').NextConfig} */
// next.config.js

const isDev = process.env.NODE_ENV === "development";

let base = '/lthom_portfolio';

if (isDev) {
    // trim off `<owner>/`
    base = '';
}

const nextConfig = {
    basePath: base,
};

export default nextConfig;

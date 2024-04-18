/** @type {import('next').NextConfig} */
// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false

let basePath = '';

if (isGithubActions) {
    // trim off `<owner>/`
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

    basePath = `/${repo}`;
}

const nextConfig = {
    basePath: basePath,
    assetPrefix: '/lthom_portfolio',
    output: 'export',
};

export default nextConfig;

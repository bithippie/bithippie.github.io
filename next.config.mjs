/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    // Linting runs via `npm run lint` (ESLint CLI); next's build-time lint is deprecated.
    eslint: { ignoreDuringBuilds: true }
};

export default nextConfig;

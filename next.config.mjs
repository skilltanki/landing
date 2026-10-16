/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // basePath is injected automatically by actions/configure-pages in CI.
  // For a local build under a sub-path: BASE_PATH=/repo-name npm run build
  basePath: process.env.BASE_PATH || '',
};
export default nextConfig;

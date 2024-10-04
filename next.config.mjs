/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/kbarcelo',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: 'build',
  trailingSlash: true,
};

export default nextConfig;

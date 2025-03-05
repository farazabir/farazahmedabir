/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/farazahmedabir",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

module.exports = nextConfig;

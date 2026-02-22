/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath removed for GitHub Pages user site (farazabir.github.io)
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

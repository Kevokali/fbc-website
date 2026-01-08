/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["images.unsplash.com"],
  },

  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;

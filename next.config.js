/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    ASSET_URL: process.env.ASSET_URL,
  },
  images: {
    domains: [
      "via.placeholder.com",
      "eventbrite.test",
      "playoffz.com",
      "api.playoffz.com",
      "test.banttech.com",
      "127.0.0.1",
    ],
  },
};

module.exports = nextConfig;

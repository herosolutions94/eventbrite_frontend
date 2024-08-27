/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    ASSET_URL: process.env.ASSET_URL,
  },
  images: {
    unoptimized:true,
    domains: [
      "via.placeholder.com",
      "eventbrite.test",
      "playoffz.com",
      "api.playoffz.com",
      "test.banttech.com",
      "127.0.0.1",
      "staging.rentaro.com.au"
    ],
  },
};

module.exports = nextConfig;

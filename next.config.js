/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    ASSET_URL: process.env.ASSET_URL
  },
}

module.exports = nextConfig

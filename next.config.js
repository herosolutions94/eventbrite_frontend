/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    ASSET_URL: process.env.ASSET_URL,
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    STRIPE_API_VERSION: process.env.STRIPE_API_VERSION,
  },
  images: {
    domains: ['via.placeholder.com','eventbrite.test'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images:{
    domains:['media.graphassets.com']
  }
}

module.exports = nextConfig

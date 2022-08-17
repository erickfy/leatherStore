/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  target: 'serverless',
  images: {
    domains: ['xcdn.next.co.uk']
  }
}

module.exports = nextConfig

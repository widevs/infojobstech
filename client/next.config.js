/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.infojobs.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.infojobs.net',
      },
    ],
  },
}

module.exports = nextConfig

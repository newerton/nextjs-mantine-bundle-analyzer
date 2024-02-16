const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)


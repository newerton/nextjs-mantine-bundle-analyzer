const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
})

// Create basePath for GitHub pages
const basePath = process.env.NODE_ENV !== 'development' ? '/nextjs-mantine-bundle-analyzer' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)


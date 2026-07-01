import withBundleAnalyzerInit from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const withBundleAnalyzer = withBundleAnalyzerInit({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,
  basePath: process.env.PAGES_BASE_PATH || '',
  assetPrefix: process.env.PAGES_BASE_PATH
    ? `${process.env.PAGES_BASE_PATH}/`
    : undefined,
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  turbopack: {},
};

export default withBundleAnalyzer(nextConfig);

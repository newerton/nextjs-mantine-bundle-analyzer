import type { NextConfig } from 'next';

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
  webpack(config, options) {
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      const extension = '.html';
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: !options.nextRuntime
            ? `./analyze/client${extension}`
            : `../${options.nextRuntime === 'nodejs' ? '../' : ''}analyze/${options.nextRuntime}${extension}`,
        }),
      );
    }
    return config;
  },
};

export default nextConfig;

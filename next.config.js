/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // REQUIRED for Netlify static export

  images: {
    unoptimized: true, // REQUIRED for <Image /> with export
  },

  eslint: {
    dirs: ['.'],
  },

  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);

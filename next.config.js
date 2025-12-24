/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  eslint: {
    dirs: ['.'],
  },

  poweredByHeader: false,

  // 🚫 REMOVE THIS for Netlify
  // trailingSlash: true,
};

module.exports = withBundleAnalyzer(nextConfig);

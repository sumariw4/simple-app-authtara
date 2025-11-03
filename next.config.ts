import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Simple App AuthTara',
  },

  // TypeScript config
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;

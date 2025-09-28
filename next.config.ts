import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // new URL('https://ibb.co/**'),
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '**'
      }
    ],
    localPatterns: [
      {
        pathname: '/api/image-proxy*'
      }
    ]
  },
};

export default nextConfig;

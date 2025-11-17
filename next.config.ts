import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "images.unsplash.com",
          },
          // Add more objects for other hostnames as needed
        ],
      },
  /* config options here */
};

export default nextConfig;

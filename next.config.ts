import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost:3000", 
    "127.0.0.1:3000",
    "10.234.24.116"
  ],
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Ảnh placeholder giai đoạn dựng khung — thay bằng CDN ảnh studio khi có.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;

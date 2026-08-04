/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;

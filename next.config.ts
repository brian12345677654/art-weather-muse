import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // 告訴 GitHub 這是靜態網站
  images: {
    unoptimized: true,     // 解決 GitHub 不支援圖片優化的問題
  },
  // 如果你的網址最後是 /art-weather-muse/，請取消下面這兩行的註解：
  // basePath: '/art-weather-muse',
  // assetPrefix: '/art-weather-muse',
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Retratos dos heróis servidos pelo CDN da Blizzard.
      { protocol: "https", hostname: "d15f34w2p8l1cc.cloudfront.net" },
      // Imagens estáticas hospedadas pela própria OverFast API.
      { protocol: "https", hostname: "overfast-api.tekrop.fr" },
    ],
  },
};

export default nextConfig;
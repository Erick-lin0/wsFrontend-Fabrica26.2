import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "d15f34w2p8l1cc.cloudfront.net" },
      // Imagens hospedadas pela própria OverFast API.
      { protocol: "https", hostname: "overfast-api.tekrop.fr" },
    ],
  },
};

export default nextConfig;
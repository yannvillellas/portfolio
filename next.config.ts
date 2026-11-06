import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      {
        source: "/projects/microservices-car-rental",
        destination: "/projects/car-rental-platform",
        permanent: true,
      },
      {
        source: "/:locale/projects/microservices-car-rental",
        destination: "/:locale/projects/car-rental-platform",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

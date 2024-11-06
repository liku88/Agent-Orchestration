/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination:
          "https://proxy-agentorc.codecodecodeme.workers.dev/:path*",
      },
    ];
  },
};

export default nextConfig;

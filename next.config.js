/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  eslint: {
    // 🚀 Prevent ESLint errors from blocking production builds
    ignoreDuringBuilds: true,
  },
  // Allow iframe embedding for Replit proxy environment
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' *.replit.com *.repl.co *.replit.dev;",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cloudinary.com",
      },
      // Keep legacy S3 support during migration
      {
        protocol: "https",
        hostname: "munia-s3-bucket.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  // Production: strip console.log (keep error/warn)
  ...(process.env.NODE_ENV === "production" && {
    compiler: {
      removeConsole: { exclude: ["error", "warn"] },
    },
  }),
};

module.exports = nextConfig;

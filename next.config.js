/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Production: strip console.log (keep error/warn)
  ...(process.env.NODE_ENV === "production" && {
    compiler: {
      removeConsole: { exclude: ["error", "warn"] },
    },
  }),
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the workspace root to silence the lockfile warning
  outputFileTracingRoot: require('path').join(__dirname),
  
  // Optional: Set turbopack root if using Turbopack
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
};

module.exports = nextConfig;

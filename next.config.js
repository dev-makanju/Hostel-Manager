/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.unshift({
        test: /\.(tsx|ts|js|mjs|jsx)$/,
        use: 'swc-loader',
        exclude: /node_modules/,
      });
    }
    return config;
  },
};


module.exports = nextConfig


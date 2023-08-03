const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdoc"],
  experimental: {
    appDir: true,
    // mdxRs: true,
  },
  // Workaround for making Vanilla Extract work with Next.js
  // https://github.com/vanilla-extract-css/vanilla-extract/issues/1085#issuecomment-1555986222
  webpack: (config) => {
    config.optimization.splitChunks = false;

    return config;
  },
  transpilePackages: ["@thugga/ui", "@thugga/markdoc"],
  reactStrictMode: true,
};

module.exports = withVanillaExtract(nextConfig);

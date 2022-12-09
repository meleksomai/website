const withTM = require("next-transpile-modules")(["@thugga/ui", "@thugga/markdoc"]);

module.exports = withTM({
  experimental: {
    // appDir: true,
    transpilePackages: ["@thugga/ui", "@thugga/markdoc"],
  },
  reactStrictMode: true,
});

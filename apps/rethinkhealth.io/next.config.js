// const withTM = require("next-transpile-modules")(["@thugga/ui", "@thugga/markdoc"]);

module.exports = {
  experimental: {
    // appDir: true,
    transpilePackages: ["@thugga/ui", "@thugga/markdoc"],
  },
  reactStrictMode: true,
};

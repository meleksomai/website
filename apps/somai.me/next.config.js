const withTM = require("next-transpile-modules")(["@thugga/ui", "@thugga/markdoc"]);

module.exports = withTM({
  reactStrictMode: true,
});

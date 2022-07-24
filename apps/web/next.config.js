const withTM = require("next-transpile-modules")(["@thugga/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});

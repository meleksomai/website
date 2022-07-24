module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-thugga`
  extends: ["thugga"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};

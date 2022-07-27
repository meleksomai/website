module.exports = {
  extends: [
    "next", 
    "prettier",
    "plugin:sonarjs/recommended",
    "plugin:typescript-sort-keys/recommended", // Enables sorting of object properties
],
  plugins: [
    "eslint-plugin-tsdoc",
    "yaml",
    "markdown",
    "import",
    "typescript-sort-keys",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "tsdoc/syntax": "warn",
    // Importing rules
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: [
          "builtin",
          "external",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        pathGroups: [
          {
            group: "external",
            pattern: "@thugga/**",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
};

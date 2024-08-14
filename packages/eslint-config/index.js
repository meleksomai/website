module.exports = {
  extends: [
    "next",
    // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",

    // includes eslint-plugin-react / eslint-plugin-react-hooks / eslint-plugin-next
    "next/core-web-vitals",

    // import and export re-order
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",

    // prettier plugin here disables ESLint rules related to code styling that may disagree with prettierrc rules
    // it only turn off rules so it needs to always be at the bottom
    "prettier",
    "plugin:prettier/recommended",
    "plugin:typescript-sort-keys/recommended", // Enables sorting of object properties
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "prettier",
    "import",
    "typescript-sort-keys",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/display-name": "warn",
    // Sort export declations in modules
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
            group: "internal",
            pattern: "@/**",
            position: "before",
          },
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

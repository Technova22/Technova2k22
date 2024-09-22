import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // Disable the default rule for unused vars
      "no-unused-vars": "off",

      // Enable the rule for unused imports
      "unused-imports/no-unused-imports": "error",

      // Warn for unused variables but ignore vars prefixed with '_'
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_", // Ignore variables prefixed with '_'
          args: "after-used",
          argsIgnorePattern: "^_", // Ignore arguments prefixed with '_'
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];

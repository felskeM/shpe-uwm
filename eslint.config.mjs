import js from "@eslint/js";
import nextPlugin from "eslint-config-next";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  // Base JS config
  js.configs.recommended,

  // Next’s recommended (core-web-vitals included in v15)
  ...nextPlugin,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      "@typescript-eslint": ts,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y
    },
    rules: {
      // React hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TS niceties
      "@typescript-eslint/consistent-type-imports": "warn",

      // a11y
      "jsx-a11y/alt-text": "error"
    }
  }
];
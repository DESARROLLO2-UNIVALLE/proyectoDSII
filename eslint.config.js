import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jestPlugin from "eslint-plugin-jest";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}", "**/*.test.js", "**/*.test.jsx"],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: [
        globals.browser,
        {
          jest: true, // Añade Jest como global para evitar errores
          expect: true, // Añade expect como global
          describe: true,
          it: true,
          test: true,
        },
      ],
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jestPlugin.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];

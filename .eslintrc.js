module.exports = {
  root: true,
  extends: process.env.DISABLE_ESLINT ? [] : ["eslint:recommended"],
  overrides: process.env.DISABLE_ESLINT
    ? []
    : [
        {
          files: ["**/*.ts", "**/*.tsx"],
          env: { browser: true, es6: true, node: true },
          extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/eslint-recommended",
            "plugin:@typescript-eslint/recommended",
          ],
          globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
          parser: "@typescript-eslint/parser",
          parserOptions: {
            ecmaFeatures: { jsx: true },
            ecmaVersion: 2021,
            sourceType: "module",
            project: "./tsconfig.json",
          },
          plugins: ["@typescript-eslint"],
        },
      ],
};

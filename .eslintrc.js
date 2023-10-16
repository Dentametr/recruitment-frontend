module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    "semi": ["error", "always"],
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-undef": "error"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
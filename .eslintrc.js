module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  env: {
    commonjs: true,
    es6: true,
    es2023: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2023,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-console": "off",
    "import/prefer-default-export": "off",
  },
  plugins: ["prettier"],
};

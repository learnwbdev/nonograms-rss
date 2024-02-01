module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
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

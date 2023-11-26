module.exports = {
  extends: ["custom/next"],
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    "@typescript-eslint/no-non-null-assertion": "off", // page.tsx, can't remove
    "unicorn/filename-case": "off", // Naming convention, no issue
    "react-hooks/rules-of-hooks": "off",
    "camelcase": "off",
  },
};

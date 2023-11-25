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
    
    'no-console': 'off',
    "@typescript-eslint/no-unsafe-assignment":'off', // for Instagram,Linkedin,Facebook
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off", // for cardRef.current?.offsetWidth!
    
    "unicorn/filename-case": "off", // Naming convention, no issue
    "react-hooks/rules-of-hooks": "off",
    "camelcase": "off",
  },
};

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

    "@typescript-eslint/no-non-null-assertion": "off", // page.tsx, can't remov$
    "react-hooks/exhaustive-deps": "off", // directionalLight is not a dependen$
    "unicorn/filename-case": "off", // Naming convention, no issue

    "@typescript-eslint/no-explicit-any": "off", // event card line 6
    "react/jsx-key": "off", // landing line 30, key element is not required
    "react/button-has-type": "off", // explicit button type is not required
  
    "jsx-a11y/click-events-have-key-events": "off", // click event is not a key$
    "jsx-a11y/no-static-element-interactions": "off", // click event is not a k$
  },
};

module.exports = {
  "extends": [
    "eslint:recommended",
    "eslint-config-airbnb",
    "react-app"
  ],
  "rules": {
    "align": 0,
    "ban-types": 0,
    "import-name": 0,
    "interface-name": 0,
    "interface-over-type-literal": 0,
    "max-len": ["error", { "ignoreTrailingComments": true, "code": 120 }],
    "member-access": 0,
    "no-increment-decrement": 0,
    "no-shadowed-variable": 0,
    "object-literal-sort-keys": 0,
    "object-shorthand-properties-first": 0,
    "trailing-comma": 0,
    "react/require-default-props": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "object-curly-newline": 0,
    "comma-dangle": 0,
    "import/no-cycle": 0,
    "import/prefer-default-export": 0,
    "operator-linebreak": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "arrow-parens": 0,
    "linebreak-style": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-props-no-spreading": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["./"]
      }
    }
  }
};

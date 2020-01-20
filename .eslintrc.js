module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "amd": false,
    "mocha": false,
    "jasmine": false
  },
  "parserOptions": {
    "ecmaVersion": 7,
    "parser": "babel-eslint",
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": false
    }
  },
  "extends": [
    'plugin:vue/recommended',
    "eslint-config-egg",
    "eslint:recommended"
  ],
  "plugins": [
    "html",
    "vue"
  ],
  "globals": {
    "__inline": true,
    "IS_SERVER": true,
    "__uri": true
  },
  "rules": {
    "for-direction": 2,
    "getter-return": [
      2,
      {
        "allowImplicit": false
      }
    ],
    "no-await-in-loop": 0,
    "no-console": 0,
    "no-prototype-builtins": 1,
    "valid-jsdoc": 0,
    "no-template-curly-in-string": 1,
    "accessor-pairs": 1,
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "class-methods-use-this": 0,
    "complexity": 0,
    "default-case": 2,
    "no-alert": 1,
    "no-empty": 1,
    "no-empty-function": 1,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 0,
    "no-implicit-globals": 2,
    "no-invalid-this": 0,
    "no-iterator": 2,
    "no-lone-blocks": 2,
    "no-magic-numbers": 0,
    "no-multi-spaces": [
      2,
      {
        "ignoreEOLComments": true,
        "exceptions": {
          "Property": true,
          "BinaryExpression": false,
          "VariableDeclarator": true,
          "ImportDeclaration": true
        }
      }
    ],
    "no-multi-str": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-return-await": 2,
    "no-script-url": 0,
    "no-throw-literal": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-return": 0,
    "no-unused-vars": [
      2,
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "no-void": 2,
    "no-warning-comments": 0,
    "no-with": 2,
    "prefer-promise-reject-errors": 2,
    "radix": 0,
    "require-await": 0,
    "vars-on-top": 0,
    "init-declarations": 0,
    "no-label-var": 2,
    "no-undefined": 0,
    "no-undef": [
      2,
      {
        "typeof": false
      }
    ],
    "no-use-before-define": 2,
    "array-bracket-newline": 0,
    "array-bracket-spacing": [
      2,
      "never"
    ],
    "array-element-newline": 0,
    "block-spacing": [
      2,
      "always"
    ],
    "brace-style": 2,
    "camelcase": [
      2,
      {
        "properties": "never"
      }
    ],
    "capitalized-comments": 0,
    "comma-dangle": 2,
    "comma-spacing": 2,
    "comma-style": [
      2,
      "last"
    ],
    "eol-last": 0,
    "func-call-spacing": [
      2,
      "never"
    ],
    "func-name-matching": 0,
    "func-names": 0,
    "func-style": 0,
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "indent": [
      0,
      0,
      {
        "SwitchCase": 1,
        "flatTernaryExpressions": true
      }
    ],
    "jsx-quotes": [
      2,
      "prefer-double"
    ],
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      2,
      {
        "before": true,
        "after": true
      }
    ],
    "line-comment-position": 0,
    "linebreak-style": 0,
    "lines-around-comment": 0,
    "max-depth": [
      2,
      5
    ],
    "max-len": [
      2,
      {
        "code": 250,
        "tabWidth": 2,
        "ignoreUrls": true
      }
    ],
    "max-lines": 0,
    "max-nested-callbacks": [
      "error",
      3
    ],
    "max-params": [
      2,
      10
    ],
    "max-statements": 0,
    "max-statements-per-line": 0,
    "multiline-ternary": 0,
    "new-cap": 0,
    "new-parens": 2,
    "newline-per-chained-call": 0,
    "no-array-constructor": 2,
    "no-bitwise": 0,
    "no-continue": 0,
    "no-inline-comments": 0,
    "no-lonely-if": 0,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-assign": 0,
    "no-multiple-empty-lines": 0,
    "no-negated-condition": 0,
    "no-nested-ternary": 0,
    "no-new-object": 2,
    "no-plusplus": 0,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 0,
    "no-whitespace-before-property": 2,
    "object-curly-newline": [
      2,
      {
        "multiline": true,
        "consistent": true
      }
    ],
    "object-property-newline": 0,
    "one-var": [
      2,
      {
        "var": "never",
        "let": "never",
        "const": "never"
      }
    ],
    "one-var-declaration-per-line": [
      2,
      "always"
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "semi": 2,
    "semi-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "semi-style": [
      2,
      "last"
    ],
    "sort-keys": 0,
    "sort-vars": 0,
    "space-before-blocks": [
      2,
      "always"
    ],
    "space-before-function-paren": [
      2,
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "space-infix-ops": 2,
    "spaced-comment": 0,
    "switch-colon-spacing": [
      2,
      {
        "after": true,
        "before": false
      }
    ],
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "arrow-spacing": [
      2,
      {
        "before": true,
        "after": true
      }
    ],
    "generator-star-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "no-duplicate-imports": 2,
    "no-var": 2,
    "prefer-arrow-callback": 0,
    "prefer-const": 2,
    "prefer-destructuring": 0,
    "prefer-template": 0,
    "rest-spread-spacing": [
      2,
      "never"
    ],
    "sort-imports": 0,
    "template-curly-spacing": [
      2,
      "never"
    ],
    "yield-star-spacing": [
      2,
      "after"
    ],
    "array-callback-return": 0
  }
}


module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "jquery": true,
        "browser": true
    },
    "globals": {
        "document": false,
        "navigator": false,
        "window": false
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "node",
        "promise",
        "standard"
    ],
    "rules": {
        "accessor-pairs": "warn",
        "arrow-spacing": [
            "warn",
            {
                "after": true,
                "before": true
            }
        ],
        "block-spacing": [
            "warn",
            "always"
        ],
        "brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": [
            "warn",
            {
                "properties": "never"
            }
        ],
        "comma-dangle": ["warn","always-multiline"],
        "comma-spacing": "warn",
        "comma-style": [
            "warn",
            "last"
        ],
        "constructor-super": "warn",
        "curly": [
            "warn",
            "multi-line"
        ],
        "dot-location": [
            "warn",
            "property"
        ],
        "eol-last": "warn",
        "eqeqeq": [
            "warn",
            "always",
            {
                "null": "ignore"
            }
        ],
        "func-call-spacing": [
            "warn",
            "never"
        ],
        "function-paren-newline": "warn",
        "generator-star-spacing": [
            "warn",
            {
                "after": true,
                "before": true
            }
        ],
        "handle-callback-err": [
            "warn",
            "^(err|error)$"
        ],
        "import/export": "warn",
        "import/first": "warn",
        "import/no-duplicates": "warn",
        "import/no-named-default": "warn",
        "import/no-webpack-loader-syntax": "warn",
        "indent": [
            "warn",
            "tab",
            {
                "ArrayExpression": 1,
                "CallExpression": {
                    "arguments": 1
                },
                "flatTernaryExpressions": false,
                "FunctionDeclaration": {
                    "body": 1,
                    "parameters": 1
                },
                "FunctionExpression": {
                    "body": 1,
                    "parameters": 1
                },
                "ignoreComments": false,
                "ImportDeclaration": 1,
                "MemberExpression": 1,
                "ObjectExpression": 1,
                "outerIIFEBody": 1,
                "SwitchCase": 1,
                "VariableDeclarator": 1
            }
        ],
        "key-spacing": [
            "warn",
            {
                "afterColon": true,
                "beforeColon": false
            }
        ],
        "keyword-spacing": [
            "warn",
            {
                "after": true,
                "before": true
            }
        ],
        "new-cap": [
            "warn",
            {
                "capIsNew": false,
                "newIsCap": true
            }
        ],
        "new-parens": "warn",
        "no-array-constructor": "warn",
        "no-caller": "warn",
        "no-class-assign": "warn",
        "no-compare-neg-zero": "warn",
        "no-cond-assign": "warn",
        "no-const-assign": "warn",
        "no-constant-condition": [
            "warn",
            {
                "checkLoops": false
            }
        ],
        "no-control-regex": "warn",
        "no-debugger": "warn",
        "no-delete-var": "warn",
        "no-dupe-args": "warn",
        "no-dupe-class-members": "warn",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty-character-class": "warn",
        "no-empty-pattern": "warn",
        "no-eval": "warn",
        "no-ex-assign": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-boolean-cast": "warn",
        "no-extra-parens": [
            "warn",
            "functions"
        ],
        "no-fallthrough": "warn",
        "no-floating-decimal": "warn",
        "no-func-assign": "warn",
        "no-global-assign": "warn",
        "no-implied-eval": "warn",
        "no-inner-declarations": [
            "warn",
            "functions"
        ],
        "no-invalid-regexp": "warn",
        "no-irregular-whitespace": "warn",
        "no-iterator": "warn",
        "no-label-var": "warn",
        "no-labels": [
            "warn",
            {
                "allowLoop": false,
                "allowSwitch": false
            }
        ],
        "no-lone-blocks": "warn",
        "no-mixed-operators": [
            "warn",
            {
                "allowSamePrecedence": true,
                "groups": [
                    [
                        "==",
                        "!=",
                        "===",
                        "!==",
                        ">",
                        ">=",
                        "<",
                        "<="
                    ],
                    [
                        "&&",
                        "||"
                    ],
                    [
                        "in",
                        "instanceof"
                    ]
                ]
            }
        ],
        "no-mixed-spaces-and-tabs": "warn",
        "no-multi-spaces": "warn",
        "no-multi-str": "warn",
        "no-multiple-empty-lines": [
            "warn",
            {
                "max": 1,
                "maxEOF": 0
            }
        ],
        "no-negated-in-lhs": "warn",
        "no-new": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-require": "warn",
        "no-new-symbol": "warn",
        "no-new-wrappers": "warn",
        "no-obj-calls": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        "no-path-concat": "warn",
        "no-proto": "warn",
        "no-redeclare": "warn",
        "no-regex-spaces": "warn",
        "no-return-assign": [
            "warn",
            "except-parens"
        ],
        "no-return-await": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow-restricted-names": "warn",
        "no-sparse-arrays": "warn",
        "no-tabs": ["error", { allowIndentationTabs: true }],
        "no-template-curly-in-string": "warn",
        "no-this-before-super": "warn",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "warn",
        "no-undef": "warn",
        "no-undef-init": "warn",
        "no-unexpected-multiline": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-unneeded-ternary": [
            "warn",
            {
                "defaultAssignment": false
            }
        ],
        "no-unreachable": "warn",
        "no-unsafe-finally": "warn",
        "no-unsafe-negation": "warn",
        "no-unused-expressions": [
            "warn",
            {
                "allowShortCircuit": true,
                "allowTaggedTemplates": true,
                "allowTernary": true
            }
        ],
        "no-unused-vars": [
            "warn",
            {
                "args": "none",
                "ignoreRestSiblings": true,
                "vars": "all"
            }
        ],
        "no-use-before-define": [
            "warn",
            {
                "classes": false,
                "functions": false,
                "variables": false
            }
        ],
        "no-useless-call": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-constructor": "warn",
        "no-useless-escape": "warn",
        "no-useless-rename": "warn",
        "no-useless-return": "warn",
        "no-whitespace-before-property": "warn",
        "no-with": "warn",
        "node/no-deprecated-api": "warn",
        "node/process-exit-as-throw": "warn",
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "object-property-newline": [
            "warn",
            {
                "allowMultiplePropertiesPerLine": true
            }
        ],
        "one-var": [
            "warn",
            {
                "initialized": "never"
            }
        ],
        "operator-linebreak": [
            "warn",
            "after",
            {
                "overrides": {
                    ":": "before",
                    "?": "before"
                }
            }
        ],
        "padded-blocks": [
            "warn",
            {
                "blocks": "never",
                "classes": "never",
                "switches": "never"
            }
        ],
        "prefer-promise-reject-errors": "warn",
        "promise/param-names": "warn",
        "quotes": [
            "warn",
            "single"
        ],
        "rest-spread-spacing": [
            "warn",
            "never"
        ],
        "semi": "warn",
        "semi-spacing": [
            "warn",
            {
                "after": true,
                "before": false
            }
        ],
        "space-before-blocks": "warn",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "warn",
            "never"
        ],
        "space-infix-ops": "warn",
        "space-unary-ops": [
            "warn",
            {
                "nonwords": false,
                "words": true
            }
        ],
        "spaced-comment": [
            "warn",
            "always",
            {
                "block": {
                    "balanced": true,
                    "exceptions": [
                        "*"
                    ],
                    "markers": [
                        "*package",
                        "!",
                        ",",
                        ":",
                        "::",
                        "flow-include"
                    ]
                },
                "line": {
                    "markers": [
                        "*package",
                        "!",
                        "/",
                        ",",
                        "="
                    ]
                }
            }
        ],
        "standard/array-bracket-even-spacing": [
            "warn",
            "either"
        ],
        "standard/computed-property-even-spacing": [
            "warn",
            "even"
        ],
        "standard/no-callback-literal": "warn",
        "standard/object-curly-even-spacing": [
            "warn",
            "either"
        ],
        "symbol-description": "warn",
        "template-curly-spacing": [
            "warn",
            "never"
        ],
        "template-tag-spacing": [
            "warn",
            "never"
        ],
        "unicode-bom": [
            "warn",
            "never"
        ],
        "use-isnan": "warn",
        "valid-typeof": [
            "warn",
            {
                "requireStringLiterals": true
            }
        ],
        "wrap-iife": [
            "warn",
            "any",
            {
                "functionPrototypeMethods": true
            }
        ],
        "yield-star-spacing": [
            "warn",
            "both"
        ],
        "yoda": [
            "warn",
            "never"
        ]
    }
};

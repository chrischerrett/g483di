module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "@typescript-eslint/interface-name-prefix": [
            "error",
            {
                prefixWithI: "always",
            },
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "off", // TODO
            {
                allowExpressions: true,
            },
        ],
        "@typescript-eslint/no-explicit-any": [
            "off", // TODO
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};

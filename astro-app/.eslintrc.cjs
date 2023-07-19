module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:astro/recommended",
        "plugin:astro/jsx-a11y-recommended",
        "plugin:solid/typescript",
        "plugin:tailwindcss/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "solid",
        "@typescript-eslint"
    ],
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            }
        },
    ],
}
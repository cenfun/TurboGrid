// https://eslint.org/docs/rules/

const plus = require('eslint-config-plus');

// https://eslint.org/docs/latest/use/configure/configuration-files
module.exports = [
    {
        languageOptions: {
            globals: {
                delay: false,
                assert: false,
                page: false
            }
        }
    },
    plus
];

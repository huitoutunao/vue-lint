module.exports = {
    globals: {
        'process': true,
        'require': true
    },
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/base'
    ],
    plugins: ['vue'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/no-dupe-keys': ['error'],
        'vue/no-duplicate-attributes': ['error', {
            'allowCoexistClass': true,
            'allowCoexistStyle': true
        }],
        'vue/no-parsing-error': ['error'],
        'vue/no-reserved-keys': ['error'],
        'vue/no-shared-component-data': ['error'],
        'vue/no-side-effects-in-computed-properties': ['error'],
        'vue/no-textarea-mustache': ['error'],
        'vue/no-unused-components': ['error'],
        'vue/no-unused-vars': ['error'],
        'vue/require-component-is': ['error'],
        'vue/require-prop-type-constructor': ['error'],
        'vue/require-render-return': ['error'],
        'vue/require-valid-default-prop': ['error'],
        'vue/return-in-computed-property': ['error'],
        'vue/use-v-on-exact': ['error'],
        'vue/valid-template-root': ['error'],
        'vue/valid-v-bind': ['error'],
        'vue/valid-v-else-if': ['error'],
        'vue/valid-v-else': ['error'],
        'vue/valid-v-for': ['error'],
        'vue/valid-v-html': ['error'],
        'vue/valid-v-if': ['error'],
        'vue/valid-v-model': ['error'],
        'vue/valid-v-on': ['error'],
        'vue/valid-v-once': ['error'],
        'vue/valid-v-pre': ['error'],
        'vue/valid-v-show': ['error'],
        'vue/valid-v-text': ['error'],
        'vue/attribute-hyphenation': ['error', 'always'],
        'vue/html-closing-bracket-spacing': ['error', {
            'startTag': 'never',
            'endTag': 'never',
            'selfClosingTag': 'never'
        }],
        'vue/html-end-tags': ['error'],
        'vue/html-quotes': ['error', 'double'],
        'vue/mustache-interpolation-spacing': ['error'],
        'vue/name-property-casing': ['error'],
        'vue/no-multi-spaces': ['error'],
        'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
        'vue/no-template-shadow': ['error'],
        'vue/v-bind-style': ['error'],
        'vue/v-on-style': ['error'],
        'vue/this-in-template': ['error'],
        'vue/array-bracket-spacing': ['error', 'never'],
        'vue/arrow-spacing': ['error'],
        'vue/block-spacing': ['error', 'never'],
        'vue/comma-dangle': ['error', 'never'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/eqeqeq': ['error'],
        'vue/key-spacing': ['error'],
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1,
            'switchCase': 1
        }],
        'vue/space-infix-ops': ['error'],
        'vue/space-unary-ops': ['error'],

        'for-direction': 2,
        'no-cond-assign': 2,
        'no-constant-condition': 2,
        'no-dupe-args': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-func-assign': 2,
        'no-irregular-whitespace': 2,
        'no-obj-calls': 2,
        'no-template-curly-in-string': 2,
        'no-unexpected-multiline': 2,
        'use-isnan': 2,
        'valid-typeof': 2,
        'array-callback-return': 2,
        'curly': 2,
        'default-case': 2,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-fallthrough': 2,
        'no-loop-func': 2,
        'no-redeclare': 2,
        'no-self-assign': 2,
        'no-undef': 2,
        'array-bracket-newline': ['error', 'never'],
        'brace-style': ['error', '1tbs', {
            'allowSingleLine': true
        }],
        'comma-spacing': ['error', {
            'before': false,
            'after': true
        }],
        'comma-style': ['error', 'last'],
        'func-call-spacing': ['error', 'never'],
        'keyword-spacing': ['error', {
            'before': true,
            'after': true
        }],
        'lines-between-class-members': ['error', 'always'],
        'new-cap': 2,
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-new-object': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': 2,
        'space-in-parens': 2,
        'switch-colon-spacing': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'indent': ['error', 4, {
            'SwitchCase': 1
        }]
    },
    overrides: [{
        'files': ['*.vue'],
        'rules': {
            'indent': 'off'
        }
    }]
}

module.exports = {
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
            },
            typescript: {
                project: `${__dirname}/tsconfig.json`
            }
        }
    },
    overrides: [
        {
            files: ['src/**/*.ts?(x)'],
            extends: ['plugin:@typescript-eslint/recommended'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname
            },
            rules: {
                'no-shadow': ['off'],
                '@typescript-eslint/explicit-function-return-type': ['off'],
                '@typescript-eslint/explicit-module-boundary-types': ['off'],
                '@typescript-eslint/no-shadow': ['error'],
                'react/jsx-fragments': ['error', 'element'],
                'react/jsx-filename-extension': [
                    1,
                    {
                        extensions: ['.ts', '.tsx', '.jsx']
                    }
                ],
                'arrow-body-style': ['off'],
                'import/prefer-default-export': ['off'],
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error']
            }
        },
        {
            files: ['src/app/stores/**/*.ts'],
            rules: {
                'no-param-reassign': ['off'],
                '@typescript-eslint/no-empty-interface': ['off']
            }
        }
    ]
};

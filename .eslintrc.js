module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    'import/internal-regex': '^@app/'
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    // off rules
    'no-prototype-builtins': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/semi': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/src/*', '.*'],
            message: 'Please add @app'
          }
        ]
      }
    ],
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
      }
    ],
  },
};

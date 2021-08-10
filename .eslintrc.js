module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  overrides: [
    {
      files: ['.ts', '.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
    },
  ],
  rules: {
    'no-param-reassign': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      'off',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-console': 'off',
    '@typescript-eslint/no-use-before-define': ['warn', { functions: false }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
};

const { resolve } = require('node:path');
const { sharedRules, ignorePatterns, sharedOverrides } = require('./shared');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'eslint:recommended',
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/node'),
    'eslint-config-turbo',
    'prettier',
  ],
  plugins: [
    "check-file",
    "@typescript-eslint"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    ...sharedRules,
  },
  overrides: [...sharedOverrides],
  ignorePatterns,
};

module.exports = config;

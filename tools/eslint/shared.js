const sharedRules = {
  'import/no-cycle': 'off',
  'func-style': ['error', 'declaration'],
  camelcase: ['error', { allow: ['^unstable_'] }],
  "check-file/filename-naming-convention": [
    "error",
    {
      "**/*.{jsx,tsx}": "SNAKE_CASE",
      "**/*.{js,ts}": "SNAKE_CASE"
    }
  ],
  "check-file/folder-naming-convention": [
    "error",
    {
      "src/**/": "SNAKE_CASE",
    }
  ]
};

const sharedReactRules = {
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'error',
  'react/function-component-definition': [
    'warn',
    {
      namedComponents: 'function-expression',
      unnamedComponents: 'function-expression',
    },
  ],
  'react/no-unstable-nested-components': [
    'error',
    {
      allowAsProps: true,
    },
  ],
  'react/jsx-pascal-case': [
    'error',
    {
      ignore: ['MCQ'],
    },
  ],
};

const sharedOverrides = [
  {
    files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },
];

const ignorePatterns = [
  '**/.eslintrc.cjs',
  '**/.eslintrc.js',
  '**/*.config.js',
  '**/*.config.cjs',
  '**/*.lintstagedrc.js',
  '**/*.typegen.ts',
  'tooling/lint-staged/index.mjs',
  '.next',
  'dist',
  'build',
  'pnpm-lock.yaml',
  'node_modules',
];

module.exports = {
  sharedRules,
  sharedReactRules,
  sharedOverrides,
  ignorePatterns,
};
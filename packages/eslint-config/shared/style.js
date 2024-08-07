/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:perfectionist/recommended-natural-legacy',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'perfectionist',
    'unused-imports',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-useless-rename': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'prettier/prettier': 'error',
    'perfectionist/sort-jsx-props': [
      'error',
      {
        customGroups: {
          react: ['key', 'ref'],
          callback: 'on[A-Z]*',
        },
        groups: ['react', 'unknown', 'callback'],
      },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        customGroups: {
          type: {
            barbaBrutal: '@barba-brutal/**',
            components: '@/components/**',
          },
          value: {
            barbaBrutal: '@barba-brutal/**',
            components: '@/components/**',
          },
        },
        groups: [
          'type',
          ['builtin', 'external'],
          'barbaBrutal',
          'components',
          ['internal-type', 'internal'],
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
        internalPattern: ['@/**'],
      },
    ],
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-newline': 'error',
    'react/self-closing-comp': 'error',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'warn',
  },
};

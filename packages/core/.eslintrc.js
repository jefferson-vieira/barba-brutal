/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@barba-brutal/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
};

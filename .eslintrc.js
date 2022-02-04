module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'comma-dangle': 'off',
    quotes: 'double',
    semi: 'always',
  },
};

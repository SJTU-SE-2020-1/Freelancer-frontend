module.exports = {
  env: {
    browser: true,
    es2020: true
    // node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module',
    ecmaVersion: 7
  },
  plugins: ['react', 'import', 'jsx'],
  rules: {
    'no-extra-semi': 2 // 不允许出现不必要的分号
  }
}

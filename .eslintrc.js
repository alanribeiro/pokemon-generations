module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      node: {},
    },
  },
  rules: {
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'indent': ['error', 4, { 'SwitchCase': 1 }],
    'max-len': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'react/jsx-curly-spacing': 'off',
  },
};

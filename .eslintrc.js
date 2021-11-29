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
  rules: {
    semi: ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'no-restricted-syntax': ['error', 'FunctionExpression', 'WithStatement', "BinaryExpression[operator='in']"],
    'react/function-component-definition': 'off',
  },
  globals: {
    React: 'readonly',
    ReactDOM: 'readonly',
    document: 'readonly',
  },
}

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  },
  overrides: [
    {
      files: [
        'test/*.test.js'
      ],
      plugins: [
        'jest'
      ],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style'
      ]
    }
  ]
}

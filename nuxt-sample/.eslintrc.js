module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': 'off'
  }
}

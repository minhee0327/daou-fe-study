module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxt/eslint-config",
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: { 'vue/multi-word-component-names': 0 }
}
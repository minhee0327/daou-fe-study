module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module',
	},
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:prettier/recommended',
	],
	rules: {
		'no-unused-vars': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				useTabs: true,
				trailingComma: 'all',
				arrowParens: 'avoid',
			},
		],
	},
};

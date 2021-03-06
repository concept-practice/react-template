module.exports = {
	env: {
		es6: true,
		node: true,
		jest: true,
		browser: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:jest/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['prettier', 'react', 'jest', '@typescript-eslint'],
	rules: {
		'prettier/prettier': 'error',
		'object-shorthand': ['error', 'always'],
		curly: 'error',
		'no-alert': 'error',
		'no-console': 'error',
		'no-undefined': 'error',
		'no-undef-init': 'error',
		'no-else-return': 'error',
		'block-scoped-var': 'error',
		'no-duplicate-imports': 'error',
		'max-classes-per-file': ['error', 1],
		'no-magic-numbers': 'off',
		'no-use-before-define': ['error', { functions: true, classes: true }],
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false,
			},
		],
		'prefer-destructuring': [
			'error',
			{
				array: true,
				object: true,
			},
			{
				enforceForRenamedProperties: false,
			},
		],

		// React Specific Rules
		'react/destructuring-assignment': [2],
		'react/no-direct-mutation-state': [1],
		'react/no-this-in-sfc': [1],
		'react/no-unused-prop-types': [1],
		'react/no-unused-state': [1],
		'react/jsx-pascal-case': [1],
		'react/prop-types': [0],

		// Jest Specific Rules
		'jest/expect-expect': [
			'error',
			{
				assertFunctionNames: ['expect'],
			},
		],
		'jest/consistent-test-it': 'error',
		'jest/prefer-todo': 'error',
		'jest/prefer-to-be-null': 'error',
		'jest/prefer-to-be-undefined': 'error',
		'jest/prefer-strict-equal': 'error',

		// Typescript specific rules
		'@typescript-eslint/interface-name-prefix': [0],
		'@typescript-eslint/camelcase': [0],
	},
	overrides: [
		{
			files: ['**/*.spec.*', '**/setupTests.ts'],
			rules: {
				'@typescript-eslint/no-non-null-assertion': 'off',
			},
		},
	],
	settings: {
		react: {
			version: 'detect', // React version. "detect" automatically picks the version you have installed.
		},
	},
};

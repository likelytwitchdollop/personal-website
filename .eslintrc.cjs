module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'airbnb-typescript',
		'plugin:storybook/recommended',
		'prettier',
	],
	overrides: [
		{
			files: ['**/*.stories.@(js|jsx|ts|tsx)'],
			rules: {
				'react/jsx-props-no-spreading': ['off'],
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		// Disable React import.
		'react/react-in-jsx-scope': 0,
		// Sort imports.
		'sort-imports': [
			'warn',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],
		'import/order': [
			'warn',
			{
				groups: [
					['external', 'builtin'],
					'internal',
					['sibling', 'parent'],
					'index',
				],
				pathGroups: [
					{
						pattern: '@(react|react-native)',
						group: 'external',
						position: 'before',
					},
					{
						pattern: 'src/**',
						group: 'internal',
					},
				],
				pathGroupsExcludedImportTypes: ['internal', 'react'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		// Require default arguments for optional props.
		'react/require-default-props': [
			'error',
			{
				forbidDefaultForRequired: true,
				// This line throws an invalid configuration rule when linting. That's odd because it should be valid occurding to the docs. Still looking into it.
				// functions: 'defaultArguments',
			},
		],
		// Allow use of arrow functions.
		'arrow-body-style': ['warn', 'always'],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: ['function-declaration', 'arrow-function'],
				unnamedComponents: 'arrow-function',
			},
		],
		// Disable extraneous dependencies for tests and specific files.
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					// Repos with a single test file.
					'test.{ts,tsx}',
					// Repos with multiple top-level test files.
					'test-*.{ts,tsx}',
					// Tests where the extension or filename suffix denotes that it is a test.
					'**/*{.,_}{test,spec,stories}.{ts,tsx}',
					// Vite config file.
					'vite.config.ts',
				],
				optionalDependencies: false,
			},
		],
	},
}

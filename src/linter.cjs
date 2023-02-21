// I decided to use mJS and not cJS so I won't be able to set these as constants
const FILE_NAME_REGEX = '^[a-z0-9_.]+$'; // lowercase, numbers, underscores, and dots only
const FOLDER_NAME_REGEX = '^((?!_)[A-Za-z0-9\-])+$'; // alphanumeric, numbers, and dashes only

module.exports = {
	'env': {
		'node': true,
		'browser': true,
		'es2021': true,
		'mocha': true
	},
	'plugins': [
		'prefer-arrow',
		'filenames',
		'folders'
	],
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'filenames/match-regex': [2, FILE_NAME_REGEX, true],
		'folders/match-regex': [2, FOLDER_NAME_REGEX, `${process.cwd()}/`],
		'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0 }],
		'no-console': 'error',
		'lines-between-class-members': [
			'error',
			'always'
		],
		'padding-line-between-statements': [
			'error',
			{
				'blankLine': 'always',
				'prev': 'directive',
				'next': '*'
			},
			{
				'blankLine': 'any',
				'prev': 'directive',
				'next': 'directive'
			}
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'prefer-arrow/prefer-arrow-functions': [
			'error',
			{
				'disallowPrototype': true,
				'singleReturnOnly': false,
				'classPropertiesAllowed': false
			}
		],
		'prefer-arrow-callback': [
			'error',
			{
				'allowNamedFunctions': true
			}
		],
		'func-style': [
			'error',
			'expression',
			{
				'allowArrowFunctions': true
			}
		],
		'arrow-parens': [
			'error',
			'always'
		],
		'strict': [
			'error',
			'global'
		],
		'require-await': 'error',
		'keyword-spacing': 'error',
		'space-before-blocks': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				'markers': [
					'/'
				]
			}
		],
		'curly': 'error',
		'arrow-body-style': [
			'error',
			'as-needed'
		],
		'function-paren-newline': [
			'error',
			'never'
		],
		'function-call-argument-newline': [
			'error',
			'never'
		],
		'brace-style': [
			'error',
			'1tbs'
		],
		'no-const-assign': 'warn',
		'no-this-before-super': 'warn',
		'no-undef': 'error',
		'no-continue': 'off',
		'no-unreachable': 'warn',
		'no-unused-vars': 'error',
		'no-use-before-define': [
			'error',
			{
				'functions': false
			}
		],
		'constructor-super': 'warn',
		'valid-typeof': 'warn',
		'quotes': [
			2,
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-extra-semi': 'error',
		'indent': [
			'error',
			4,
			{
				'SwitchCase': 1
			}
		],
		'space-before-function-paren': [
			'error',
			{
				'anonymous': 'never',
				'named': 'never',
				'asyncArrow': 'always'
			}
		],
		'comma-dangle': [
			'error',
			'only-multiline'
		],
		'no-empty': ['error', { 'allowEmptyCatch': true }],
		'prefer-destructuring': ['error', {
			'object': true,
			'array': false
		}]
	}
};

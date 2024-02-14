const styledComponentArrowFn =
  "TaggedTemplateExpression > TemplateLiteral > ArrowFunctionExpression";

const ignoredNodes = [
	styledComponentArrowFn,
	`${styledComponentArrowFn} > BlockStatement`,
];

module.exports = {
	parserOptions: {
		ecmaVersion: 11,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	globals: {
		google: true,
		React: true,
		JSX: true,
	},
	plugins: [
		"@typescript-eslint",
		"@stylistic",
		"react",
		"react-hooks",
	],
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
	],
	rules: {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@stylistic/indent": ["error", "tab", { "flatTernaryExpressions": true, ignoredNodes }],
		"@stylistic/quotes": ["error", "double", { "avoidEscape": true }],
		"@stylistic/semi": ["error", "always"],
		"@stylistic/no-extra-semi": "error",
		"@stylistic/no-mixed-spaces-and-tabs": "error",
		"@stylistic/one-var-declaration-per-line": "error",
		"@stylistic/space-infix-ops": "error",
		"@stylistic/keyword-spacing": "error",
		"@stylistic/comma-dangle": ["error", "always-multiline"],
		"@stylistic/eol-last": ["error", "always"],
		"@stylistic/object-curly-spacing": ["error", "always"],
		"@stylistic/array-bracket-spacing": ["error", "never"],
		"@stylistic/comma-spacing": ["error", { "before": false, "after": true }],
		"@stylistic/no-trailing-spaces": ["error"],
		"@stylistic/no-multi-spaces": ["error"],
		"@stylistic/member-delimiter-style": ["error"],
		"@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
		"@stylistic/space-before-blocks": ["error"],
		"@stylistic/jsx-quotes": ["error"],
		"@stylistic/jsx-child-element-spacing": ["error"],
		"@stylistic/jsx-closing-bracket-location": ["error"],
		"@stylistic/jsx-closing-tag-location": ["error"],
		"@stylistic/jsx-curly-brace-presence": ["error", { propElementValues: "always" }],
		"@stylistic/jsx-curly-newline": ["error"],
		"@stylistic/jsx-curly-spacing": ["error"],
		"@stylistic/jsx-equals-spacing": ["error"],
		"@stylistic/jsx-first-prop-new-line": ["error"],
		"@stylistic/jsx-indent": ["error", "tab", { checkAttributes: true, indentLogicalExpressions: true }],
		"@stylistic/jsx-indent-props": ["error", "tab"],
		"@stylistic/jsx-one-expression-per-line": ["error", { "allow": "single-child" }],
		"@stylistic/jsx-pascal-case": ["error"],
		"@stylistic/jsx-props-no-multi-spaces": ["error"],
		"@stylistic/jsx-self-closing-comp": ["error"],
		"@stylistic/jsx-tag-spacing": ["error"],
		"prefer-const": "error",
		"constructor-super": "error",
		"for-direction": "error",
		"getter-return": "error",
		"no-unused-vars": "error",
		"no-async-promise-executor": "error",
		"no-case-declarations": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-const-assign": "error",
		"no-constant-condition": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-misleading-character-class": "error",
		"no-new-symbol": "error",
		"no-obj-calls": "error",
		"no-octal": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		"no-self-assign": "error",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"no-this-before-super": "error",
		"no-undef": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unused-labels": "error",
		"no-useless-catch": "error",
		"no-useless-escape": "error",
		"no-with": "error",
		"require-yield": "error",
		"use-isnan": "error",
		"valid-typeof": "error",
		"no-var": "error",
	},
	"overrides": [
		{
			"parser": "@typescript-eslint/parser",
			"files": [
				"**/*.ts",
				"**/*.tsx",
			],
			"rules": {
				"no-redeclare": "off",
				"@typescript-eslint/no-redeclare": "error",
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true, argsIgnorePattern: "^_" }],
			},
			"extends": [
				"eslint:recommended",
				"plugin:react/recommended",
				"plugin:@typescript-eslint/recommended",
			],
		},
	],
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
		"mocha": true,
		"jest": true,
	},
	"settings": {
		"react": {
			"pragma": "React",
			"version": "detect",
		},
	},
};

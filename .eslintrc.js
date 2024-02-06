// .eslintrc.js
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
		"react-hooks",
	],
	rules: {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@stylistic/indent": [
			"error",
			"tab",
			{
				"flatTernaryExpressions": true,
			},
		],
		"@stylistic/quotes": [
			2,
			"double",
			{
				"avoidEscape": true,
			},
		],
		"constructor-super": 2,
		"for-direction": 2,
		"getter-return": 2,
		"no-async-promise-executor": 2,
		"no-case-declarations": 2,
		"no-class-assign": 2,
		"no-compare-neg-zero": 2,
		"no-cond-assign": 2,
		"no-const-assign": 2,
		"no-constant-condition": 2,
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-delete-var": 2,
		"no-dupe-args": 2,
		"no-dupe-class-members": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty": 2,
		"no-empty-character-class": 2,
		"no-empty-pattern": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 2,
		"@stylistic/no-extra-semi": 2,
		"no-fallthrough": 2,
		"no-func-assign": 2,
		"no-global-assign": 2,
		"no-inner-declarations": 2,
		"no-invalid-regexp": 2,
		"no-irregular-whitespace": 2,
		"no-misleading-character-class": 2,
		"@stylistic/no-mixed-spaces-and-tabs": 2,
		"no-new-symbol": 2,
		"no-obj-calls": 2,
		"no-octal": 2,
		"no-prototype-builtins": 2,
		"no-redeclare": 2,
		"no-regex-spaces": 2,
		"no-self-assign": 2,
		"no-shadow-restricted-names": 2,
		"no-sparse-arrays": 2,
		"no-this-before-super": 2,
		"no-undef": 2,
		"no-unexpected-multiline": 2,
		"no-unreachable": 2,
		"no-unsafe-finally": 2,
		"no-unsafe-negation": 2,
		"no-unused-labels": 2,
		"no-useless-catch": 2,
		"no-useless-escape": 2,
		"no-with": 2,
		"require-yield": 2,
		"use-isnan": 2,
		"valid-typeof": 2,
		"no-var": 2,
		"@stylistic/one-var-declaration-per-line": 2,
		"@stylistic/space-infix-ops": 2,
		"@stylistic/keyword-spacing": 2,
		"@stylistic/comma-dangle": ["error", "always-multiline"],
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
			},
		},
	],
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
		"mocha": true,
		"jest": true,
	},
}

//

// module.exports = {
// 	"parserOptions": {
// 		"ecmaVersion": 11,
// 		"sourceType": "module",
// 		"ecmaFeatures": {
// 			"jsx": true
// 		}
// 	},
// 	"overrides": [
// 		{
// 			"files": [
// 				"**/*.ts",
// 				"**/*.tsx"
// 			],
// 			"parser": "@typescript-eslint/parser",
// 			"rules": {
// 				"no-unused-vars": "off",
// 				"@typescript-eslint/no-unused-vars": [
// 					2,
// 					{
// 						"vars": "all",
// 						"args": "none",
// 						"ignoreRestSiblings": true
// 					}
// 				],
// 				"@typescript-eslint/no-explicit-any": "off"
// 			},
// 			"extends": [
// 				"eslint:recommended",
// 				"plugin:react/recommended",
// 				"plugin:@typescript-eslint/recommended"
// 			],
// 			"plugins": [
// 				"@typescript-eslint",
// 				"react",
// 				"react-hooks"
// 			]
// 		}
// 	],
// 	"extends": [
// 		"eslint:recommended",
// 		"plugin:react/recommended"
// 	],
// 	"rules": {
// 		"react-hooks/rules-of-hooks": "error",
// 		"react-hooks/exhaustive-deps": "warn",
// 		"prefer-const": 2,
// 		"no-unused-vars": [
// 			2,
// 			{
// 				"vars": "all",
// 				"args": "none",
// 				"ignoreRestSiblings": true
// 			}
// 		],
// 		"indent": [
// 			"error",
// 			"tab",
// 			{
// 				"flatTernaryExpressions": true
// 			}
// 		],
// 		"space-before-blocks": 2,
// 		"quotes": [
// 			2,
// 			"double",
// 			{
// 				"avoidEscape": true
// 			}
// 		],
// 		"constructor-super": 2,
// 		"for-direction": 2,
// 		"getter-return": 2,
// 		"no-async-promise-executor": 2,
// 		"no-case-declarations": 2,
// 		"no-class-assign": 2,
// 		"no-compare-neg-zero": 2,
// 		"no-cond-assign": 2,
// 		"no-const-assign": 2,
// 		"no-constant-condition": 2,
// 		"no-control-regex": 2,
// 		"no-debugger": 2,
// 		"no-delete-var": 2,
// 		"no-dupe-args": 2,
// 		"no-dupe-class-members": 2,
// 		"no-dupe-keys": 2,
// 		"no-duplicate-case": 2,
// 		"no-empty": 2,
// 		"no-empty-character-class": 2,
// 		"no-empty-pattern": 2,
// 		"no-ex-assign": 2,
// 		"no-extra-boolean-cast": 2,
// 		"no-extra-semi": 2,
// 		"no-fallthrough": 2,
// 		"no-func-assign": 2,
// 		"no-global-assign": 2,
// 		"no-inner-declarations": 2,
// 		"no-invalid-regexp": 2,
// 		"no-irregular-whitespace": 2,
// 		"no-misleading-character-class": 2,
// 		"no-mixed-spaces-and-tabs": 2,
// 		"no-new-symbol": 2,
// 		"no-obj-calls": 2,
// 		"no-octal": 2,
// 		"no-prototype-builtins": 2,
// 		"no-redeclare": 2,
// 		"no-regex-spaces": 2,
// 		"no-self-assign": 2,
// 		"no-shadow-restricted-names": 2,
// 		"no-sparse-arrays": 2,
// 		"no-this-before-super": 2,
// 		"no-undef": 2,
// 		"no-unexpected-multiline": 2,
// 		"no-unreachable": 2,
// 		"no-unsafe-finally": 2,
// 		"no-unsafe-negation": 2,
// 		"no-unused-labels": 2,
// 		"no-useless-catch": 2,
// 		"no-useless-escape": 2,
// 		"no-with": 2,
// 		"require-yield": 2,
// 		"use-isnan": 2,
// 		"valid-typeof": 2,
// 		"no-var": 2,
// 		"one-var-declaration-per-line": 2,
// 		"space-infix-ops": 2,
// 		"keyword-spacing": 2
// 	},
// 	"plugins": [
// 		"react",
// 		"react-hooks"
// 	],
// 	"env": {
// 		"browser": true,
// 		"node": true,
// 		"es6": true,
// 		"mocha": true,
// 		"jest": true
// 	},
// 	"settings": {
// 		"react": {
// 			"pragma": "React",
// 			"version": "detect"
// 		}
// 	}
// }

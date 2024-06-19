const config = require("./.eslintrc.js");

module.exports = {
	...config,
	rules: {
		...config.rules,
		"react-hooks/rules-of-hooks": "off",
		"react-hooks/exhaustive-deps": "off",
	},
	"overrides": [
		{
			...config.overrides[0],
			rules: {
				...config.overrides[0].rules,
				"@typescript-eslint/no-explicit-any": "off",
			},
		},
	],
};

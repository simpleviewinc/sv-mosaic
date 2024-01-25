const config = require("./.eslintrc.js");

module.exports = {
	...config,
	rules: {
		...config.rules,
		"react-hooks/rules-of-hooks": "off",
		"react-hooks/exhaustive-deps": "off",
	}
};

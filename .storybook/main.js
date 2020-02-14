const webpack_config = require("../webpack.config.js");

module.exports = {
	stories: ['../src/**/*.stories.tsx'],
	addons : ["@storybook/addon-knobs/register"],
	webpackFinal : (config) => {
		return {
			...config,
			module : {
				...config.module,
				rules : webpack_config.module.rules
			},
			resolve : {
				...config.resolve,
				extensions : [
					...config.resolve.extensions,
					...webpack_config.resolve.extensions
				]
			},
			watchOptions : webpack_config.devServer.watchOptions
		}
	}
}
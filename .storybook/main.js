const webpack_config = require("../webpack.config.js");

module.exports = {
	stories: ['../src/**/*.stories.[tj]s'],
	webpackFinal : (config) => {
		return {
			...config,
			module : {
				...config.module,
				rules : webpack_config.module.rules
			},
			watchOptions : webpack_config.devServer.watchOptions
		}
	}
}
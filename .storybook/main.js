const webpack_config = require("../webpack.config.js");
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const path = require("path");

module.exports = {
	stories: [
		"../src/index.stories.mdx",
		"../src/**/*.stories.(tsx|mdx)"
	],
	addons : [
		"@storybook/addon-knobs/register",
		{
			name : "@storybook/addon-docs",
			options: {
				configureJSX: true,
				babelOptions: {},
				sourceLoaderOptions: null,
			}
		}
	],
	webpackFinal : async (config) => {
		config.module.rules.push({
			test : /\.(ts|tsx)$/,
			use : [
				{
					loader : "ts-loader"
				}
			]
		});

		config.resolve.extensions.push(".ts", ".tsx");

		config.watchOptions = webpack_config.devServer.watchOptions;

		return config;
	}
}
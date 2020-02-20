const webpack_config = require("../webpack.config.js");
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const path = require("path");

module.exports = {
	stories: ['../src/**/*.stories.(tsx|mdx)'],
	addons : [
		// "@storybook/addon-knobs/register",
		// "@storybook/addon-docs"
		// "@storybook/preset-typescript"
		// {
		// 	name : "@storybook/preset-typescript",
		// 	options : {
		// 		tsLoaderOptions : {
		// 			configFile : path.resolve(__dirname, "../tsconfig.json")
		// 		}
		// 	}
		// },
		{
			name : "@storybook/addon-docs",
			options: {
				configureJSX: true,
				babelOptions: {},
				sourceLoaderOptions: null,
			}
		},
		// "@storybook/addon-docs/register"
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
	// webpackFinal: (config) => {
	// 	// delete config.module.rules[2].include;
	// 	config.module.rules[2].include = [
	// 		path.resolve(__dirname, "../src")
	// 	]

	// 	console.log("config", JSON.stringify(config.module.rules, null, "\t"));

	// 	console.log(config.module.rules)
	// 	console.log(config.resolve.extensions);
	// 	console.log(config);
	// 	return config;
	// }
	// webpackFinal : (config) => {
	// 	return {
	// 		...config,
	// 		module : {
	// 			...config.module,
	// 			rules : [
	// 				...webpack_config.module.rules,
	// 				{
	// 					test : /\.stories\.mdx$/,
	// 					use : [
	// 						{
	// 							loader : "ts-loader"
	// 						},
	// 						{
	// 							loader : "@mdx-js/loader",
	// 							options : {
	// 								compilers : [createCompiler({})]
	// 							}
	// 						}
	// 					]
	// 				}
	// 			]
	// 		},
	// 		resolve : {
	// 			...config.resolve,
	// 			extensions : [
	// 				...config.resolve.extensions,
	// 				...webpack_config.resolve.extensions,
	// 				".mdx"
	// 			]
	// 		},
	// 		watchOptions : webpack_config.devServer.watchOptions
	// 	}
	// }
}
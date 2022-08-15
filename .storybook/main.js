// const webpack = require("webpack");
const path = require("path");

module.exports = {
	stories: [
		"../src/index.stories.mdx",
		// "../src/forms/FormFieldText/FormFieldText.stories.@(js|jsx|ts|tsx|md|mdx)",
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/preset-create-react-app",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
	features: {
		interactionsDebugger: true,
	},
	webpackFinal: async (config) => {
		config.resolve.alias["@root"] = path.resolve(__dirname, '/../src/');

		return config;
	}
};

// const webpack_config = require("../webpack.config.js");

// module.exports = {
// 	stories: [
// 		// load the main index file first so it is where a user starts when they hit the instance
// 		"../src/index.stories.mdx",
// 		"../src/**/*.stories.(tsx|mdx)"
// 	],
// 	addons: [
// 		"@storybook/addon-knobs/register",
// 		//'@storybook/addon-viewport',
// 		{
// 			name: "@storybook/addon-docs",
// 			options: {
// 				configureJSX: true,
// 				babelOptions: {},
// 				sourceLoaderOptions: null,
// 			}
// 		}
// 	],
// 	webpackFinal: async (config) => {
// 		config.module.rules.push({
// 			test: /\.(ts|tsx)$/,
// 			use: [
// 				{
// 					loader: "ts-loader",
// 					options: {
// 						transpileOnly: true
// 					}
// 				}
// 			]
// 		});

// 		config.resolve.extensions.push(".ts", ".tsx");

// 		config.watchOptions = webpack_config.devServer.watchOptions;

// 		config.resolve.alias["@root"] = `${__dirname}/../src`;

// 		return config;
// 	}
// }

//WEBPACK.CONFIG.JS
// const path = require("path");
// // const webpack = require("webpack");

// module.exports = {
// 	// entry: ["react-hot-loader/patch", "./src/examples/index.jsx"],
// 	// module: {
// 	// 	rules: [
// 	// 		{
// 	// 			test: /\.(ts|tsx)$/,
// 	// 			loader : "ts-loader"
// 	// 		},
// 	// 		{
// 	// 			test : /\.css$/,
// 	// 			loader : ["style-loader", "css-loader"]
// 	// 		},
// 	// 		{
// 	// 			test: /\.(js|jsx)$/,
// 	// 			exclude: /node_modules/,
// 	// 			loader: "babel-loader",
// 	// 			options: { presets: ["@babel/env"] }
// 	// 		}
// 	// 	]
// 	// },
// 	// resolve: {
// 	// 	extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
// 	// 	alias : {
// 	// 		"react-dom": "@hot-loader/react-dom"
// 	// 	}
// 	// },
// 	output: {
// 		path: path.resolve(__dirname, "docs/dist/"),
// 		publicPath: "/dist/",
// 		filename: "bundle.js",
// 		globalObject: "this",
// 	},
// 	devServer: {
// 		contentBase: path.join(__dirname, "docs/"),
// 		port: 10000,
// 		hotOnly: true,
// 		host: "0.0.0.0",
// 		disableHostCheck: true,
// 		watchOptions: {
// 			aggregateTimeout: 300,
// 			poll: 1000
// 		}
// 	},
// 	// plugins: [new webpack.HotModuleReplacementPlugin()]
// };

//.BABELRC FILE
// {
// 	"presets": [
// 		// "@babel/env",
// 		"@babel/preset-react",
// 		"@bable/preset-env"
// 	],
// 	"plugins": [
// 		"@babel/plugin-transform-runtime",
// 		"react-hot-loader/babel"
// 	]
// }

//SCRIPTS
// "scripts": {
// 	"test": "jest",
// 	"tsc": "tsc",
// 	"start": "yarn run storybook",
// 	"build": "yarn run build:types && yarn run build:rollup",
// 	"build:storybook": "build-storybook -c .storybook -o docs",
// 	"build:types": "./scripts/build-types",
// 	"build:rollup": "rollup -c",
// 	"docker": "./scripts/build && ./scripts/run || true",
// 	"conditional-publish": "./scripts/conditional-publish",
// 	"storybook": "start-storybook -p 10000",
// 	"style": "eslint . --fix",
// 	"sync-state": "./scripts/sync-state",
// 	"types": "tsc --noEmit"
// },
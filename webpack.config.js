const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: ["react-hot-loader/patch", "./src/examples/index.jsx"],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader : "ts-loader",
			},
			{
				test : /\.css$/,
				loader : ["style-loader", "css-loader"],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] },
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
		alias : {
			"react-dom": "@hot-loader/react-dom",
		},
	},
	output: {
		path: path.resolve(__dirname, "docs/dist/"),
		publicPath: "/dist/",
		filename: "bundle.js",
		globalObject: "this",
	},
	devServer: {
		contentBase: path.join(__dirname, "docs/"),
		port : 10000,
		hotOnly: true,
		host : "0.0.0.0",
		disableHostCheck : true,
		watchOptions : {
			aggregateTimeout: 300,
			poll: 1000,
		},
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};

const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: ["react-hot-loader/patch", "./src/index.jsx"],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
		alias : {
			"react-dom": "@hot-loader/react-dom"
		}
	},
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "docs/"),
		port : 10000,
		hotOnly: true,
		host : "0.0.0.0",
		disableHostCheck : true,
		watchOptions : {
			aggregateTimeout: 300,
			poll: 1000
		}
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};
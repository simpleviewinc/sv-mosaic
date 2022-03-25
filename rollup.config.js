import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";

// correct exports for the prop-types package
import propTypes from "prop-types";

const EXTERNALS = [
	/^@material-ui\/core\//,
	/^@material-ui\/icons\//,
	/^@material-ui\/pickers\//,
	"i18next",
	"jsvalidator",
	"lodash",
	"react",
	"react-dom",
	"react-is",
	"react-i18next",
	"react-transition-group",
	"styled-components",
	"react-draft-wysiwyg",
	"eventemitter3"
];

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

export default [
	{
		input: "src/index.ts",
		external: id => {
			for (const external of EXTERNALS) {
				if (typeof external === "string" ? id === external : id.match(external)) {
					return true;
				}
			}
		},
		output: {
			file: pkg.main,
			format: "cjs"
		},
		plugins: [
			resolve({ extensions: EXTENSIONS }),
			commonjs({
				namedExports: {
					"prop-types": Object.keys(propTypes)
				}
			}),
			json(),
			babel({
				extensions: EXTENSIONS,
				exclude: ["node_modules/**"],
				presets: ["@babel/env", "@babel/typescript", "@babel/preset-react"],
				plugins: [
					[
						"module-resolver",
						{
							"root": ["./"],
							"alias": {
								"@root": "./src"
							}
						}
					]
				],
				babelrc: false
			}),
			postcss(),
		]
	}
];
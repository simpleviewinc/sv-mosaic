import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

// correct exports for the prop-types package
import propTypes from "prop-types";

const EXTERNALS = [
	/^@material-ui\/core\//,
	/^@material-ui\/icons\//,
	/^@material-ui\/pickers\//,
	"jsvalidator",
	"lodash",
	"react",
	"styled-components"
];

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

export default [
	{
		input : "src/index.ts",
		external : id => {
			for(let external of EXTERNALS) {
				if (id.match(external)) {
					return true;
				}
			}
		},
		output : {
			file : pkg.main,
			format : "cjs"
		},
		plugins : [
			resolve({ extensions : EXTENSIONS }),
			commonjs({
				namedExports : {
					"prop-types" : Object.keys(propTypes)
				}
			}),
			babel({
				extensions : EXTENSIONS,
				exclude : ["node_modules/**"],
				presets : ["@babel/env", "@babel/typescript", "@babel/preset-react"],
				babelrc : false
			})
		]
	}
];
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const EXTERNALS = [
	/^@material-ui\/core\//,
	/^@material-ui\/icons\//,
	"jsvalidator",
	"lodash",
	"react",
	"styled-components"
];

export default [
	{
		input : "src/index.js",
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
			babel({
				exclude : ["node_modules/**"],
				presets : ["@babel/env", "@babel/preset-react"],
				babelrc : false
			})
		]
	}
];
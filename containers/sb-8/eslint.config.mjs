import baseConfig from "@simpleview/sv-mosaic-eslint/base";
import storybook from "eslint-plugin-storybook";

export default [
	...baseConfig,
	...storybook.configs["flat/recommended"],
	{
		ignores: [
			"storybook-static",
		],
	},
];

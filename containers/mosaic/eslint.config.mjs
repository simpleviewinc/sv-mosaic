import baseConfig from "@simpleview/sv-mosaic-eslint/base";

export default [
	...baseConfig,
	{
		ignores: [
			"dist",
			"coverage",
		],
	},
];

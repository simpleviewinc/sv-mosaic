import baseConfig from "@simpleview/sv-mosaic-eslint/base";

export default [
	...baseConfig,
	{
		rules: {
			"no-restricted-imports": [
				"error",
				{
					patterns: [{
						regex: "@mui\\/material$",
						message: "Do not import from the root of material UI. For example, instead of `import { InputAdornment } from \"@mui/material\"`, do `import InputAdornment from \"@mui/material/InputAdornment\"`",
					}],
				},
			],
		},
	},
	{
		ignores: [
			"dist",
			"coverage",
		],
	},
];

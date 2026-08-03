import "./mosaic-theme.css";

import { create } from "@storybook/theming";
// @ts-expect-error Declaring *.png modules doesn't work.
import MosaicLogo from "./Mosaic.png";

export default create({
	base: "dark",
	brandTitle: "Mosaic",
	brandUrl: "https://github.com/simpleviewinc/sv-mosaic",
	brandImage: MosaicLogo,
	brandTarget: "_self",

	// Typography settings
	fontBase: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
	fontCode: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace',
});

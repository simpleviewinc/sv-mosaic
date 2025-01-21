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
});

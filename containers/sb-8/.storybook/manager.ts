import "./env-banner";
import { addons } from "@storybook/manager-api";
import MosaicTheme from "./MosaicTheme";

addons.setConfig({
	theme: MosaicTheme,
});

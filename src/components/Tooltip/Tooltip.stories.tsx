import * as React from "react";
import { ReactElement } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// Components
import Tooltip from "./Tooltip";
import useTooltip from "./useTooltip";

export default {
	title: "Components/Tooltip",
	decorators: [withKnobs],
} as Meta;

const tooltipContentOptions = ["text", "image"];

export const Example = (): ReactElement => {
	const { anchorProps, tooltipProps } = useTooltip();
	const tooltipContent = select("Tooltip content", tooltipContentOptions, "text");
	const tooltipText = text("Tooltip text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque");
	const tooltipImage = text("Tooltip image", "http://placekitten.com/200/300");
	const maxWidth = text("Max Width", "");

	return (
		<>
			<InfoOutlinedIcon style={{ margin: "140px 30px" }} {...anchorProps} />
			<Tooltip
				{...tooltipProps}
				maxWidth={maxWidth !== "" ? maxWidth : undefined}
			>
				{tooltipContent === "text" ? tooltipText : <img style={{ display: "block", maxWidth: "100%" }} alt="Tooltip Image" src={tooltipImage} />}
			</Tooltip>
		</>
	);
};

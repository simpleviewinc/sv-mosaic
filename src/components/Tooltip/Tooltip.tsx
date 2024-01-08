import * as React from "react";
import { ReactElement } from "react";
import { TooltipProps } from ".";
import { TooltipArrow, TooltipPopper } from "./Tooltip.styled";

const tooltipOffset = [
	{
		name: "offset",
		options: {
			offset: [0, 10],
		},
	},
];

const Tooltip = (props: TooltipProps): ReactElement => {
	const {
		children,
		open,
		placement = "bottom-start",
		anchorEl,
		id
	} = props;

	return (
		<TooltipPopper
			open={open}
			anchorEl={anchorEl}
			style={{ zIndex: 1500, pointerEvents: "none" }}
			placement={placement}
			modifiers={tooltipOffset}
			role="tooltip"
			id={id}
			data-testid="tooltip-test-id"
		>
			<TooltipArrow className="arrow" />
			{children}
		</TooltipPopper>
	);
}

export default Tooltip;

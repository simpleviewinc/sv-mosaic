import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import type { TooltipProps } from ".";
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
		id,
		maxWidth,
	} = props;

	const style = useMemo(() => ({ maxWidth }), [maxWidth]);

	return (
		<TooltipPopper
			open={open}
			anchorEl={anchorEl}
			placement={placement}
			modifiers={tooltipOffset}
			role="tooltip"
			id={id}
			data-testid="tooltip-test-id"
			style={style}
		>
			<TooltipArrow className="arrow" />
			{children}
		</TooltipPopper>
	);
};

export default Tooltip;

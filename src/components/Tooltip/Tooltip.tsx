import * as React from "react";
import { ReactElement } from "react";
import { TooltipProps } from ".";
import { StyledDefaultTooltip } from "./Tooltip.styled";

const Tooltip = (props: TooltipProps): ReactElement => {
	const {
		className = "",
		text = "",
		children,
		open,
		onClose,
		onOpen,
		placement = "top-start"
	} = props;

	return (
		<StyledDefaultTooltip
			className={className}
			open={open}
			onClose={onClose}
			onOpen={onOpen}
			title={text}
			arrow
			placement={placement}
			data-testid='tooltip-test-id'
		>
			{children}
		</StyledDefaultTooltip>
	);
}

export default Tooltip;

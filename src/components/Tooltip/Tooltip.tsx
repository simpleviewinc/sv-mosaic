import * as React from "react";
import { ReactElement } from "react";
import { TooltipProps } from ".";
import { StyledAdvancedTooltip, StyledDefaultTooltip } from "./Tooltip.styled";

const Tooltip = (props: TooltipProps): ReactElement => {
	const {
		className,
		text = "",
		children,
		open,
		onClose,
		onOpen,
		type,
		placement = "top-start"
	} = props;

	return type !== "advanced" ? (
		<StyledDefaultTooltip
			open={open}
			onClose={onClose}
			onOpen={onOpen}
			title={text}
			PopperProps={{
				disablePortal: true,
			}}
			data-testid='tooltip-test-id'
		>
			{children}
		</StyledDefaultTooltip>
	) : (
		<StyledAdvancedTooltip
			className={className}
			open={open}
			onClose={onClose}
			onOpen={onOpen}
			title={text}
			arrow
			placement={placement}
			PopperProps={{
				disablePortal: true,
			}}
			data-testid='tooltip-test-id'
		>
			{children}
		</StyledAdvancedTooltip>
	);
}

export default Tooltip;
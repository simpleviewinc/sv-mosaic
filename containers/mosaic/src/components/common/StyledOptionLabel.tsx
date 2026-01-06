import type { PropsWithChildren } from "react";
import React from "react";
import styled from "styled-components";
import { Text } from "../Typography";
import theme from "@root/theme";
import Tooltip, { useTooltip } from "../Tooltip";
import { TooltipIcon } from "./TooltipIcon";

export const StyledOptionLabelText = styled(Text)
	.attrs<{ $disabled?: boolean }>(({ $disabled }) => ({
		size: "lg",
		color: $disabled ? theme.color.gray[600] : undefined,
		tag: "div",
	}))`
		max-width: 414px;
		padding-top: ${theme.spacing("5px")};
	`;

const StyledTooltipIcon = styled(TooltipIcon)`
	display: inline-block;
	margin-left: ${theme.spacing(1)};
	vertical-align: middle;
`;

const StyledRequired = styled.span`
	display: inline-block;
	color: ${theme.color.red[600]};
	margin-left: ${theme.spacing(1)};
`;

export function StyledOptionLabel({
	children,
	disabled,
	description,
	required,
}: PropsWithChildren<{ disabled?: boolean; required?: boolean; description?: string }>) {
	const { anchorProps, tooltipProps } = useTooltip();

	return (
		<StyledOptionLabelText $disabled={disabled}>
			{children}
			{required && <StyledRequired>*</StyledRequired>}
			{description && (
				<>
					<StyledTooltipIcon {...anchorProps} />
					<Tooltip {...tooltipProps}>
						{description}
					</Tooltip>
				</>
			)}
		</StyledOptionLabelText>
	);
}

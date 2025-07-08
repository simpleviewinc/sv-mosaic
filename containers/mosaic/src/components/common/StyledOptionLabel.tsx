import type { PropsWithChildren } from "react";
import React from "react";
import styled from "styled-components";
import { Text } from "../Typography";
import theme from "@root/theme";

export const StyledOptionLabelText = styled(Text)
	.attrs<{ $disabled?: boolean }>(({ $disabled }) => ({
		size: "lg",
		color: $disabled ? theme.color.gray[600] : undefined,
	}))`
		max-width: 414px;
	`;

const StyledRequired = styled.span`
	display: inline-block;
	color: ${theme.color.red[600]};
	margin-left: ${theme.spacing(1)};
`;

export function StyledOptionLabel({
	children,
	disabled,
	required,
}: PropsWithChildren<{ disabled?: boolean; required?: boolean }>) {
	return (
		<StyledOptionLabelText $disabled={disabled}>
			{children}
			{required && <StyledRequired>*</StyledRequired>}
		</StyledOptionLabelText>
	);
}

import type { ReactElement, ReactNode } from "react";
import React from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";

import type { TransientProps } from "@root/types";

import theme from "@root/theme";
import { containerQuery } from "@root/utils/css";
import Tooltip, { useTooltip } from "../Tooltip";
import testIds from "@root/utils/testIds";
import { TooltipIcon } from "../common";

const LabelWrapper = styled.div<TransientProps<LabelProps, "required">>`
	display: flex;
	align-items: end;
	margin-bottom: 8px;
	font-family: ${theme.fontFamily};
	gap: 8px;

	.MuiInputLabel-root {
		font-family: inherit;
		font-size: 16px;
		color:  ${theme.newColors.almostBlack["100"]};
		word-wrap: break-word;
		text-overflow: clip;
		white-space: normal;
	}
`;

const InputLabelDiv = styled.div`
	font-family: inherit;
	font-size: 16px;
	color:  ${theme.newColors.almostBlack["100"]};
	word-wrap: break-word;
`;

const CharCounterWrapper = styled.div<{ $invalid?: boolean }>`
	color: ${({ $invalid }) => $invalid ? theme.newColors.darkRed["100"] : theme.newColors.grey3["100"]};
	font-size: 12px;
	margin-left: auto;
`;

const StyledInputLabel = styled(InputLabel)`
	font-weight: ${theme.fontWeight.semiBold} !important;
  	align-self: center;
	color: ${theme.newColors.grey4["100"]} !important;
`;

const StyledRequiredIndicator = styled.span`
	color: ${theme.newColors.darkRed["100"]};
`;

const StyledTooltipWrapper = styled.div<{ $colsInRow?: number }>`
  	${({ $colsInRow = 1 }) => $colsInRow === 1 && `
		${containerQuery("sm", "FORM_COL")} {
			display: none;
		}
	`}

	svg {
		vertical-align: middle;
	}
`;

interface LabelProps {
	className?: string;
	required?: boolean;
	name?: string;
	children?: ReactNode;
	value?: string;
	limit?: [number, number];
	instructionText?: string;
	colsInRow?: number;
	as?: "label" | "div";
}

const Label = (props: LabelProps): ReactElement => {
	const {
		children,
		className,
		required,
		name,
		limit,
		instructionText,
		colsInRow,
		as = "label",
	} = props;

	const { anchorProps, tooltipProps } = useTooltip();

	return (
		<LabelWrapper className={className}>
			<StyledInputLabel
				htmlFor={as === "label" && name ? `${name}-input` : undefined}
				as={as === "label" ? InputLabel : InputLabelDiv}
				data-testid={name && `${testIds.FORM_FIELD_LABEL}:${name}`}
				title={typeof children === "string" ? children : undefined}
			>
				{children}
				{required && <StyledRequiredIndicator>*</StyledRequiredIndicator>}
			</StyledInputLabel>
			{instructionText && (
				<StyledTooltipWrapper $colsInRow={colsInRow}>
					<TooltipIcon {...anchorProps} />
					<Tooltip {...tooltipProps}>
						{instructionText}
					</Tooltip>
				</StyledTooltipWrapper>
			)}
			{limit && (
				<CharCounterWrapper $invalid={limit[0] > limit[1]}>
					{limit[0]}
					/
					{limit[1]}
				</CharCounterWrapper>
			)}
		</LabelWrapper>
	);
};

export default Label;

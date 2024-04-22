import * as React from "react";
import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

// Material UI
import InputLabel from "@mui/material/InputLabel";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import theme from "@root/theme";
import { TransientProps } from "@root/types";
import { containerQuery } from "@root/utils/css";
import Tooltip, { useTooltip } from "../Tooltip";
import testIds from "@root/utils/testIds";

const LabelWrapper = styled.div<TransientProps<LabelProps, "required">>`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	font-family: ${theme.fontFamily};
	gap: 8px;
	height: 28px;

	.MuiInputLabel-root {
		font-family: inherit;
		font-size: 16px;
		color:  ${theme.newColors.almostBlack["100"]};
		word-wrap: break-word;
	}
`;

const CharCounterWrapper = styled.div<{ $invalid?: boolean }>`
	color: ${({ $invalid }) => $invalid ? theme.newColors.darkRed["100"] : theme.newColors.grey3["100"]};
	font-size: 12px;
	margin-left: auto;
	// Aligns the bottom of the character counter with the field label
	align-self: end;
	margin-bottom: 4px;
`;

const StyledInfoOutlinedIcon = styled(InfoOutlinedIcon)`
  && {
	fill: ${theme.newColors.realTeal["100"]};
	font-size: 16px;
	width: 24px;
	height: 24px;
  }
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
				as={as}
				data-testid={name && `${testIds.FORM_FIELD_LABEL}:${name}`}
			>
				{children}
				{required && <StyledRequiredIndicator>*</StyledRequiredIndicator>}
			</StyledInputLabel>
			{instructionText && (
				<StyledTooltipWrapper $colsInRow={colsInRow}>
					<StyledInfoOutlinedIcon {...anchorProps} />
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

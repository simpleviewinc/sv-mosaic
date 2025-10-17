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
import { classnames } from "@root/utils/string";

const LabelWrapper = styled.div<TransientProps<LabelProps, "required">>`
	display: flex;
	align-items: end;
	margin-bottom: 8px;
	gap: 8px;

	.MuiInputLabel-root {
		font-size: ${theme.fontSize.text.lg};
		line-height: ${theme.line.tight};
		font-weight: ${theme.weight.medium};
		color:  ${theme.color.black};
		word-wrap: break-word;
		text-overflow: clip;
		white-space: normal;
	}
`;

const InputLabelDiv = styled.div`
	font-size: ${theme.fontSize.text.lg};
	line-height: ${theme.line.tight};
	font-weight: ${theme.weight.medium};
	word-wrap: break-word;
`;

const CharCounterWrapper = styled.div<{ $invalid?: boolean }>`
	color: ${({ $invalid }) => $invalid ? theme.color.red[600] : theme.color.gray[600]};
	font-size: ${theme.fontSize.text.sm};
	line-height: ${theme.line.loose};
	margin-left: auto;
`;

const StyledInputLabel = styled(InputLabel)<{ $isHeader?: boolean }>`
	font-weight: ${theme.weight.medium};
  	align-self: center;

	${({ $isHeader }) => $isHeader ? `
		font-weight: ${theme.weight.bold};
		font-size: ${theme.fontSize.text["2xl"]};
		margin-bottom: ${theme.spacing(1)};
	` : `
		font-weight: ${theme.weight.medium};
	`}
`;

const StyledRequiredIndicator = styled.span`
	color: ${theme.color.red[600]};
	margin-left: ${theme.spacing(1)};
`;

const StyledTooltipWrapper = styled.div<{ $colsInRow?: number; $alwaysShow?: boolean }>`
  	${({ $alwaysShow, $colsInRow = 1 }) => !$alwaysShow && $colsInRow === 1 && `
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
	hideLabel?: boolean;
	value?: string;
	limit?: [number, number];
	instructionText?: string;
	forceInstructionTooltip?: boolean;
	colsInRow?: number;
	as?: "label" | "div";
	isGroup?: boolean;
	useHeaderLabel?: boolean;
}

const Label = (props: LabelProps): ReactElement => {
	const {
		children,
		hideLabel,
		className,
		required,
		name,
		limit,
		instructionText,
		forceInstructionTooltip,
		colsInRow,
		as = "label",
		isGroup,
		useHeaderLabel,
	} = props;

	const { anchorProps, tooltipProps } = useTooltip();

	if (hideLabel && !instructionText && !limit) {
		return;
	}

	return (
		<LabelWrapper className={className}>
			{!hideLabel && (
				<StyledInputLabel
					htmlFor={as === "label" && name ? `${name}-input` : undefined}
					as={as === "label" ? InputLabel : InputLabelDiv}
					data-testid={name && `${testIds.FORM_FIELD_LABEL}:${name}`}
					title={typeof children === "string" ? children : undefined}
					className={classnames("Mos-FieldLabel", isGroup && "Mos-GroupLabel")}
					$isHeader={useHeaderLabel}
				>
					{children}
					{required && <StyledRequiredIndicator>*</StyledRequiredIndicator>}
				</StyledInputLabel>
			)}
			{instructionText && (
				<StyledTooltipWrapper
					$colsInRow={colsInRow}
					$alwaysShow={forceInstructionTooltip}
					className="Mos-FieldTooltip"
				>
					<TooltipIcon {...anchorProps} />
					<Tooltip {...tooltipProps}>
						{instructionText}
					</Tooltip>
				</StyledTooltipWrapper>
			)}
			{limit && (
				<CharCounterWrapper
					className="Mos-CharacterCount"
					$invalid={limit[0] > limit[1]}
				>
					{limit[0]}
					/
					{limit[1]}
				</CharCounterWrapper>
			)}
		</LabelWrapper>
	);
};

export default Label;

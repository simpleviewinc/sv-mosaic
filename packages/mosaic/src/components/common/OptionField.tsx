import type { ReactNode } from "react";
import React from "react";
import styled from "styled-components";

import type { Theme } from "@root/theme";
import theme from "@root/theme";

import { StyledOptionLabel } from "./StyledOptionLabel";

export type OptionLabelPlacement = "bottom" | "end" | "start" | "top";

const StyledOptionRow = styled.div<{
	$disabled?: boolean;
	$gap?: Parameters<Theme["spacing"]>;
	$placement?: OptionLabelPlacement;
}>`
	display: inline-flex;
	align-items: start;
	vertical-align: middle;
	gap: ${({ $gap = [1] }) => theme.spacing(...$gap)};
	margin-left: 0;
	margin-right: 0;
	cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
	flex-direction: ${({ $placement = "end" }) => {
		if ($placement === "start") {
			return "row-reverse";
		}

		if ($placement === "top") {
			return "column-reverse";
		}

		if ($placement === "bottom") {
			return "column";
		}

		return "row";
	}};
`;

const StyledVisibleLabel = styled.span`
	display: contents;
`;

const StyledHiddenLabelText = styled.span<{ $disabled?: boolean }>`
	cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
`;

export interface OptionFieldProps {
	/**
	 * Id of the input. A visible label that is the accessible name
	 * points at this id with `for`.
	 */
	id: string;
	control: ReactNode;
	label?: ReactNode;
	description?: string;
	required?: boolean;
	disabled?: boolean;
	labelPlacement?: OptionLabelPlacement;
	gap?: Parameters<Theme["spacing"]>;
	"data-testid"?: string;
}

/**
 * Lays out an option control beside its visible label.
 *
 * The visible text deliberately is not an associated HTML label. NVDA's
 * Firefox browse mode suppresses an input's aria-label when an associated
 * label is present, while exposing the label text as a separate cursor stop.
 * The input receives its name directly and this text is visual-only, leaving
 * one browse-mode stop. Clicking it still forwards to the native input.
 */
export function OptionField({
	id,
	control,
	label,
	description,
	required,
	disabled,
	labelPlacement = "end",
	gap,
	"data-testid": testId,
}: OptionFieldProps) {
	const showLabel = label !== undefined && label !== null && label !== "";

	return (
		<StyledOptionRow
			$disabled={disabled}
			$gap={gap}
			$placement={labelPlacement}
			data-testid={testId}
		>
			{control}
			{showLabel && (
				<StyledVisibleLabel>
					<StyledOptionLabel
						disabled={disabled}
						description={description}
						required={required}
					>
						<StyledHiddenLabelText
							$disabled={disabled}
							aria-hidden="true"
							onClick={disabled ? undefined : () => {
								document.getElementById(id)?.click();
							}}
						>
							{label}
						</StyledHiddenLabelText>
					</StyledOptionLabel>
				</StyledVisibleLabel>
			)}
		</StyledOptionRow>
	);
}

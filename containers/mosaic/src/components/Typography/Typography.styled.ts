import type { RuleSet } from "styled-components";
import styled, { css } from "styled-components";
import theme from "@root/theme";

import type { TypographyVariant } from "./TypographyTypes";
import type { ColorTypes } from "../Button";
import type { Properties } from "csstype";

interface BaseProps {
	$maxLines?: number;
	$color?: ColorTypes;
	$breakAll?: boolean;
	$whiteSpace?: Properties["whiteSpace"];
}

export const base = css<BaseProps>`
	margin: 0;
	padding: 0;
	font-size: inherit;
	font-weight: inherit;
    line-height: 1.5em;

    ${({ $maxLines, $breakAll, $color, $whiteSpace }) => {
		const parts = [
			$maxLines && `
				display: -webkit-box;
				-webkit-line-clamp: ${$maxLines};
				-webkit-box-orient: vertical;
				overflow: hidden;
			`,
			$breakAll && `
				word-break: break-all;
			`,
			$color && `
				color: ${theme.colors[$color]};
			`,
			$whiteSpace && `
				white-space: ${$whiteSpace};
			`,
		];

		return parts.filter(Boolean).join("\n");
	}}
`;
export const variants: Record<TypographyVariant, RuleSet> = {
	title: css`
        font-size: 28px;
        font-weight: ${theme.fontWeight.light};
		color: ${theme.newColors.almostBlack["100"]};
        line-height: 1.2em;
	`,
	subtitle: css`
        font-size: 16px;
		font-weight: 500;
		color: ${theme.newColors.almostBlack["100"]};
	`,
	body: css`
        font-size: 16px;
	`,
	none: css``,
};

export const Component = styled.div<BaseProps & { $variant: TypographyVariant }>`
	${base}
	${({ $variant }) => $variant ? variants[$variant] : ""}
`;

import styled, { RuleSet, css } from "styled-components";
import theme from "@root/theme";

import { TypographyVariant } from "./TypographyTypes";
import { ColorTypes } from "../Button";

interface BaseProps {
    $maxLines?: number
    $color?: ColorTypes,
	$breakAll?: boolean
}

export const base = css<BaseProps>`
	margin: 0;
	padding: 0;
	font-size: inherit;
	font-weight: inherit;
    line-height: 1.5em;

    ${({ $maxLines }) => $maxLines && `
		display: -webkit-box;
		-webkit-line-clamp: ${$maxLines};
		-webkit-box-orient: vertical;
		overflow: hidden;
	`}

	${({ $breakAll }) => $breakAll && `
		word-break: break-all;
	`}

    ${({ $color }) => theme.colors[$color] && `
        color: ${theme.colors[$color]};
    `}
`
export const variants: Record<TypographyVariant, RuleSet> = {
	title: css`
        font-family: ${theme.museoFont};
        font-size: 28px;
        font-weight: ${theme.fontWeight.light};
        line-height: 1.2em;
	`,
	subtitle: css`
        font-family: ${theme.fontFamily};
        font-size: 18px;
        font-weight: 600;
	`,
	body: css`
        font-family: ${theme.fontFamily};
        font-size: 16px;
	`
};

export function styledCache() {
	const cache: Partial<Record<keyof JSX.IntrinsicElements, any>> = {}

	const getComponent = (tag: keyof JSX.IntrinsicElements) => {
		if (!cache[tag]) {
			cache[tag] = styled[tag]<BaseProps & {$variant?: TypographyVariant}>`
				${base}
				${({ $variant }) => $variant ? variants[$variant] : ""}
			`;
		}

		return cache[tag];
	}

	return { getComponent }
}

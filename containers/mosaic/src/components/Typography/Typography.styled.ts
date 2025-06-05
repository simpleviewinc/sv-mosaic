import styled from "styled-components";
import theme from "@root/theme";

import type { Theme } from "@root/theme/theme";
import type { TypographyVariantSize, TypographyVariant, TypographyVariantSizeMap } from "./TypographyTypes";
import type { Properties } from "csstype";
interface BaseProps<T extends TypographyVariant> {
	$maxLines?: number;
	$color?: string;
	$breakAll?: boolean;
	$whiteSpace?: Properties["whiteSpace"];
	$size?: TypographyVariantSize<T> | "inherit";
	$weight?: keyof Theme["weight"];
}

/**
 * It seems counter intuitive to remap the font sizes like this, but
 * my gut is telling me not to tightly couple the size of the Typograhpy
 * component with the font sizes in the theme object.
 */
const variantStyleMap: TypographyVariantSizeMap = {
	body: {
		xs: {
			fontSize: theme.fontSize.body["xs"],
			lineHeight: theme.line["8xloose"],
		},
		sm: {
			fontSize: theme.fontSize.body["sm"],
			lineHeight: theme.line["3xloose"],
		},
		md: {
			fontSize: theme.fontSize.body["md"],
			lineHeight: theme.line["2xloose"],
		},
		lg: {
			fontSize: theme.fontSize.body["lg"],
			lineHeight: theme.line["3xloose"],
		},
		xl: {
			fontSize: theme.fontSize.body["xl"],
			lineHeight: theme.line["4xloose"],
		},
		"2xl": {
			fontSize: theme.fontSize.body["2xl"],
			lineHeight: theme.line["3xloose"],
		},
	},
	display: {
		xs: {
			fontSize: theme.fontSize.display["xs"],
			lineHeight: theme.line.loose,
		},
		sm: {
			fontSize: theme.fontSize.display["sm"],
			lineHeight: theme.line.snug,
		},
		md: {
			fontSize: theme.fontSize.display["md"],
			lineHeight: theme.line.xtight,
		},
		lg: {
			fontSize: theme.fontSize.display["lg"],
			lineHeight: theme.line.tight,
		},
		xl: {
			fontSize: theme.fontSize.display["xl"],
			lineHeight: theme.line["2xtight"],
		},
		"2xl": {
			fontSize: theme.fontSize.display["2xl"],
			lineHeight: theme.line.tight,
		},
	},
	text: {
		xs: {
			fontSize: theme.fontSize.text["xs"],
			lineHeight: theme.line.xloose,
		},
		sm: {
			fontSize: theme.fontSize.text["sm"],
			lineHeight: theme.line.loose,
		},
		md: {
			fontSize: theme.fontSize.text["md"],
			lineHeight: theme.line.normal,
		},
		lg: {
			fontSize: theme.fontSize.text["lg"],
			lineHeight: theme.line.tight,
		},
		xl: {
			fontSize: theme.fontSize.text["xl"],
			lineHeight: theme.line.xtight,
		},
		"2xl": {
			fontSize: theme.fontSize.text["2xl"],
			lineHeight: theme.line.relaxed,
		},
	},
};

export const StyledTypography = styled.div<BaseProps<TypographyVariant> & { $variant: TypographyVariant }>(({
	$variant,
	$size,
	$maxLines,
	$breakAll,
	$color,
	$whiteSpace,
	$weight,
}) => {
	const { fontSize, lineHeight } = $size !== "inherit" ? variantStyleMap[$variant][$size] : {
		fontSize: "inherit",
		lineHeight: "inherit",
	};

	const parts: string[] = [
		`
			margin: 0;
			padding: 0;
			font-size: ${fontSize};
			font-weight: ${theme.weight[$weight]};
			line-height: ${lineHeight};
		`,
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
			color: ${$color};
		`,
		$whiteSpace && `
			white-space: ${$whiteSpace};
		`,
	];

	return parts.filter(Boolean).map(str => str.trim()).join("\n");
});

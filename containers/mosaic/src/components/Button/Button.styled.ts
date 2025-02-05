import styled from "styled-components";
import theme from "@root/theme";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import type { TransientProps } from "@root/types";
import type { ButtonProps } from "./ButtonTypes";

/**
 * For contained, outlined and text, buttons should be
 * - 30px in height for small sizes
 * - 36px in height for medium sizes
 *
 * The base colour is mostly* a direct map of colors
 * found in the theme.ts file. By default:
 *
 * - Backgrounds are
 * 		- The base colour for contained buttons
 * 		- White for outlined buttons
 * 		- Transparent for text and icon buttons
 * - Borders are
 * 		- 2px solid base colour for outlined buttons
 * 		- 0px for contained, text and icon buttons
 * - Text colour is
 * 		- White for contained buttons
 * 		- The base colour for outlined, text and icon buttons
 * - Text transform is
 * 		- Uppercase for contained and outlined buttons
 * 		- None for text buttons
 * 		- N/A for icon buttons
 *
 * * see alternateColors
 *
 */

type ColorType = "text" | "background" | "border";

/**
 * Some colour/variant combinations deviate from the above rules. For example, the lightBlue/contained button
 * has a blue text colour instead of white. These alternative rules are driven by the alternateColors object below.
 * The alternateColors object has a [color].[type].[variant] structure where type is "text" or "background".
 */
const alternateColors: Partial<Record<ButtonProps["color"], Partial<Record<ColorType, Partial<Record<ButtonProps["variant"], string>> | string>>>> = {
	lightBlue: {
		text: theme.colors.blue,
	},
	white: {
		text: {
			contained: theme.colors.almostBlack,
			icon: theme.colors.white,
		},
	},
	yellow: {
		text: {
			contained: theme.colors.almostBlack,
			icon: theme.colors.yellow,
			outlined: theme.colors.almostBlack,
			text: theme.colors.almostBlack,
		},
	},
	gray: {
		text: {
			contained: theme.colors.almostBlack,
			icon:theme.colors.gray,
			outlined: theme.colors.almostBlack,
			text: theme.colors.almostBlack,
		},
		border: {
			outlined: theme.colors.simplyGray,
		},
	},
	black: {
		background: {
			input: theme.newColors.grey1["100"],
		},
		border: {
			input: theme.newColors.simplyGrey["100"],
		},
	},
};

const colorMap: Partial<Record<ButtonProps["color"], keyof typeof theme.colors>> = {
	gray: "gray200",
};

function withAlternateColor(fallback: string, { type, color, variant }: { type: ColorType } & Pick<ButtonProps, "color" | "variant">): string {
	if (alternateColors[color] && alternateColors[color][type]) {
		const altColor = alternateColors[color][type];

		if (typeof altColor === "string") {
			return altColor;
		}

		if (altColor[variant]) {
			return altColor[variant];
		}
	}

	return fallback;
}

function getColorPalette(colorProp: ButtonProps["color"], variant: ButtonProps["variant"]) {
	// Some colours in the ButtonProp["color"] aren't
	// direct maps of the colours in theme.colors, so
	// remap those that aren't.
	const color = colorMap[colorProp] || colorProp;

	const base = theme.colors[color];
	const baseIntense = theme.colors[`${color}Intense`];
	const baseWashed = theme.colors[`${color}Washed`];

	return {
		base,
		background: withAlternateColor(variant === "contained" ? base : "transparent", { type: "background", color: colorProp, variant }),
		border: withAlternateColor(variant === "outlined" ? base : "transparent", { type: "border", color: colorProp, variant }),
		text: withAlternateColor(variant === "contained" ? "white" : base, { type: "text", color: colorProp, variant }),
		hover: {
			background: variant === "contained" ? baseIntense : baseWashed,
			border: withAlternateColor(variant === "outlined" ? base : "transparent", { type: "border", color: colorProp, variant }),
		},
	};
}

function getPadding(variant: ButtonProps["variant"], size: ButtonProps["size"] = "medium") {
	if (variant === "input") {
		return "9px 16px";
	}

	if (size === "small") {
		return variant === "outlined" ? "1px 12px" : "3px 14px";
	}

	if (size === "large") {
		return variant === "outlined" ? "7px 22px" : "9px 24px";
	}

	return variant === "outlined" ? "4px 16px" : "6px 18px";
}

export const StyledWrapper = styled("span")<TransientProps<ButtonProps, "fullWidth">>(({ $fullWidth }) => `
	display: inline-block;

	&.invisible {
		visbility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	${$fullWidth && `
		width: 100%;
	`}
`);

export const StyledButton = styled(Button)<TransientProps<ButtonProps, "color" | "variant" | "fullWidth" | "size">>(({ $color, $variant, $size, $fullWidth, disabled }) => {
	const palette = getColorPalette($color, $variant);

	return `
		&& {
			border: none;
			background-color: ${palette.background};
			border-color: ${palette.border};
			color: ${palette.text};
			opacity: ${disabled ? 0.5 : 1};

			align-items: center;
			border-width: ${$variant === "outlined" ? 2 : $variant === "input" ? 1 : 0}px;
			border-style: solid;
			border-radius: 0;
			box-shadow: none;
			display: inline-flex;
			gap: 12px;
			padding: ${getPadding($variant, $size)};
			width: ${$fullWidth ? "100%" : "auto"};
			text-transform: ${$variant === "text" || $variant === "input" ? "none" : "uppercase"};
			line-height: 1.75;
			cursor: pointer;

			${$variant !== "input" ? `
				font-family: ${theme.fontFamily};
				font-size: 14px;
				font-weight: ${theme.fontWeight.bold};
				letter-spacing: 1px;
			` : `
				font: inherit;
				height: 1.4375em;
				box-sizing: content-box;
			`}

			&:hover {
				background-color: ${disabled ? palette.background : palette.hover.background};
				border-color: ${disabled ? palette.border : palette.hover.border};
			}

			&[disabled] {
				background-color: ${palette.background};
				color: ${palette.text};
			}

			& .MuiSvgIcon-root {
				&:first-of-type {
					margin-left: -4px;
				}
				&:last-of-type {
					margin-right: -4px;
				}
			}

			& .adornment-icon {
				width: 1em;
				height: 1em;
				font-size: 16px;
			}
		}
	`;
});

export const StyledIconButton = styled(IconButton)<TransientProps<ButtonProps, "color" | "variant">>(({ $color, $variant, disabled }) => {
	const palette = getColorPalette($color, $variant);

	return `
		&& {
			background-color: ${palette.background};
			border-color: ${palette.border};
			color: ${palette.text};
			opacity: ${disabled ? 0.6 : 1};

			&:hover {
				background-color: ${disabled ? palette.background : palette.hover.background};
				border-color: ${disabled ? palette.border : palette.hover.border};
			}
		}
	`;
});

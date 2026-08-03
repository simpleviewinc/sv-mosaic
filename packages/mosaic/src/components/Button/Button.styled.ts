import styled from "styled-components";
import type { Theme } from "@root/theme";
import theme from "@root/theme";
import Button from "@mui/material/Button";
import type { TransientProps } from "@root/types";
import type { ButtonIntent, ButtonProps } from "./ButtonTypes";

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

const intentStyles: Record<ButtonIntent, Partial<Record<ButtonProps["variant"], string>>> = {
	danger: {
		contained: `
			--bg: ${theme.color.red[500]};
			--color: ${theme.color.white};
			--shadow-border: ${theme.color.red[600]};

			--over-bg: ${theme.color.red[600]};
			--over-shadow-border: ${theme.color.red[700]};
		`,
		text: `
			--color: ${theme.color.red[600]};
			--over-bg: ${theme.color.red[50]};
		`,
	},
	primary: {
		contained: `
			--bg-top: #FDBA26;
			--bg-bottom: #FDAE02;
			--shadow: 0 1px 2.5px rgba(253, 175, 4, 0.33);
			--shadow-border: #F5A904;
			--icon-color: ${theme.color.gold[950]};

			--over-bg-top: #FFC84E;
			--over-bg-bottom: #FFB513;
			--over-shadow-border: #FDAF04;
		`,
		text: `
			--color: ${theme.color.gold[950]};

			--over-bg: ${theme.color.gold[100]};
		`,
	},
	secondary: {
		contained: `
			--bg: ${theme.color.white};
			--color: ${theme.color.black};
			--shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
			--shadow-border: rgba(0, 0, 0, .2);
			--icon-color: ${theme.color.gray[600]};

			--over-bg: ${theme.color.gray[50]};
		`,
		text: `
			--icon-color: ${theme.color.gray[500]};

			--over-bg: ${theme.color.gray[50]};
		`,
	},
	info: {
		contained: `
			--bg-top: ${theme.color.teal[600]};
			--bg-bottom: ${theme.color.teal[700]};
			--color: ${theme.color.white};
			--shadow: 0 1px 2.5px rgba(0, 130, 155, 0.33);
			--shadow-border: ${theme.color.teal[700]};

			--over-bg-top: #0E9DB9;
			--over-bg-bottom: #078AA3;
			--over-shadow-border: #078DA7;
		`,
		text: `
			--color: ${theme.color.teal[700]};

			--over-bg: ${theme.color.teal[25]};
		`,
	},
	specialized: {
		contained: `
			--bg: ${theme.color.gray[925]};
			--color: ${theme.color.white};
			--shadow-border: ${theme.color.black};

			--over-bg: ${theme.color.black};
			--over-shadow-border: ${theme.color.black};
		`,
		text: `
			--icon-color: ${theme.color.gray[500]};

			--over-bg: ${theme.color.gray[50]};
		`,
	},
	tertiary: {
		contained: `
			--bg: ${theme.color.gray[100]};
			--color: ${theme.color.black};
			--shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
			--shadow-border: rgba(0, 0, 0, .2);
			--icon-color: ${theme.color.gray[600]};

			--over-bg: ${theme.color.gray[200]};
		`,
		text: `
			--icon-color: ${theme.color.gray[500]};

			--over-bg: ${theme.color.gray[200]};
		`,
	},
};

function getButtonPadding({
	$size,
	$isIconButton,
}: {
	$size?: ButtonProps["size"];
	$isIconButton?: boolean;
}): Parameters<Theme["spacing"]> {
	if ($isIconButton) {
		return [0];
	}

	if ($size === "inherit") {
		return [0, "0.25em"];
	}

	if ($size === "small") {
		return [0, 3];
	}

	if ($size === "xsmall") {
		return [0, 2];
	}

	return [0, 4];
}

const heightMap: Record<ButtonProps["size"], string> = {
	xsmall: "24px",
	small: "32px",
	medium: "36px",
	large: "40px",
	xlarge: "44px",
	inherit: "auto",
};

function getButtonDimensions({
	$fullWidth,
	$isIconButton,
	$size,
}: {
	$fullWidth?: ButtonProps["fullWidth"];
	$isIconButton?: boolean;
	$size?: ButtonProps["size"];
}): [string, string] {
	const height = heightMap[$size];

	if ($fullWidth) {
		return ["100%", height];
	}

	if (!$isIconButton) {
		return [undefined, height];
	}

	if ($size === "xsmall") {
		return ["24px", height];
	}

	if ($size === "small") {
		return ["32px", height];
	}

	return ["36px", height];
}

export const StyledButton = styled(Button)<TransientProps<
	ButtonProps,
	| "intent" | "variant" | "fullWidth" | "size" | "bluntLeft" | "bluntRight"
> & { $isIconButton?: boolean }>(({
	$intent,
	$variant,
	$fullWidth,
	$size,
	$isIconButton,
	$bluntLeft,
	$bluntRight,
}) => {
	const padding = getButtonPadding({ $size, $isIconButton });
	const [width, height] = getButtonDimensions({ $fullWidth, $isIconButton, $size });

	return `
		&& {
			--bg-top: transparent;
			--bg-bottom: transparent;
			--color: ${theme.color.black};
			--shadow: 0 0;
			--shadow-border: transparent;
			--icon-color: inherit;

			--over-bg-top: var(--bg-top);
			--over-bg-bottom: var(--bg-bottom);
			--over-shadow-border: var(--shadow-border);

			${intentStyles[$intent][$variant]}

			align-items: center;
			background-color: var(--bg);
			background-image: linear-gradient(to bottom, var(--bg-top) 0%, var(--bg-bottom) 100%);
			border: none;
			border-radius: ${theme.rounded.md};
			box-shadow: 0 0 0 1px var(--shadow-border), var(--shadow);
			color: var(--color);
			cursor: pointer;
			display: flex;
			height: ${height};
			font-size: ${$size === "inherit" ? "inherit" : theme.fontSize.text.md};
			font-weight: ${theme.weight.medium};
			line-height: ${$size === "inherit" ? "inherit" : theme.line.normal};
			min-width: 0;
			padding: ${theme.spacing(...padding)};
			transition-duration: 0.2s;
			transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
			transition-property: background-color, box-shadow;
			vertical-align: middle;

			${!$bluntLeft ? "" : `
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			`}

			${!$bluntRight ? "" : `
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			`}

			${$size !== "inherit" ? "" : `
				margin-left: -0.25em;
				margin-right: -0.25em;
			`}

			${!width ? "" : `
				width: ${width};
			`}

			${$variant !== "input" ? "" : `
				font: inherit;
				height: 1.4375em;
				box-sizing: content-box;
			`}

			& .Mos-ButtonGradient {
				background-image: linear-gradient(to bottom, var(--over-bg-top) 0%, var(--over-bg-bottom) 100%);
			}

			&:hover {
				background-color: var(--over-bg);
				box-shadow: 0 0 0 1px var(--over-shadow-border), var(--shadow);

				.Mos-ButtonGradient {
					opacity: 1;
				}
			}

			&:focus-visible {
				outline: 2px solid ${theme.color.gray[700]};
				outline-offset: ${$variant === "text" ? "-2px" : "3px"};
				position: relative;
				z-index: 2;
			}

			&:disabled {
				color: var(--color);
				opacity: .4;
			}
		}
	`;
});

export const StyledButtonIcon = styled.div<{
	$inherit?: boolean;
	$isAdornment?: boolean;
	$size?: keyof Theme["fontSize"]["icon"];
}>`
	&& {
		margin: -2px;

		${({ $inherit, $size = "sm" }) => $inherit ? `
			font-size: 1em;
			line-height: inherit;
		` : `
			font-size: ${theme.fontSize.icon[$size]};
			line-height: ${theme.fontSize.icon[$size]};
		`}

		${({ $isAdornment }) => !$isAdornment ? "" : `
			color: var(--icon-color);
		`}
	}
`;

export const StyledButtonHover = styled.span.attrs({ className: "Mos-ButtonGradient" })`
	position: absolute;
	inset: 0;
	border-radius: ${theme.rounded.md};
	opacity: 0;
	transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const StyledButtonContent = styled.div.attrs({ className: "Mos-ButtonContent" })<{ $size: ButtonProps["size"] }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;

	${({ $size }) => `
		gap: ${theme.spacing($size === "inherit" ? "0.25em" : $size === "xsmall" ? 1 : 2)};
	`}
`;

export const StyledButtonLabel = styled.div.attrs({ className: "Mos-ButtonLabel" })`
	align-self: baseline;
	margin-bottom: -1px;
`;

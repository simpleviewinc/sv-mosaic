import styled from "styled-components";

import type { BadgeProps } from "./BadgeTypes";
import theme from "@root/theme";
import { Text } from "../Typography";

const colorMap: Record<BadgeProps["variant"], { color: string; background: string }> = {
	light: {
		background: theme.color.gray[100],
		color: theme.color.black,
	},
	dark: {
		background: theme.color.gray[300],
		color: theme.color.black,
	},
	darkest: {
		background: theme.color.black,
		color: theme.color.white,
	},
};

export const StyledBadge = styled(Text).attrs({ size: "md", weight: "medium", line: "tight" })<{ $variant?: BadgeProps["variant"]}>`
	border-radius: ${theme.rounded.md};
	padding: ${theme.spacing(0.5, 1)};
	min-width: 22px;
	text-align: center;
	display: inline-block;

	${({ $variant }) => `
		background-color: ${colorMap[$variant].background};
		color: ${colorMap[$variant].color};
	`}
`;

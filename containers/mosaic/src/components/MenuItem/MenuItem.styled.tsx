import styled from "styled-components";
import MUIMenuItem from "@mui/material/MenuItem";

import theme from "@root/theme";
import type { MenuItemBaseProps } from "./MenuItemTypes";

export const colorMap: Record<MenuItemBaseProps["color"], string> = {
	black: theme.color.black,
	gold: theme.color.gold[400],
	gray: theme.color.gray[600],
	red: theme.color.red[500],
	teal: theme.color.teal[700],
};

export const colors: Exclude<MenuItemBaseProps["color"], "translucent" | "white">[] = ["black", "gold", "gray", "red", "teal"];

export const StyledMenuItem = styled(MUIMenuItem)<{ $truncateText?: boolean }>`
	padding: ${theme.spacing(2, 3)};
	border-radius: ${theme.rounded.md};

	&:hover {
		background-color: ${theme.color.gray[100]};
	}

	&:focus-visible {
		background-color: ${theme.color.gray[200]};
	}

	&.Mui-selected {
		background-color: ${theme.color.teal[50]};

		&:hover,
		&.Mui-focusVisible {
			background-color: ${theme.color.teal[100]};
		}
	}

	& > .icon {
		margin-right: 10px;
	}

	& > .icon > svg {
		font-size: ${theme.fontSize.text["2xl"]};
	}

	& > .menuLabel {
		${({ $truncateText }) => $truncateText && `
			overflow: hidden;
			text-overflow: ellipsis;
		`}
	}
`;

export const StyledIcon = styled.div<{ $color: Exclude<MenuItemBaseProps["color"], "translucent" | "white"> }>`
	display: inline-flex;

    ${({ $color }) => `
        & svg {
            color: ${colorMap[$color]}
        }
    `}
`;

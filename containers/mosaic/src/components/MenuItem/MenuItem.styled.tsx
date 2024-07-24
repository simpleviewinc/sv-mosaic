import styled from "styled-components";
import MUIMenuItem from "@mui/material/MenuItem";

import theme from "@root/theme";

export const colors = ["black", "blue", "red", "yellow", "teal", "gray"];

export const StyledMenuItem = styled(MUIMenuItem)<{ $truncateText?: boolean }>`
	&.MuiMenuItem-root {
		min-height: 42px;
		background-color: ${theme.colors.white} !important;
	}

	&.menu-item.Mui-selected {
		.menuLabel {
			font-weight: ${theme.fontWeight.bold};
		}
	}

	&.menu-item {
		padding: 8px 16px;
		&:hover {
			background-color: ${theme.newColors.grey2["100"]} !important;
		}
		&:active span {
			color: ${theme.newColors.almostBlack["100"]};
		}
		& .MuiTouchRipple-child {
			background-color: ${theme.newColors.grey2["100"]};
		}
	}

	& > .icon {
		margin-right: 10px;
	}

	& > .icon > svg {
		font-size: ${theme.iconFontSize};
	}

	& > .menuLabel {
		font-family: ${theme.fontFamily};
		font-size: 14px;
		color: ${theme.newColors.grey4["100"]};
		${({ $truncateText }) => $truncateText && `
			overflow: hidden;
			text-overflow: ellipsis;
		`}
	}
`;

export const StyledIcon = styled.div<{ $color: (typeof colors)[number] }>`
	display: inline-flex;

    ${({ $color }) => `
        & svg {
            color: ${theme.colors[$color]}
        }
    `}
`;

// export const iconTypes: Record<ColorTypes, React.FC> = {
// 	black : styled(StyledIcon)`
// 		& svg {
// 			color: ${theme.colors.blue};
// 		}
// 	`,
// 	blue : styled(StyledIcon)`
// 		& svg {
// 			color: ${theme.colors.blue};
// 		}
// 	`,
// 	red : styled(StyledIcon)`
// 		& svg {
// 			color: ${theme.newColors.darkRed["100"]};
// 		}
// 	`,
// };

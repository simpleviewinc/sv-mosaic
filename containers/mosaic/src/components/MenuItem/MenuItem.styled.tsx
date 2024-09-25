import styled from "styled-components";
import MUIMenuItem from "@mui/material/MenuItem";

import theme from "@root/theme";

export const colors = ["black", "blue", "red", "yellow", "teal", "gray"];

export const StyledMenuItem = styled(MUIMenuItem)<{ $truncateText?: boolean }>`
	&& {
		color: ${theme.newColors.grey4["100"]};
		font-family: ${theme.fontFamily};
		font-size: 14px;
		min-height: 42px;
		padding: 8px 16px;

		&:active {
			color: ${theme.newColors.almostBlack["100"]};
		}

		&:hover {
			background-color: ${theme.newColors.grey2["60"]};
		}

		&:focus-visible {
			background-color: ${theme.newColors.grey2["100"]};
		}

		&.Mui-selected {
			font-weight: ${theme.fontWeight.bold};
			background-color: ${theme.newColors.realTeal["10"]};

			&:hover,
			&.Mui-focusVisible {
				background-color: ${theme.newColors.realTeal["20"]};
			}
		}
	}

	& > .icon {
		margin-right: 10px;
	}

	& > .icon > svg {
		font-size: ${theme.iconFontSize};
	}

	& > .menuLabel {
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

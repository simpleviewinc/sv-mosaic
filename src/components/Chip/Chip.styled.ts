import Chip from "@mui/material/Chip";
import styled from "styled-components";
import theme from "@root/theme";

const chipFont = `
	font-size: 14px;
	font-family: ${theme.fontFamily};
	font-weight: ${theme.fontWeight.medium};
`;

export const StyledDeletableChip = styled(Chip)`
	&.MuiChip-root {
		background-color: ${(pr) =>
		pr.disabled
			? theme.newColors.simplyGold["60"]
			: theme.newColors.simplyGold["100"]};
		color: ${theme.newColors.almostBlack["100"]};
		max-width: 186px;
		padding: 8px 16px;
	}

	.MuiChip-deleteIcon {
		color: ${theme.newColors.almostBlack["100"]} !important;
		margin: 0 !important;
		height: 16px;
		width: 16px;

		&:hover {
			color: ${theme.newColors.almostBlack["100"]} !important;
		}
	}

	& .MuiChip-label {
		${chipFont}
		line-height: 16px;
		margin-right: 12px;
		padding: 0;
	}
`;

export const StyledChip = styled(Chip)`
	&.MuiChip-root {
		background-color: ${pr => {
		if (pr.selected && !pr.disabled) {
			return theme.newColors.simplyGold["100"];
		} else if (pr.selected && pr.disabled) {
			return theme.newColors.simplyGold["60"];
		}
		return theme.newColors.grey2["100"];
	}};
	max-width: 186px;

		color: ${theme.newColors.almostBlack["100"]};

		${(pr) => pr.onClick ?
		`	&:hover {
				background-color: ${pr.selected	? theme.newColors.darkerSimplyGold["100"] : theme.newColors.simplyGrey["100"]};
			}

			&:focus {
				background-color: ${pr.selected ? theme.newColors.simplyGold["100"] : theme.newColors.grey2["100"]};
			}
			` : ""};

		padding: 8px 16px;
	}

	& .MuiChip-label {
		${chipFont}
		line-height: 16px;
		padding: 0;
	}
`;

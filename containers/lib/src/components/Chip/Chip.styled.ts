import Chip from "@mui/material/Chip";
import styled from "styled-components";
import theme from "@root/theme";
import { TransientProps } from "@root/types";
import { ChipsProps } from "./ChipTypes";
import { ComponentProps } from "react";

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

function getChipBackground({ $selected, disabled, onClick }: Pick<ComponentProps<typeof StyledChip>, "$selected" | "disabled" | "onClick">) {
	if ($selected) {
		if (disabled) {
			return { base: theme.newColors.simplyGold["60"] };
		}

		return {
			base: theme.newColors.simplyGold["100"],
			focus: onClick && theme.newColors.darkerSimplyGold["100"],
			hover: onClick && theme.newColors.darkerSimplyGold["100"],
		};
	}

	return {
		base: theme.newColors.grey2["100"],
		focus: onClick && theme.newColors.simplyGrey["100"],
		hover: onClick && theme.newColors.simplyGrey["100"],
	};
}

export const StyledChip = styled(Chip)<TransientProps<ChipsProps, "selected">>`
	&.MuiChip-root {
		max-width: 186px;
		color: ${theme.newColors.almostBlack["100"]};
		padding: 8px 16px;

		&:focus{
			box-shadow: none;
			outline: 1px solid white;
			outline-offset: -2px;
		}

		${({ $selected, disabled, onClick }) => {
			const { base, focus, hover } = getChipBackground({ $selected, disabled, onClick });

			return `
				background-color: ${base};

				${focus && `
					&:focus{
						background-color: ${focus}
					}
				`}

				${hover && `
					&:hover{
						background-color: ${hover}
					}
				`}
			`;
		}}
	}

	& .MuiChip-label {
		${chipFont}
		line-height: 16px;
		padding: 0;
	}
`;

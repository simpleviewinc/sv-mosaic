import type { ComponentProps } from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";

import type { TransientProps } from "@root/types";
import type { ChipsProps } from "./ChipTypes";

import theme from "@root/theme";

function getChipBackground({ $selected, disabled, onClick, onDelete }: Pick<ComponentProps<typeof StyledChip>, "$selected" | "disabled" | "onClick" | "onDelete">) {
	if ($selected || onDelete) {
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
	&&.MuiChip-root {
		max-width: 186px;
		color: ${theme.newColors.almostBlack["100"]};
		padding: 8px 16px;

		${({ onDelete }) => !onDelete && `
			&:focus{
				box-shadow: none;
				outline: 1px solid white;
				outline-offset: -2px;
			}
		`}

		${({ $selected, disabled, onClick, onDelete }) => {
			const { base, focus, hover } = getChipBackground({ $selected, disabled, onClick, onDelete });

			return `
				background-color: ${base};

				${focus && `
					&:focus
					&:focusVisible{
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
		font-size: 14px;
		font-weight: ${theme.fontWeight.medium};
		line-height: 1.4em;
		padding: 0;
	}
`;

export const StyledChipDelete = styled.button`
	&&& {
		all: unset;
		color: ${theme.newColors.almostBlack["100"]} !important;
		cursor: pointer;
		margin: 0;
		margin-left: 12px;
		display: flex;
		position: relative;

		&:focus-visible::after {
			background-color: rgba(0, 0, 0, .2);
			border-radius: 9999em;
			content: " ";
			position: absolute;
			inset: -2px;
		}
	}

	&& svg {
		height: 16px;
		width: 16px;
	}
`;

import styled from "styled-components";
import Chip from "@mui/material/Chip";

import type { ChipsProps } from "./ChipTypes";

import theme from "@root/theme";

const variantStyles: Record<ChipsProps["variant"], string> = {
	primary: `
		--bg: ${theme.color.gold[400]};
		--border: 0 0;
		--shadow: var(--mos-shadow-sm);
		--icon: ${theme.color.gold[950]};
		--weight: ${theme.weight.regular};

		--over-bg: ${theme.color.gold[300]};
	`,
	secondary: `
		--bg: ${theme.color.white};
		--border: var(--mos-border-medium);
		--shadow: var(--mos-shadow-sm);
		--icon: ${theme.color.gray[500]};
		--weight: ${theme.weight.regular};

		--over-bg: ${theme.color.gray[100]};
	`,
	tertiary: `
		--bg: ${theme.color.gray[100]};
		--border: var(--mos-border-medium);
		--shadow: var(--mos-shadow-sm);
		--icon: ${theme.color.gray[500]};
		--weight: ${theme.weight.medium};

		--over-bg: ${theme.color.gray[300]};
	`,
};

export const StyledChip = styled(Chip)<{
	$fullWidth?: boolean;
	$variant?: ChipsProps["variant"];
}>(({ $fullWidth, $variant, onDelete, onClick }) => `
	${variantStyles[$variant]};

	background-color: var(--bg);
	font-weight: var(--weight);
	line-height: ${theme.line.normal};
	padding: 0 ${theme.spacing(4)};
	justify-content: space-between;

	${(!onDelete && !onClick) ? `
		box-shadow: var(--border);
	` : `
		box-shadow: var(--border), var(--shadow);
	`}

	${!onDelete ? "" : `
		padding-right: ${theme.spacing(3)};
	`}

	${$fullWidth ? `
		width: 100%;
	` : `
		max-width: 176px;
	`}

	${!onClick ? "" : `
		text-decoration: underline;

		&:hover {
			background-color: var(--over-bg);
		}
	`}

	&:active {
		box-shadow: var(--border);
	}

	&.Mui-focusVisible {
		background-color: var(--bg);
		outline: 2px solid ${theme.color.gray[700]};
		outline-offset: 3px;
	}

	&.MuiChip-deletable.Mui-focusVisible {
		background-color: var(--bg);
		outline: none;
	}

	.MuiChip-label {
		padding: 0;
		margin-bottom: -1px;
	}
`);

export const StyledChipDelete = styled.button`
	&& {
		all: unset;
		color: var(--icon);
		cursor: pointer;
		margin: 0;
		margin-left: ${theme.spacing(2)};
		display: flex;
		position: relative;
		border-radius: 9999em;

		&:focus-visible {
			outline: 2px solid ${theme.color.gray[700]};
			outline-offset: 1px;
		}
	}

	&& svg {
		height: 16px;
		width: 16px;
	}
`;

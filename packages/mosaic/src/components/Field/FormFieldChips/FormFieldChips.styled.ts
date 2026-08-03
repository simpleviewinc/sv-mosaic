import theme from "@root/theme";
import styled from "styled-components";

export const StyledChipGroup = styled.div<{ $error?: boolean }>`
	display: flex;
	flex-wrap: wrap;
	row-gap: ${theme.spacing(3)};

	& .MuiChip-root {
		margin-right: ${theme.spacing(3)};

		${({ $error }) => !$error ? "" : `
			background-color: ${theme.color.red[25]};
			--border: var(--mos-border-danger);
		`}
	}

	& .MuiChip-root:last-child {
		margin-right: 0px;
	}
`;

export const StyledChipsSkeletonWrapper = styled.div`
	display: flex;
	gap: ${theme.spacing(3)};

	& .MuiSkeleton-root {
		border-radius: 99999em;
	}
`;

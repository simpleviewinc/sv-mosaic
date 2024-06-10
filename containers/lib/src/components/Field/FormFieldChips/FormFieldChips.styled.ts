import theme from "@root/theme";
import styled from "styled-components";

export const StyledChipGroup = styled.div<{ $error?: boolean }>`
	display: flex;
	flex-wrap: wrap;
	row-gap: 12px;

	& .MuiChip-root {
		border: 1px solid ${({ $error }) => $error ? theme.newColors.darkRed["100"] : "transparent"};
		margin-right: 12px;
	}

	& .MuiChip-root:last-child {
		margin-right: 0px;
	}
`;

export const StyledChipsSkeletonWrapper = styled.div`
	display: flex;
	gap: 12px;

	& .MuiSkeleton-root {
		border-radius: 99999em;
	}
`;

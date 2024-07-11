import styled from "styled-components";
import theme from "@root/theme";

export const StyledWrapper = styled.div`
	& > .topBlock {
		display: flex;
		height: 400px;
		padding-left: 16px;
		margin-top: 16px;
		width: 600px;
	}

	& > .topBlock > .options > .searchBar {
		position: sticky;
		top: 0;
		margin-bottom: 24px;
		z-index: 100;
	}

	& > .topBlock > .options {
		overflow-y: auto;
		flex: 2;
		position: relative;
		transition: opacity .5s;
		padding-right: 32px;
	}

	& > .topBlock > .options.disabled {
		opacity: .4;
		pointer-events: none;
	}

	& > .topBlock > .options .listItem {
		padding-top: 0px;
		padding-bottom: 0px;
	}

	& > .topBlock > .options .listItemIcon {
		min-width: auto;
	}

	& > .topBlock > .options > .spinner {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	& > .topBlock > .selected {
		padding: 0px 16px 0px 32px;
		width: 200px;
		overflow-y: auto;
	}

	& > .topBlock > .selected > .selected-options-title {
		font-weight: ${theme.fontWeight.medium};
		font-size: 16px;
		line-height: 19px;
		color: ${theme.newColors.almostBlack["100"]};
		margin: 0px 0px 24px 0px;
	}

	& .comparisonDropdown {
		margin-bottom: 1rem;
	}

	& .chips {
		display: flex;
		flex-direction: column;
		row-gap: 24px;
	}

	& .chip {
		display: flex;
	}

	& .chip > span {
		flex: 1 1 0%
	}

	& .realTeal-icon {
		& svg {
			color: ${theme.newColors.realTeal[100]};
		}
	}

	& .selected {
		border-left: 2px solid ${theme.newColors.grey2[100]};
	}
`;

export const StyledComparisonHeader = styled.div`
	margin-bottom: 1rem;
`;

export const PopoverP = styled.p`
	margin: 0px;
`;

export const StyledHr = styled.hr<{ $margin?: string }>`
	border: 2px solid ${theme.newColors.grey2[100]};
	margin:  ${({ $margin }) => $margin ? $margin : "0px -16px"};
`;

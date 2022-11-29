import styled from "styled-components";
import theme from "@root/theme";

export const ChipWrapper = styled.div`
	margin-top: 24px;
	& .MuiChip-root {
		display: flex;
	};
	& .MuiChip-label {
		flex: 1 1 0%;
	};
`;

export const StyledWrapper = styled.div`
	padding: 22px 6px 14px;

	& > .topBlock {
		display: flex;
		height: 400px;
		width: 600px;
	}

	& > .topBlock > .options > .searchBar {
		position: sticky;
		top: 0;
		display: flex;
		align-items: center;
		padding: 8px 16px;
		z-index: 1;
		background: ${theme.newColors.grey1[100]};
		border: 1px solid ${theme.newColors.simplyGrey[100]};
		margin-bottom: 24px;
	}

	& > .topBlock > .options > .searchBar > svg {
		margin-right: 8px;
		font-size: ${theme.iconFontSize};
	}

	& > .topBlock > .options > .searchBar > .input {
		font-family: ${theme.fontFamily};
		line-height: 2rem;
		font-size: 16px;
	}

	& > .topBlock > .options {
		overflow-y: scroll;
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
		padding: 0px 0px 0px 32px;
		width: 200px;
		overflow-y: auto;
	}

	& .comparisonDropdown {
		margin-bottom: 1rem;
	}

	& .chip {
		display: flex;
		background-color: ${theme.colors.blue}13;
		margin-bottom: 4px;
		justify-content: space-between;
		font-family: ${theme.fontFamily};
		height: 33px;
	}

	& .chip:focus {
		background-color: ${theme.colors.blue}13;
	}

	& .chip > span {
		flex: 1;
		font-size: 14px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		display: block;
	}
`

export const PopoverP = styled.p`
	margin: 0px;
`

export const StyledHr = styled.hr`
	border: 1px solid ${theme.newColors.grey2[100]};
	margin: 0 -16px;
`;

export const StyledVerticalHr = styled.hr`
	border: 1px solid ${theme.newColors.grey2[100]};
	margin: -32px 0px 0px;
`

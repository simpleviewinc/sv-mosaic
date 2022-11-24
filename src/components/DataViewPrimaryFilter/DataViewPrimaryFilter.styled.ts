import styled from "styled-components";
import theme from "@root/theme";

export const LabelWrapper = styled.div`
	display: flex;
	align-items: center;

	& > .dropdownIcon {
		color: ${theme.colors.gray600};
		margin-left: 4px;
		margin-right: -4px;
	}

	& > .removeIcon {
		margin-left: 4px;
		margin-right: -4px;
		color: black;
		background-color: ${theme.colors.blue}12;
		border-radius: 20px;
		padding: 3px;
		box-sizing: border-box;
	}

	& > .removeIcon:hover {
		background-color: ${theme.colors.blue}45;
	}

	& > .filter-label {
		font-weight: ${theme.fontWeight.normal};
		margin-right: 8px;
		text-transform: capitalize;
	}

	& > .filter-value {
		align-items: center;
		display: flex;
		font-weight: ${theme.fontWeight.normal};
		margin-right: 8px;
		text-transform: none;
	}
`;

export const MultiselectCounter = styled.div`
	align-items: center;
	background-color: white;
	border-radius: 300px;
	display: flex;
	height: 20px;
	justify-content: center;
	margin-left: 16px;
	width: 20px;
`;

export const Value = styled.b`
	max-width: 177px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Count = styled.span`
	font-family: ${theme.museoFont};
	font-size: 10px;
	font-weight: 700;
`;

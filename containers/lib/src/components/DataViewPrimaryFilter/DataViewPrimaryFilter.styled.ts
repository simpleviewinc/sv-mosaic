import styled from "styled-components";
import theme from "@root/theme";

export const LabelWrapper = styled.div`
	display: flex;
	align-items: center;

	& > .dropdownIcon {
		color: ${theme.newColors.grey3["100"]};
		margin-left: 4px;
		margin-right: -4px;
	}

	& > .filter-label {
		font-weight: ${theme.fontWeight.normal};
		text-transform: capitalize;
	}

	& > .filter-value {
		align-items: center;
		display: flex;
		font-weight: ${theme.fontWeight.normal};
		text-transform: none;
	}

	& > .filter-value b {
		margin: 0px 8px;
	}
`;

export const MultiselectCounter = styled.div`
	align-items: center;
	background-color: white;
	border-radius: 300px;
	display: flex;
	height: 20px;
	justify-content: center;
	margin-left: 12px;
	min-width: 20px;
	padding: 4px;
`;

export const Value = styled.p`
	max-width: 187px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-weight: ${theme.fontWeight.bold};
	margin: 0px;
`;

export const Count = styled.span`
	font-family: ${theme.museoFont};
	font-size: 10px;
	font-weight: 600;
`;

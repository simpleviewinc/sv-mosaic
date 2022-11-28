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
	min-width: 20px;
	padding: 4px;
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
	font-weight: 600;
`;

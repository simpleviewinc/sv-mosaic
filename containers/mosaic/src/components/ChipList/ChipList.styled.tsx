import styled from "styled-components";

import theme from "@root/theme";
import Button from "../Button";

export const ChipsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
`;

export const ShowHideSpan = styled.span`
	color: ${theme.newColors.grey3["100"]};
	cursor: pointer;
	display: flex;
	font-family: ${theme.fontFamily};
	width: fit-content;
	font-weight: ${theme.fontWeight.bold};
	font-size: 16px;
	margin-top: 16px;
`;

export const ShowButton = styled(Button)`
	margin-top: 8px;
`;

import styled from "styled-components"
import theme from "@root/theme";
import { containerQuery } from "@root/utils/css";

export const InstructionTextWrapper = styled.div`
	padding-left: 20px;
	border-left: 2px solid ${theme.newColors.grey2["100"]};
	flex: none;
	margin-left: auto;
	margin-top: 36px;
	display: none;
	width: 360px;

	${containerQuery("sm", "FORM_COL")} {
		display: block;
	}

	${containerQuery("md", "FORM_COL")} {
		width: 420px;
	}
`;

export const StyledInstructionText = styled.p`
	color: ${theme.newColors.grey3["100"]};
	font-family: ${theme.fontFamily};
	font-size: 14px;
	margin: 0;
`;

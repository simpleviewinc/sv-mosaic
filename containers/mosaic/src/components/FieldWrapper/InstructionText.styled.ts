import styled from "styled-components";
import theme from "@root/theme";
import { containerQuery } from "@root/utils/css";

export const InstructionTextWrapper = styled.div<{ $colsInRow?: number }>`
	padding-left: 20px;
	border-left: 2px solid ${theme.newColors.grey2["100"]};
	flex: none;
	align-self: stretch;
	margin-left: auto;
	display: none;
	width: 180px;

	${({ $colsInRow = 1 }) => $colsInRow === 1 && `
		${containerQuery("sm", "FORM_COL")} {
			display: block;
		}

		${containerQuery("md", "FORM_COL")} {
			width: 420px;
		}
	`}
`;

export const StyledInstructionText = styled.p`
	color: ${theme.newColors.grey3["100"]};
	margin: 0;
`;

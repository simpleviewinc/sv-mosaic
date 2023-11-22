import styled from "styled-components";
import theme from "@root/theme";
import { containerQuery } from "@root/utils/css";
import { FormSpacing } from "../Form";

export const StyledFieldContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0 20px;
	min-width: 0;

	${containerQuery("lg", "FORM")} {
		gap: 0 40px;
	}
`;

export const StyledFieldWrapper = styled.div<{$error?: boolean, $spacing?: FormSpacing}>`
	font-family: ${theme.fontFamily};
	position: relative;
	min-width: 0;

	${({ $error, $spacing }) => $error && `
		background-color: ${theme.newColors.darkRed["5"]};
		margin: ${$spacing === "compact" ? "0 -8px -8px" : "-4px -12px -8px"};
		padding: ${$spacing === "compact" ? "0 8px 8px" : "4px 12px 8px"};
	`}
`;

export const StyledControlWrapper = styled.div<{$size?: string}>`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	max-width: 100%;

	${({ $size }) => `
		width: ${$size !== "full" ? $size : "100%"};
	`}
`;


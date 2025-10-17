import styled from "styled-components";
import { containerQuery } from "@root/utils/css";

export const StyledFieldContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: start;
	gap: 0 20px;
	min-width: 0;

	${containerQuery("lg", "FORM")} {
		gap: 0 40px;
	}
`;

export const StyledLabelControlWrapper = styled.div<{ $fullWidth?: boolean }>`
	max-width: 100%;

	${({ $fullWidth }) => $fullWidth && `
		width: 100%;
	`}
`;

export const StyledControlWrapper = styled.div<{ $size?: string }>`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	max-width: 100%;

	${({ $size }) => `
		width: ${$size !== "full" ? $size : "100%"};
	`}
`;


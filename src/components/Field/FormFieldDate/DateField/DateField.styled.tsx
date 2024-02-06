import { containerQuery } from "@root/utils/css";
import styled from "styled-components";

export const DateTimePickerWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DateTimeInputRow = styled.div<{ $hasTimeField?: boolean }>`
	${({ $hasTimeField }) => $hasTimeField && `
		display: grid;
		grid-template-columns: repeat(1,minmax(0,1fr));
		gap: 24px 12px;

		${containerQuery("sm", "FORM_COL")} {
			grid-template-columns: repeat(2,minmax(0,1fr));
		}
	`}
`;

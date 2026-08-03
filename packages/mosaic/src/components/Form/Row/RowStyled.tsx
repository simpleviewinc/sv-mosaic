import styled from "styled-components";

// Components
import { containerQuery } from "@root/utils/css";
import type { FormSpacing } from "../FormTypes";
import { FORM_GRID_SEGMENTS } from "@root/constants/form";

export const StyledRow = styled.div<{ $columns?: number; $gridMinWidth?: string; $spacing?: FormSpacing }>`
	${({ $columns, $gridMinWidth, $spacing }) => $columns && `
		display: grid;
		grid-template-columns: repeat(1,minmax(0,1fr));
		gap: ${$spacing === "compact" ? "16px" : "24px"};

		${$gridMinWidth ? `
			@container form (min-width: ${$gridMinWidth}) {
				grid-template-columns: repeat(${FORM_GRID_SEGMENTS},minmax(0,1fr));
			}
		` : `
			${containerQuery("md", "FORM")} {
				grid-template-columns: repeat(${FORM_GRID_SEGMENTS},minmax(0,1fr));
			}
		`}
	`}
`;

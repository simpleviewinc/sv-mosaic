import styled from "styled-components";

// Components
import { containerQuery } from "@root/utils/css";

export const StyledRow = styled.div<{$columns?: number, $gridMinWidth?: string}>`
	${({$columns, $gridMinWidth}) => $columns && `
		display: grid;
		grid-template-columns: repeat(1,minmax(0,1fr));
		gap: 24px;

		${$gridMinWidth ? `
			@container form (min-width: ${$gridMinWidth}) {
				grid-template-columns: repeat(${$columns},minmax(0,1fr));
			}
		` : `
			${containerQuery("md", "FORM")} {
				grid-template-columns: repeat(${$columns > 1 ? 2 : 1},minmax(0,1fr));
			}
			${containerQuery("lg", "FORM")} {
				grid-template-columns: repeat(${$columns},minmax(0,1fr));
			}
		`}
	`}
`;

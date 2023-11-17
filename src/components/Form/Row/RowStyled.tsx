import styled from "styled-components";

// Components
import { containerQuery } from "@root/utils/css";

export const StyledRow = styled.div<{$columns?: number}>`
	${({$columns}) => $columns && `
		display: grid;
		grid-template-columns: repeat(1,minmax(0,1fr));
		gap: 24px 40px;

		${containerQuery("md")} {
			grid-template-columns: repeat(${$columns > 1 ? 2 : 1},minmax(0,1fr));
		}
		${containerQuery("lg")} {
			grid-template-columns: repeat(${$columns},minmax(0,1fr));
		}
	`}
`;

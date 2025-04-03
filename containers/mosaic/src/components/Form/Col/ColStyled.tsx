import styled from "styled-components";
import { CONTAINERS } from "@root/theme/theme";
import { containerQuery } from "@root/utils/css";

export const StyledCol = styled.div<{ $gridMinWidth?: string; $gridColumn?: string }>`
	display: flex;
	flex-direction: column;
	position: relative;
	gap: 24px;
	container-type: inline-size;
	container-name: ${CONTAINERS.FORM_COL};

	${({ $gridMinWidth, $gridColumn }) => $gridMinWidth ? `
		@container form (min-width: ${$gridMinWidth}) {
			grid-column: ${$gridColumn};
		}
	` : `
		${containerQuery("md", "FORM")} {
			grid-column: ${$gridColumn};
		}
	`}
`;

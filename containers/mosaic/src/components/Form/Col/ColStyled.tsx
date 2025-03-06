import styled from "styled-components";
import { CONTAINERS } from "@root/theme/theme";

export const StyledCol = styled.div<{ $gridColumn?: string }>`
	display: flex;
	flex-direction: column;
	position: relative;
	gap: 24px;

	${({ $gridColumn }) => `
		grid-column: ${$gridColumn};
	`}


	container-type: inline-size;
	container-name: ${CONTAINERS.FORM_COL};
`;

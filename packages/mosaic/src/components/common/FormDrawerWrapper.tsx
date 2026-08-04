import styled from "styled-components";
import { BREAKPOINTS } from "@root/theme";

export const FormDrawerWrapper = styled.div`
	height: 100vh;

	&.mapCoordinates,
	&.address {
		width: 1060px;
	}

	&.mapCoordinates {
		@media (max-width: ${BREAKPOINTS.sm}px) {
			width: 100vw;
		}
	}
`;


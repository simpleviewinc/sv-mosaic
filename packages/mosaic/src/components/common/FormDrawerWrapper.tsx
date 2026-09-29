import styled from "styled-components";

export const FormDrawerWrapper = styled.div`
	height: 100vh;

	&.mapCoordinates,
	&.address {
		width: min(1060px, 100vw);
	}

	&.advancedSelection {
		width: 100%;
		min-width: min(600px, 100vw);
	}
`;

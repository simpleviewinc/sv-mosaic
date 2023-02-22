import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const StyledFormContainer = styled.div`
	&.loading {
		opacity: .5;
		pointer-events: none;
	}
`;

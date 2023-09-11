import styled from "styled-components";
import { BREAKPOINTS, CONTAINERS } from "@root/theme/theme";
import SideNav from "../SideNav/SideNav";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export const StyledContainerForm = styled.div`
	&.disabled {
		opacity: .5;
		pointer-events: none;
	}

	container-type: inline-size;
	container-name: ${CONTAINERS.FORM};
`;

export const FormContent = styled.div`
	padding: 20px;
	overflow-y: auto;
	flex-grow: 1;
	min-width: 0;
`;

export const StyledFormPrimary = styled.div`
	flex-grow: 1;
	min-height: 0;
	display: flex;
	flex-direction: column;

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.xl}) {
		flex-direction: row;
	}
`

export const StyledSideNav = styled(SideNav)`
	display: none;

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.sm}) {
		display: block;
	}
`;

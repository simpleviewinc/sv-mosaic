import styled from "styled-components";
import { CONTAINERS } from "@root/theme/theme";
import SideNav from "../SideNav/SideNav";
import { containerQuery } from "@root/utils/css";

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
	overflow-y: auto;
	flex-grow: 1;
	min-width: 0;
	padding: 18px 20px;

	${containerQuery("lg", "FORM")} {
		padding: 32px 40px;
	}
`;

export const StyledFormPrimary = styled.div`
	flex-grow: 1;
	min-height: 0;
	display: flex;
	flex-direction: column;

	${containerQuery("xl", "FORM")} {
		flex-direction: row;
	}
`

export const StyledSideNav = styled(SideNav)`
	display: none;
	margin-top: 10px;

	${containerQuery("sm", "FORM")} {
		display: block;
	}

	${containerQuery("xl", "FORM")} {
		margin-top: 0;
	}
`;

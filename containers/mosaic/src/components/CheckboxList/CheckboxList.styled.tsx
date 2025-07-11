import FormGroup from "@mui/material/FormGroup";
import theme, { CONTAINERS } from "@root/theme/theme";
import { containerQuery } from "@root/utils/css";
import styled from "styled-components";
import { Column } from "../common";

export const StyledFormGroup = styled(FormGroup)`
	container-type: inline-size;
	container-name: ${CONTAINERS.CHECKBOX_LIST};
`;

export const StyledGrid = styled.div`
	${containerQuery("md", "CHECKBOX_LIST")} {
		display: grid;
		grid-template-columns: repeat(3,minmax(0,1fr));
	}
`;

export const StyledColumn = styled(Column)`
	gap: ${theme.spacing(1)};
`;

import styled from "styled-components";
import { default as MUIFormControlLabel } from "@mui/material/FormControlLabel";
import theme from "@root/theme";

export const StyledOptionFormControl = styled(MUIFormControlLabel)`
	&& {
		align-items: center;
		gap: ${theme.spacing(1)};
		margin-left: 0;
		margin-right: 0;
	}
`;

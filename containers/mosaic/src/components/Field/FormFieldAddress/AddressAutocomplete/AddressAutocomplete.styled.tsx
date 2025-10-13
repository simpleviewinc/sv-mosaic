import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";

import { StyledTextField } from "@root/components/Field/FormFieldText/FormFieldText.styled";
import theme from "@root/theme";

export const LocationSearchInputWrapper = styled.div`
	&.mapCoordinates {
		margin-bottom: ${theme.spacing(2)};
	}
`;

export const StyledInputSearch = styled(StyledTextField)`
	&.MuiTextField-root {
		display: flex;
	}
`;

export const StyledClearIcon = styled(ClearIcon)`
	cursor: pointer;
`;

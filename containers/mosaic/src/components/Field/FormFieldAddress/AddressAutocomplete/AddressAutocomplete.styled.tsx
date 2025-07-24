import styled from "styled-components";
import theme from "@root/theme";
import { StyledTextField } from "@root/components/Field/FormFieldText/FormFieldText.styled";

// Components
import ClearIcon from "@mui/icons-material/Clear";

export const LocationSearchInputWrapper = styled.div`
	&.mapCoordinates {
		margin-bottom: 8px;
	}
`;

export const StyledInputSearch = styled(StyledTextField)`
	&.MuiTextField-root {
		display: flex;
	}
`;

export const StyledClearIcon = styled(ClearIcon)`
	cursor: pointer;
	color: ${theme.newColors.almostBlack["100"]};
`;

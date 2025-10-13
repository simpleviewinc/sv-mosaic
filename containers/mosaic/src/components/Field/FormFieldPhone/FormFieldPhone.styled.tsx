import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";

import theme from "@root/theme";
import { StyledTextField } from "../FormFieldText/FormFieldText.styled";

export const StyledPhoneContainer = styled.div`
	display: flex;
	flex-grow: 1;
`;

export const StyledPhoneTextField = styled(StyledTextField).attrs({ $bluntLeft: true })`
	flex-grow: 1;

	fieldset {
		border-left: 0;
	}
`;

export const StyledFlagSelect = styled.div`
	display: flex;
`;

export const StyledAutocomplete = styled(Autocomplete)`
	flex-grow: 1;
`;

// A drop in component for the phone autocomplete popper. We don't need
// a popper within the autocomplete component since it's alread poppered
// higher up.
export const StyledNonPopper = styled.div.attrs({ style: undefined })`
	.MuiPaper-root {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		margin-top: -3px;
	}

	.MuiAutocomplete-listbox {
		padding-top: 11px;
	}
`;

export const StyledFlagIcon = styled.img<{ $disabled?: boolean }>`
	height: auto;
	width: 1.5rem;
	display: block;
	box-shadow: 0 0 2px 0 rgba(0,0,0,.5);

	${({ $disabled }) => $disabled && `
		opacity: .25;
	`}
`;

export const StyledUnknownFlag = styled.div`
	background: white;
	box-shadow: 0 0 2px 0 rgba(0,0,0,.5);
	height: 1rem;
	width: 1.5rem;
	color: ${theme.color.gray[600]};
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		height: 0.8rem;
		width: auto;
	}
`;

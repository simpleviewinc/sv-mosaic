import styled from "styled-components";

// Theme
import theme from "@root/theme";
import Autocomplete from "@mui/material/Autocomplete";
import { StyledTextField } from "../FormFieldText/FormFieldText.styled";
import Popper from "@mui/material/Popper";

export const StyledPhoneContainer = styled.div`
	display: flex;
	flex-grow: 1;
`;

export const StyledPhoneTextField = styled(StyledTextField)`
	fieldset {
		border-left: 0;
	}
`;

export const StyledFlagSelect = styled.div`
	display: flex;
	flex-grow: 1;
`;

export const StyledFlagSelectButton = styled.button<{ $hasFocus?: boolean; $error?: boolean }>`
	all: unset;
	background-color: ${theme.newColors.grey1["100"]};
	border: 1px solid ${({ disabled, $error, $hasFocus }) =>
		disabled ? theme.colors.disableBorder :
		$error ? theme.newColors.darkRed["100"] :
		$hasFocus ? theme.newColors.almostBlack["100"] : theme.newColors.simplyGrey["100"]};
	border-right: 0;
	color: ${({ disabled }) => disabled ? theme.colors.disabledTextColor : theme.newColors.almostBlack["100"]};
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 0 8px 0 16px;
	position: relative;

	${({ disabled }) => !disabled && `
		cursor: pointer;
	`}

	&::after{
		background: none;
		content: "";
		display: block;
		position: absolute;
		top: 10px;
		right: 0;
		bottom: 10px;
		border-right: 1px solid #CCCCCC;
	}
`;

export const StyledPopper = styled(Popper)<{$width?: number}>`
	${({ $width }) => $width && `
		width: ${$width}px;
	`}
`;

export const StyledAutocomplete = styled(Autocomplete)`
	flex-grow: 1;

	&& .MuiInputBase-root{
		padding-top: 0;
		padding-bottom: 0;

		.MuiAutocomplete-input {
			padding-top: 10px;
			padding-bottom: 10px;
		}
	}
`;

export const StyledAutocompletePaper = styled.div`
	background: white;
	border: 1px solid ${theme.newColors.simplyGrey["100"]};
	border-top: 0;

	& .MuiAutocomplete-listbox .MuiAutocomplete-option {
		display: flex;
		gap: 8px;
		font-family: ${theme.fontFamily};
		font-size: 14px;
		min-height: 40px;
		color: ${theme.newColors.grey4["100"]};

		&[aria-selected='true'] {
			color: ${theme.colors.black};
			font-weight: ${theme.fontWeight.semiBold};
			background-color: white;

			&.Mui-focused {
				background-color: ${theme.newColors.grey2["100"]};
			}
		}
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

import styled from "styled-components";
import { default as MUIAutocomplete } from '@material-ui/lab/Autocomplete';
import { default as MUIFormHelperText } from "@material-ui/core/FormHelperText";
import { default as MUIErrorOutlineIcon } from '@material-ui/icons/ErrorOutline';
import theme from '../../utils/theme.js';
import { Sizes } from '../../theme/sizes';

export const StyledLabel = styled.p`
	font-size: 16px;
	color: ${theme.colors.almostBlack};
	margin-top: 0px;
	margin-bottom: 8px;

	&:after {
		content: "${pr => pr.required ? "*" : ""}";
		color: ${theme.colors.red};
	}
`;

export const StyledAutocomplete = styled(MUIAutocomplete)`
	& .MuiFormControl-fullWidth {
		width: ${pr => pr.size ? pr.size : Sizes.sm}
		height: 51px;
	}

	& .MuiFormControl-root .MuiInputBase-root {
		background-color: ${theme.colors.gray100};
	}

	& .MuiFormControl-root .MuiInputBase-root .MuiOutlinedInput-notchedOutline {
		border: ${pr => (pr.error) ? 
			theme.borders.error 
			:
			theme.borders.fieldGray
		};
		border-radius: 0px;
	}

	& .MuiFormControl-root .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border: solid 1px ${theme.colors.gray800};
	}
`;

export const StyledHelperText = styled(MUIFormHelperText)`
	&.MuiFormHelperText-root {
    	font-size: 12px;
		color: ${theme.colors.assistiveText};
		margin-top: 16px;
	}
`;

export const StyledInputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
		padding: 16px;
	}

	& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child,
	& .MuiAutocomplete-input,
	& .MuiOutlinedInput-inputAdornedEnd,
	& .MuiOutlinedInput-input,
	& .MuiInputBase-input {
		padding: 0px;
	}

	& .MuiOutlinedInput-input {
		height: 19px;
	}
`;

export const StyledInstructionText = styled.p`
	font-size: 14px;
	color: ${theme.colors.assistiveText};
	margin-left: 60px;
	margin-top: 0px;
	margin-bottom: 0px;
	max-width: 400px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const StyledDisabledDropdownText = styled.p`
	font-size: 16px;
	color: ${theme.colors.assistiveText};
	margin-top: 15px;
`;

export const StyledErrorWrapper = styled.div`
	background-color: ${pr => pr.error ? 
		theme.colors.errorBackground 
		:
		'transparent'
	}
	padding: 20px;
	width: fit-content;
	font-family: ${theme.fontFamily};
`;

export const StyledErrorIcon = styled(MUIErrorOutlineIcon)`
	&.MuiSvgIcon-root {
		font-size: 16px;
		color: ${theme.colors.red};
		margin-right: 8px;
	}
`;

export const StyledErrorText = styled(MUIFormHelperText)`
	&.MuiFormHelperText-root {
    	font-size: 12px;
		color: ${theme.colors.red};
	}
`;

export const StyledErrorMessage = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 16px;
	width: fit-content;
`;
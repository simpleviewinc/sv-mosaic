import * as React from 'react';
import { useState, memo, HTMLAttributes } from "react";
import {
	StyledAutocomplete,
	StyledHelperText,
	StyledInstructionText,
	StyledDisabledDropdownText,
	StyledErrorText,
	StyledErrorWrapper,
	StyledErrorIcon,
	StyledErrorMessage,
	SingleDropdownWrapper,
} from "./FormFieldDropdownSingleSelection.styled";

// Material UI
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

// Components
import { DropdownSingleSelectionProps } from "./FormFieldDropdownSingleSelectionTypes";
import InputWrapper from '../../components/InputWrapper';

const DropdownSingleSelection = (props: DropdownSingleSelectionProps & HTMLAttributes<HTMLInputElement>) => {
	const {
		disabled = false,
		error,
		required = true,
		onChange,
		onBlur,
		inputSettings,
		value
	} = props;

	const [isOpen, setIsOpen] = useState(false);

	const renderInput = (params) => (
		<InputWrapper>
			<TextField
				{...params}
				data-testid="textfield-test-id"
				variant="outlined"
				placeholder={inputSettings?.placeholder}
			/>
		</InputWrapper>
	);

	const handleOpen = () => {
		setIsOpen(!isOpen)
	}

	const errorWithMessage = error?.trim().length > 0;

	return (
		<>
			{!disabled ?
				<SingleDropdownWrapper innerWidth={inputSettings?.size}>
					<StyledAutocomplete
						onOpen={handleOpen}
						onClose={handleOpen}
						data-testid="autocomplete-test-id"
						options={inputSettings?.options}
						size={inputSettings?.size}
						getOptionLabel={(option) => option.title}
						onChange={(_event, option) => onChange(option)}
						error={!!(required && errorWithMessage)}
						renderInput={renderInput}
						disablePortal={true}
						popupIcon={<ExpandMoreIcon />}
						onBlur={(e) => onBlur(e.target.value)}
						open={isOpen}
					/>
				</SingleDropdownWrapper>
				:
				<StyledDisabledDropdownText
					data-testid="disabled-text-test-id"
				>
					{(!value?.option || value.option.trim() === '') ?
						inputSettings?.placeholder : value.option
					}
				</StyledDisabledDropdownText>
			}
		</>
	);
};

export default memo(DropdownSingleSelection);

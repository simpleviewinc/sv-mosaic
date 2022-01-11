import * as React from 'react';
import { useState, memo, HTMLAttributes } from "react";
import {
	StyledAutocomplete,
	StyledDisabledDropdownText,
	SingleDropdownWrapper,
} from "./FormFieldDropdownSingleSelection.styled";
import { DropdownSingleSelectionProps } from "./FormFieldDropdownSingleSelectionTypes";

// Components
import InputWrapper from '../../components/InputWrapper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TextField from '@material-ui/core/TextField';

const DropdownSingleSelection = (props: DropdownSingleSelectionProps & HTMLAttributes<HTMLInputElement>) => {
	const {
		disabled = false,
		error,
		required,
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
				required={required}
			/>
		</InputWrapper>
	);

	const handleOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			{!disabled ?
				<SingleDropdownWrapper innerWidth={inputSettings?.size}>
					<StyledAutocomplete
						value={value}
						onOpen={handleOpen}
						onClose={handleOpen}
						data-testid="autocomplete-test-id"
						options={inputSettings?.options}
						getOptionLabel={(option) => option.title}
						onChange={(_event, option) => onChange && onChange(option)}
						error={(required && error) ? error : undefined}
						renderInput={renderInput}
						disablePortal={true}
						popupIcon={<ExpandMoreIcon />}
						onBlur={(e) => onBlur && onBlur(e.target.value)}
						open={isOpen}
					/>
				</SingleDropdownWrapper>
				:
				<StyledDisabledDropdownText
					data-testid="disabled-text-test-id"
				>
					{(!value?.title || value.title.trim() === '') ?
						inputSettings?.placeholder : value.title
					}
				</StyledDisabledDropdownText>
			}
		</>
	);
};

export default memo(DropdownSingleSelection);

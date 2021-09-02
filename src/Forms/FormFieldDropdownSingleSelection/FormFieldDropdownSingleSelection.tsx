import * as React from 'react';
import { useState, memo } from "react";
import {
	StyledAutocomplete,
	StyledHelperText,
	StyledInstructionText,
	StyledDisabledDropdownText,
	StyledErrorText,
	StyledErrorWrapper,
	StyledErrorIcon,
	StyledErrorMessage,
} from "./FormFieldDropdownSingleSelection.styled";

import InputWrapper from '../../components/InputWrapper';
import TextField from '@material-ui/core/TextField';
import { DropdownSingleSelectionProps } from "./FormFieldDropdownSingleSelectionTypes";
import Label from '@root/components/Typography/Label';

const DropdownSingleSelection = (props: DropdownSingleSelectionProps) => {
	const [selectedOption, setSelectedOption] = useState('');
	const [error, setError] = useState(false);

	const onBlur = (e) => {
		if (props.required && (!e.target.value || e.target.value?.trim().length === 0)) {
			setError(true);
		} else {
			setError(false);
		}
	}

	const renderInput = (params) => (
		<InputWrapper>
			<TextField
				{...params}
				data-testid="textfield-test-id"
				variant="outlined"
				placeholder={props.placeholder}
				onBlur={(e) => onBlur(e)}
			/>
			<StyledInstructionText
				data-testid="instruction-text-test-id"
			>
				{props.instructionText}
			</StyledInstructionText>
		</InputWrapper>
	);

	return (
		<StyledErrorWrapper
			error={error && props.required}
			data-testid="error-wrapper-test-id"
		>	
			<Label 
				disabled={props.disabled}
				required={props.required}
				data-testid="label-test-id"
			>
				{props.label}
			</Label>
			{!props.disabled ? 
				<>
					<StyledAutocomplete
						data-testid="autocomplete-test-id"
						options={props.options}
						size={props.size}
						getOptionLabel={(option) => option.title}
						onChange={(_event, option) => setSelectedOption(option.title)}
						error={props.required && error}
						errorText={props.errorText}
						renderInput={renderInput}
						disablePortal={true}
					/>
					{(!error && props.helperText?.trim().length > 0) &&
						<StyledHelperText
							data-testid="helper-text-test-id"
						>
							{props.helperText}
						</StyledHelperText>
					}

					{(error && props.required && props.errorText?.trim().length > 0) &&
						<StyledErrorMessage
							data-testid="error-message-test-id"
						>
							<StyledErrorIcon />
							<StyledErrorText>
								{props.errorText}
							</StyledErrorText>
						</StyledErrorMessage>
					}
				</>
				:
				<StyledDisabledDropdownText
					data-testid="disabled-text-test-id"
				>
					{(!selectedOption || selectedOption.trim() === '') ? 
						props.placeholder : selectedOption
					}
				</StyledDisabledDropdownText>
			}
		</StyledErrorWrapper>
	);
};

export default memo(DropdownSingleSelection);

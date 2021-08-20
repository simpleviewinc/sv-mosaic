import * as React from 'react';
import { useState, memo } from "react";
import {
	StyledLabel,
	StyledAutocomplete,
	StyledHelperText,
	StyledInstructionText,
	StyledInputWrapper,
	StyledDisabledDropdownText,
	StyledErrorText,
	StyledErrorWrapper,
	StyledErrorIcon,
	StyledErrorMessage,
} from "./DropdownSingleSelection.styled";

import TextField from '@material-ui/core/TextField';
import { DropdownSingleSelectionProps } from "./DropdownSingleSelectionTypes";


const DropdownSingleSelection = (props: DropdownSingleSelectionProps) => {
	const [selectedOption, setSelectedOption] = useState('');
	const [error, setError] = useState(false);

	const onBlur = (e) => {
		if(props.required && (!e.target.value || e.target.value?.trim().length === 0)) {
			setError(true);
		} else {
			setError(false);
		}
	}

	return(
		<StyledErrorWrapper error={error && props.required}>	
			<StyledLabel 
				required={props.required}
			>
				{props.label}
			</StyledLabel>
			{!props.disabled ? 
				<>
					<StyledAutocomplete
						id="combo-box-demo"
						options={props.options}
						size={props.size}
						getOptionLabel={(option) => {
								setSelectedOption(option.title);
								return option.title;
							}
						}
						error={props.required && error}
						errorText={props.errorText}
						renderInput={
							(params) => 
								<StyledInputWrapper>
									<TextField
										{...params}
										variant="outlined"
										placeholder={props.placeholder}
										onBlur={(e) => onBlur(e)}
									/>
									<StyledInstructionText>
										{props.instructionText}
									</StyledInstructionText>
								</StyledInputWrapper>
						}
					/>
					{(!error && props.helperText?.trim().length > 0) &&
						<StyledHelperText>
							{props.helperText}
						</StyledHelperText>
					}

					{(error && props.required && props.errorText?.trim().length > 0) &&
						<StyledErrorMessage>
							<StyledErrorIcon />
							<StyledErrorText>
								{props.errorText}
							</StyledErrorText>
						</StyledErrorMessage>
					}
				</>
			:
				<StyledDisabledDropdownText>
					{(!selectedOption || selectedOption.trim() === '') ? 
						"No option selected" : selectedOption
					}
				</StyledDisabledDropdownText>
			}
		</StyledErrorWrapper>
	);
};

export default memo(DropdownSingleSelection);

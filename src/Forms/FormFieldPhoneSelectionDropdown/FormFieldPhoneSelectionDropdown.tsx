import * as React from 'react';
import { ReactElement } from 'react';

// Components
import HelperText from '@root/components/HelperText';
import { Label } from '@root/components/Typography';
import FieldWrapper from '@root/components/FieldWrapper';
import InstructionText from '@root/components/InstructionText';
import InputWrapper from '@root/components/InputWrapper';
import PhoneInput from 'react-phone-input-2';

// Types and styles
import 'react-phone-input-2/lib/bootstrap.css';
import { FormFieldPhoneSelectionDropdownProps } from './FormFieldPhoneSelectionDropdownTypes';
import {
	PhoneInputWrapper,
	StyledDisabledText,
} from './FormFieldPhoneSelectionDropdown.styled';

const FormFieldPhoneSelectionDropdown = (
	props: FormFieldPhoneSelectionDropdownProps
): ReactElement => {
	const {
		autoFormat = true,
		country = 'us',
		disabled,
		error,
		errorText,
		helperText,
		instructionText,
		label,
		onChange,
		placeholder,
		required,
		value,
	} = props;

	const errorField = error && required;

	return !disabled ? (
		<InputWrapper>
			<FieldWrapper error={errorField}>
				<Label disabled={disabled} required={required}>
					{label}
				</Label>
				<PhoneInputWrapper>
					<PhoneInput
						autoFormat={autoFormat}
						country={country}
						disabled={disabled}
						onChange={onChange}
						placeholder={placeholder}
						value={value}
						inputProps={{
							required: required,
						}}
					/>
				</PhoneInputWrapper>
				{errorText && errorField ? (
					<HelperText error>{errorText}</HelperText>
				) : (
					<HelperText>{helperText}</HelperText>
				)}
			</FieldWrapper>
			{instructionText && <InstructionText>{instructionText}</InstructionText>}
		</InputWrapper>
	) : (
		value ? <StyledDisabledText>Phone value: {value}</StyledDisabledText> : <StyledDisabledText>Phone field disabled</StyledDisabledText>
	);
};
export default FormFieldPhoneSelectionDropdown;

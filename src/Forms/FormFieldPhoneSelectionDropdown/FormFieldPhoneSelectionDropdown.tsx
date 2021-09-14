import * as React from 'react';
import { HTMLAttributes, ReactElement } from 'react';

// Components
import HelperText from '@root/components/HelperText';
import { Label } from '@root/components/Typography';
import FieldWrapper from '@root/components/FieldWrapper';
import InstructionText from '@root/components/InstructionText';
import PhoneInput from 'react-phone-input-2';

// Types and styles
import 'react-phone-input-2/lib/bootstrap.css';
import { FormFieldPhoneSelectionDropdownProps } from './FormFieldPhoneSelectionDropdownTypes';
import { PhoneInputWrapper } from './FormFieldPhoneSelectionDropdown.styled';

const FormFieldPhoneSelectionDropdown = (
	props: FormFieldPhoneSelectionDropdownProps & HTMLAttributes<HTMLInputElement>
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
		placeholder,
		required,
		value,
	} = props;

	const errorField = error && required;

	return (
		<FieldWrapper error={errorField}>
			<Label disabled={disabled} required={required}>
				{label}
			</Label>
			{instructionText && <InstructionText>{instructionText}</InstructionText>}
			<PhoneInputWrapper>
				<PhoneInput
					autoFormat={autoFormat}
					country={country}
					disabled={disabled}
					onChange={(phone) => console.log({ phone })}
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
	);
};
export default FormFieldPhoneSelectionDropdown;

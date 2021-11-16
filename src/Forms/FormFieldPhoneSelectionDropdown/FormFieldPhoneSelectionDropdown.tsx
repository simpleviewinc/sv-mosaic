import * as React from 'react';
import { ReactElement, memo, HTMLAttributes } from 'react';

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
	props: FormFieldPhoneSelectionDropdownProps & HTMLAttributes<HTMLInputElement>
): ReactElement => {
	const {
		inputSettings,
		disabled,
		error,
		onChange,
		onBlur,
		required,
		value,
	} = props;

	return !disabled ? (
				<PhoneInputWrapper
					error={!!(required && error)}
					onBlur={(e) => onBlur(e.target.value)}
				>
					<PhoneInput
						autoFormat={inputSettings?.autoFormat ? inputSettings.autoFormat : true}
						country={inputSettings?.country ? inputSettings.country : 'us'}
						disabled={disabled}
						onChange={onChange}
						placeholder={inputSettings?.placeholder}
						value={value}
						inputProps={{
							required: required,
						}}
					/>
				</PhoneInputWrapper>
	) : (
		value ? <StyledDisabledText>Phone value: {value}</StyledDisabledText> : <StyledDisabledText>Phone field disabled</StyledDisabledText>
	);
};
export default memo(FormFieldPhoneSelectionDropdown);
